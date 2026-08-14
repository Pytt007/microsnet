import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, userData: { first_name: string; last_name: string; phone: string }) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  deleteAccount: () => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupère la session active au chargement
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Écoute les changements d'état d'auth (login, logout, refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (
    email: string,
    password: string,
    userData: { first_name: string; last_name: string; phone: string }
  ) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: userData.first_name,
          last_name: userData.last_name,
          phone: userData.phone,
        },
      },
    });

    if (error) {
      toast({ title: 'Erreur d\'inscription', description: error.message, variant: 'destructive' });
    } else if (data.user) {
      // Insère dans la table profiles
      await supabase.from('profiles').upsert({
        id: data.user.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone: userData.phone,
      });
      toast({ title: 'Compte créé !', description: 'Vérifiez votre email pour confirmer votre compte.' });
    }

    setLoading(false);
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({ title: 'Erreur de connexion', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Connexion réussie', description: 'Bienvenue sur MicroSnet !' });
    }

    setLoading(false);
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    toast({ title: 'Déconnecté', description: 'À bientôt !' });
  };

  const deleteAccount = async () => {
    // Nécessite une Edge Function côté Supabase pour supprimer auth.users
    const { error } = await supabase.rpc('delete_user');
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    }
    return { error };
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    deleteAccount,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
