import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between text-gray-900 font-inter antialiased">
      <Header />

      <main className="pt-28 pb-16 flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto bg-white p-10 sm:p-12 rounded-3xl border border-gray-100 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Erreur 404
          </div>

          <h1 className="text-6xl sm:text-7xl font-space font-extrabold text-brand-navy mb-4">
            4<span className="text-brand-orange">0</span>4
          </h1>

          <h2 className="text-xl font-space font-bold text-brand-navy mb-3">
            Page introuvable
          </h2>

          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée. Veuillez vérifier l'adresse ou retourner à l'accueil.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-md"
            >
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <Link
              to="/services"
              className="bg-gray-100 hover:bg-gray-200 text-brand-navy font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Nos services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
