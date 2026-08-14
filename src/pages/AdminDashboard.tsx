import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShoppingCart,
  Clock,
  Play,
  CheckCircle2,
  LogOut,
  FileText,
  Users,
  TrendingUp,
  Calendar,
  Sparkles,
  ShieldCheck,
  Search
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const AdminDashboard = () => {
  const [orders] = useState<any[]>([]);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50/80 text-gray-900 font-inter antialiased flex flex-col justify-between">
      <Header currentPage="admin" />

      <main className="pt-28 pb-16 flex-1">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Banner */}
          <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 mb-8 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                  Administration Centrale
                </div>
                <h1 className="text-2xl sm:text-3xl font-space font-bold text-white">
                  Tableau de bord Super-Admin
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  Supervision globale des dossiers, commandes et paiements
                </p>
              </div>

              <button
                onClick={logout}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/15 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Déconnexion Admin
              </button>
            </div>
          </div>

          {/* 4 Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Commandes</p>
                <p className="text-2xl font-space font-bold text-brand-navy">0</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">En Attente</p>
                <p className="text-2xl font-space font-bold text-brand-navy">0</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">En Cours d'Instruction</p>
                <p className="text-2xl font-space font-bold text-brand-navy">0</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dossiers Finalisés</p>
                <p className="text-2xl font-space font-bold text-brand-navy">0</p>
              </div>
            </div>
          </div>

          {/* Orders Table Container */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-xl font-space font-bold text-brand-navy">Gestion des Dossiers Clients</h2>
                <p className="text-xs text-gray-500">Traitez et modifiez le statut de chaque demande client</p>
              </div>
            </div>

            <div className="text-center py-16 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-base font-space font-bold text-brand-navy mb-1">
                Aucune commande enregistrée
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Les dossiers créés par les utilisateurs depuis le portail apparaîtront automatiquement ici avec leurs pièces justificatives.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
