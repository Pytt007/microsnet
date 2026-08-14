import { Phone, Mail, MapPin, Globe, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-navy text-white border-t border-white/10 pt-16 pb-12">
      <div className="container mx-auto px-4">
        {/* 4 Contact Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Phone */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full border-2 border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/10 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">TÉLÉPHONE</p>
              <p className="text-sm font-semibold text-white tracking-wide">+225 07 00 00 00 00</p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full border-2 border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/10 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">SUPPORT & EMAIL</p>
              <p className="text-sm font-semibold text-white tracking-wide">contact@microsnet.ci</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full border-2 border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/10 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">ADRESSE</p>
              <p className="text-sm font-semibold text-white tracking-wide">Abidjan</p>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full border-2 border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/10 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">SITE OFFICIEL</p>
              <p className="text-sm font-semibold text-white tracking-wide">www.microsnet.ci</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} MicroSnet. Tous droits réservés. Plateforme Juridique & Administrative.</p>
          <div className="flex items-center gap-6">
            <Link to="/services" className="hover:text-brand-orange transition-colors">Services</Link>
            <Link to="/about" className="hover:text-brand-orange transition-colors">À propos</Link>
            <Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-all ml-4 cursor-pointer shadow-md"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
