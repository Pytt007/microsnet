import { Building2, Users, Newspaper, Award, BarChart3, Scale, Calculator, Plane, ArrowRight, CheckCircle2, Sparkles, Shield, Clock, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicesList = [
  {
    icon: Building2,
    badge: "JURIDIQUE",
    title: "Création d'Entreprise",
    subtitle: "SARL, SAS, SA & Auto-entrepreneur",
    description: "Constitution intégrale de votre société en Côte d'Ivoire. Rédaction des statuts sur-mesure, immatriculation au CEPICI, obtention du RCCM et DFE.",
    features: ["Rédaction des statuts notariés/sous seing privé", "Dépôt & suivi CEPICI accéléré", "Obtention RCCM, DFE & Compte bancaire"],
    link: "/services/creation-entreprise",
    hasDetailPage: true
  },
  {
    icon: Users,
    badge: "ADMINISTRATION",
    title: "Rattachement Fiscal & CNPS",
    subtitle: "Conformité administrative & sociale",
    description: "Rattachement de votre structure auprès du centre des impôts (DGI) compétent et affiliation à la Caisse Nationale de Prévoyance Sociale (CNPS).",
    features: ["Immatriculation fiscale DGI", "Affiliation employeur & salariés CNPS", "Mise en place du compte télédéclaration"],
    link: "/services/rattachement-services",
    hasDetailPage: true
  },
  {
    icon: Newspaper,
    badge: "LÉGAL",
    title: "Annonces Légales Officielles",
    subtitle: "Publication dans les journaux habilités",
    description: "Rédaction et publication immédiate de vos avis de constitution, modifications statutaires, dissolutions et cessions de parts.",
    features: ["Avis de constitution & PV d'AG", "Attestation de parution sous 24h", "Diffusion aux journaux d'annonces légales"],
    link: "/services/annonces-legales",
    hasDetailPage: true
  },
  {
    icon: Plane,
    badge: "AGRÉMENTS",
    title: "Agrément Tourisme & Hôtellerie",
    subtitle: "Licences Ministère du Tourisme",
    description: "Accompagnement complet pour l'obtention des licences d'exploitation pour agences de voyages, complexes hôteliers et restaurants.",
    features: ["Audit préalable de conformité", "Montage du dossier technique & juridique", "Suivi rigoureux auprès des commissions"],
    link: "/services/agrement-tourisme",
    hasDetailPage: true
  },
  {
    icon: Award,
    badge: "RÉGLEMENTATION",
    title: "Agréments Sectoriels & Licences",
    subtitle: "BTP, Santé, Commerce & Industrie",
    description: "Constitution et suivi de vos dossiers d'agrément auprès des ministères et autorités de régulation ivoiriennes.",
    features: ["Vérification des conditions réglementaires", "Rédaction des mémoires justificatifs", "Représentation auprès des ministères"],
    link: "/contact",
    hasDetailPage: false
  },
  {
    icon: Scale,
    badge: "CONSEIL",
    title: "Actes Juridiques & Contrats",
    subtitle: "Droit des affaires & OHADA",
    description: "Rédaction et révision de vos contrats commerciaux, baux professionnels, pactes d'associés et conventions de prestations.",
    features: ["Baux commerciaux sécurisés", "Pactes d'associés & accords de confidentialité", "Procès-verbaux d'assemblées générales"],
    link: "/contact",
    hasDetailPage: false
  },
  {
    icon: Calculator,
    badge: "FINANCE",
    title: "Services Comptables & Fiscaux",
    subtitle: "Gestion de livres & déclarations",
    description: "Tenue de comptabilité conforme au système SYSCOHADA révisé, déclarations fiscales mensuelles et assistance aux contrôles.",
    features: ["Tenue comptable & bilan annuel", "Déclarations TVA, ITS, BIC & IRPP", "Optimisation fiscale légale"],
    link: "/contact",
    hasDetailPage: false
  },
  {
    icon: BarChart3,
    badge: "STRATÉGIE",
    title: "Étude de Marché & Business Plan",
    subtitle: "Planification financière & levée de fonds",
    description: "Élaboration de business plans bancables et études de faisabilité pour convaincre investisseurs et institutions financières.",
    features: ["Modélisation financière prévisionnelle", "Étude sectorielle en Côte d'Ivoire & UEMOA", "Dossiers de recherche de financements"],
    link: "/contact",
    hasDetailPage: false
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter antialiased">
      <Header currentPage="services" />

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-32 lg:pt-36 pb-20 overflow-hidden bg-brand-navy text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            Catalogue des Expertises Iliko
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold uppercase tracking-tight mb-6 leading-tight">
            Tous nos services <br />
            <span className="text-brand-orange">juridiques & administratifs</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Une gamme complète de solutions conçues pour sécuriser, accélérer et fluidifier la vie de votre entreprise à chaque étape de sa croissance en Côte d'Ivoire.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* ADVANTAGES STRIP                                              */}
      {/* ------------------------------------------------------------- */}
      <section className="py-6 bg-brand-orange text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Délais accélérés et respectés</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Conformité juridique garantie à 100%</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <PhoneCall className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Accompagnement par des juristes dédiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICES GRID                                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
              Solutions Clés en Main
            </p>
            <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-brand-navy">
              Choisissez l'accompagnement adapté à vos besoins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-space font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-gray-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-space font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-8 pt-4 border-t border-gray-100 text-xs text-gray-600">
                    {service.features.map((feat, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    to={service.link}
                    className="w-full bg-brand-navy hover:bg-brand-orange text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm group-hover:shadow-md"
                  >
                    <span>{service.hasDetailPage ? "Démarrer la démarche" : "Demander un devis"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CTA BANNER                                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-space font-bold mb-4">
            Besoin d'un accompagnement personnalisé ou d'une étude de dossier ?
          </h2>
          <p className="text-gray-300 text-sm mb-8 leading-relaxed">
            Nos juristes et experts-comptables vous conseillent gratuitement pour identifier les meilleures démarches adaptées à votre structure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-8 rounded-full transition-all shadow-lg hover:scale-105"
            >
              Contactez un conseiller
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
