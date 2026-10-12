import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, ShieldCheck, Sparkles, ArrowRight, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (email === "admin@iliko.com" && password === "admin") {
      toast({
        title: "Connexion réussie",
        description: "Accès au tableau de bord administrateur autorisé (Mode Démo)",
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Erreur de connexion",
        description: "Identifiants incorrects (Compte de test: admin@iliko.com / admin)",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased flex flex-col justify-between">
      <Header currentPage="admin" />

      <main className="pt-28 pb-16 flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-navy text-brand-orange flex items-center justify-center mx-auto mb-4 shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5" />
              Portail d'Administration
            </div>
            <h1 className="text-2xl font-space font-extrabold text-brand-navy">
              Connexion Back-Office
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Accès strictement réservé aux gestionnaires de Iliko
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                Identifiant Administrateur
              </label>
              <input
                type="email"
                placeholder="admin@iliko.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-navy"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-brand-navy hover:bg-brand-orange text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
            >
              <span>{loading ? "VÉRIFICATION..." : "ACCÉDER AU DASHBOARD"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminLogin;
