import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "creation",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Votre message a été transmis avec succès ! Notre équipe vous répondra sous 24h.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "creation",
        message: ""
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter antialiased">
      <Header currentPage="contact" />

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-32 lg:pt-36 pb-20 overflow-hidden bg-brand-navy text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            Support & Rendez-vous
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold uppercase tracking-tight mb-6 leading-tight">
            Contactez <span className="text-brand-orange">nos experts</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Une question sur vos statuts, votre fiscalité ou la création de votre entreprise ? Nos juristes sont à votre disposition pour une consultation personnalisée.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4 CONTACT CARDS                                               */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-space font-bold text-brand-navy mb-1">Téléphone</h3>
              <p className="text-sm font-semibold text-brand-orange">+225 07 00 00 00 00</p>
              <p className="text-xs text-gray-400 mt-1">Lun - Ven : 8h00 - 18h00</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-space font-bold text-brand-navy mb-1">Email</h3>
              <p className="text-sm font-semibold text-brand-orange">contact@microsnet.ci</p>
              <p className="text-xs text-gray-400 mt-1">Réponse sous 24h ouvrées</p>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-space font-bold text-brand-navy mb-1">Adresse</h3>
              <p className="text-sm font-semibold text-brand-navy">Abidjan</p>
              <p className="text-xs text-gray-400 mt-1">Côte d'Ivoire</p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-brand-orange/40 transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-space font-bold text-brand-navy mb-1">Horaires</h3>
              <p className="text-sm font-semibold text-brand-navy">Lundi au Vendredi</p>
              <p className="text-xs text-gray-400 mt-1">8h00 - 18h00 non-stop</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FORM & INFO SECTION                                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 pb-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Info & Reassurance */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
                  ÉCHANGEZ AVEC NOUS
                </p>
                <h2 className="text-3xl font-space font-extrabold text-brand-navy">
                  Un accompagnement sur-mesure pour chaque étape
                </h2>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Remplissez notre formulaire pour soumettre votre demande ou planifier un entretien avec l'un de nos juristes spécialisés. Nous étudions chaque dossier avec la plus grande confidentialité.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Étude gratuite de dossier</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Premier diagnostic sans engagement de vos formalités.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Devis transparent et garanti</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Aucun frais caché, tarification claire dès le départ.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Confidentialité totale OHADA</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Protection intégrale de vos données et secrets d'affaires.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-space font-extrabold text-brand-navy mb-2">
                  Formulaire de contact
                </h3>
                <p className="text-xs text-gray-500 mb-8">
                  Tous les champs marqués d'un astérisque (*) sont obligatoires.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Jean"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                        Nom *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Kouassi"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: j.kouassi@entreprise.ci"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                        Téléphone (+225) *
                      </label>
                      <input
                        type="tel"
                        placeholder="Ex: 07 00 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                      Service concerné
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white"
                    >
                      <option value="creation">Création d'Entreprise (SARL, SAS, SA)</option>
                      <option value="rattachement">Rattachement Fiscal & CNPS</option>
                      <option value="annonces">Annonces Légales</option>
                      <option value="agrement">Agréments & Licences (Tourisme, etc.)</option>
                      <option value="actes">Actes Juridiques & Contrats</option>
                      <option value="compta">Comptabilité & Déclarations</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                      Description de votre demande *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Précisez votre projet, le statut juridique envisagé ou vos questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-brand-navy hover:bg-brand-orange text-white font-space font-bold uppercase tracking-wider text-xs py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                  >
                    <span>{isSubmitting ? "TRANSMISSION..." : "ENVOYER LE MESSAGE"}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
