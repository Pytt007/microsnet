import { Shield, Users, Award, Target, Heart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter antialiased">
      <Header currentPage="about" />

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-32 lg:pt-36 pb-20 overflow-hidden bg-brand-navy text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            L'Élite Juridique & Administrative
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold uppercase tracking-tight mb-6 leading-tight">
            À propos de <span className="text-brand-orange">MicroSnet</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pionniers de la LegalTech en Côte d'Ivoire, nous allions expertise juridique de pointe et technologie digitale pour simplifier la vie des entreprises.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* MISSION & VISION                                              */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
                  NOTRE MISSION
                </p>
                <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-brand-navy uppercase tracking-tight">
                  Démocratiser et sécuriser l'accès aux formalités d'entreprise
                </h2>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                Chez MicroSnet, nous sommes convaincus que créer et piloter une structure en Côte d'Ivoire ne doit plus être un parcours d'obstacles administratifs. Notre vocation est d'offrir à chaque porteur de projet, PME ou groupe international une expérience fluide, rapide et rigoureusement conforme.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                En combinant des juristes spécialisés en droit des affaires OHADA, des fiscalistes reconnus et une plateforme numérique intuitive, nous réduisons les délais par deux tout en garantissant une traçabilité intégrale de vos démarches.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">Constitution d'entreprise et immatriculation accélérées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">Veille réglementaire et conformité fiscale continue</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-semibold text-brand-navy">Interlocuteur juriste dédié pour chaque dossier</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual with orange offset frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute -top-4 -right-4 w-48 h-64 border-4 border-brand-orange rounded-2xl z-20 pointer-events-none hidden sm:block" />
                <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                    alt="Cabinet MicroSnet Abidjan"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4 CORE PILLARS                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-gray-50/60 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
              Nos Engagements
            </p>
            <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-brand-navy">
              Les piliers d'excellence de MicroSnet
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-space font-bold text-brand-navy mb-2">Simplicité</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Des démarches dématérialisées claires et un suivi en temps réel de votre dossier sans déplacement inutile.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-space font-bold text-brand-navy mb-2">Sécurité</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Confidentialité absolue et protection de vos documents stratégiques conformément aux plus hauts standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-space font-bold text-brand-navy mb-2">Accompagnement</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Un juriste dédié et disponible pour vous conseiller et répondre à toutes vos interrogations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-space font-bold text-brand-navy mb-2">Excellence</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Une rigueur juridique sans faille pour éviter tout vice de forme ou retard dans vos démarches officielles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STATS BANNER                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-brand-orange text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-4xl sm:text-5xl font-space font-extrabold mb-1">927+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">Entreprises Immatriculées</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-space font-extrabold mb-1">99%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">Dossiers Validés</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-space font-extrabold mb-1">24h</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">Délai Moyen de Réponse</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-space font-extrabold mb-1">25+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">Juristes & Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CTA                                                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-space font-bold mb-6">
            Prêt à lancer ou structurer votre entreprise ?
          </h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed">
            Discutez de votre projet avec l'un de nos conseillers juridiques dès aujourd'hui.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-full transition-all shadow-xl hover:scale-105"
          >
            Prendre contact avec nos experts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
