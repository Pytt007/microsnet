import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  FileText,
  Clock,
  CheckCircle2,
  User,
  Building2,
  Sparkles,
  ArrowRight,
  PlusCircle,
  Shield,
  HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
      return;
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        <Header currentPage="" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-brand-orange border-t-transparent"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/70 text-gray-900 font-inter antialiased flex flex-col justify-between">
      <Header currentPage="" />

      <main className="pt-28 pb-16 flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Welcome Header Banner */}
          <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 mb-8 shadow-xl relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy-dark" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  Espace Client Sécurisé
                </div>
                <h1 className="text-2xl sm:text-3xl font-space font-bold text-white mb-2">
                  Bonjour, {user?.email?.split("@")[0] || "Entrepreneur"} 👋
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Bienvenue sur votre espace de gestion juridique et administrative MicroSnet.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/services"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-xl font-space font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <PlusCircle className="w-4 h-4" />
                  Nouvelle Démarche
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/15 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </button>
              </div>
            </div>
          </div>

          {/* 3 KPI Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dossiers en cours</p>
                <p className="text-2xl font-space font-bold text-brand-navy">0</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dossiers finalisés</p>
                <p className="text-2xl font-space font-bold text-brand-navy">0</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Documents officiels</p>
                <p className="text-2xl font-space font-bold text-brand-navy">0</p>
              </div>
            </div>
          </div>

          {/* Quick Services Launchers */}
          <div className="mb-8">
            <h2 className="text-lg font-space font-bold text-brand-navy mb-4">
              Démarches rapides recommandées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/services/creation-entreprise"
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-orange/40 transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-space font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                  Créer une entreprise
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  SARL, SAS ou entreprise individuelle avec formalités CEPICI complètes.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1">
                  Commencer <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/services/rattachement-services"
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-orange/40 transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-space font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                  Rattachement Impôts & CNPS
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Immatriculation fiscale et mise en conformité de votre société.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1">
                  Commencer <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-orange/40 transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-space font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                  Conseil Juridique Dédié
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Sollicitez l'avis d'un juriste d'affaires pour votre situation spécifique.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1">
                  Échanger <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Orders Section */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-space font-bold text-brand-navy">Mes démarches & commandes</h2>
                <p className="text-xs text-gray-500">Historique et statut en direct de vos dossiers</p>
              </div>
            </div>

            <div className="text-center py-12 px-4 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-base font-space font-bold text-brand-navy mb-1">
                Aucune démarche en cours
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mb-6">
                Vous n'avez pas encore passé de commande. Explorez nos services pour formaliser ou développer votre entreprise.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-xl transition-all shadow-sm"
              >
                Découvrir le catalogue
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
