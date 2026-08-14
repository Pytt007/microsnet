import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Menu, X, Phone, Mail } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: HeaderProps) => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      {/* Top micro bar */}
      <div className="hidden lg:block bg-brand-navy text-gray-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>+225 07 00 00 00 00</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>contact@microsnet.ci</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-gray-400">Lundi - Vendredi : 8h00 - 18h00</span>
            <span className="text-brand-orange font-semibold">Plateforme Juridique & Administrative N°1</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="MicroSnet" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-semibold tracking-wide transition-colors ${
              currentPage === "home" ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            className={`text-sm font-semibold tracking-wide transition-colors ${
              currentPage === "services" ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`text-sm font-semibold tracking-wide transition-colors ${
              currentPage === "about" ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
            }`}
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-semibold tracking-wide transition-colors ${
              currentPage === "contact" ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Link
              to="/dashboard"
              className="text-brand-navy hover:text-brand-orange transition-colors font-semibold flex items-center gap-2 text-sm"
            >
              <User className="h-4 w-4" />
              <span>Mon espace</span>
            </Link>
          ) : (
            <Link
              to="/auth"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-full transition-all text-sm font-semibold flex items-center gap-2 shadow-sm"
            >
              Connexion
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-navy hover:text-brand-orange transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-4 animate-fade-in shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-brand-navy hover:text-brand-orange"
          >
            Accueil
          </Link>
          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-brand-navy hover:text-brand-orange"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-brand-navy hover:text-brand-orange"
          >
            À propos
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-brand-navy hover:text-brand-orange"
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-gray-100">
            {user ? (
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-semibold text-brand-orange"
              >
                <User className="h-4 w-4" />
                Mon espace
              </Link>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2 rounded-full text-sm font-semibold w-full justify-center"
              >
                Connexion
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
