import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Cloud,
  FileCheck2,
  Award,
  ShieldCheck,
  Globe2,
  ArrowRight,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Sparkles,
  Building2,
  Scale,
  Calculator,
  Share2
} from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Votre demande a été envoyée avec succès ! Un conseiller juridique vous contactera sous 24h.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter antialiased">
      <Header currentPage="home" />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO WITH CONTACT FORM CARD                        */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-brand-navy">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                Cabinet Conseil & Plateforme Digitale en Côte d'Ivoire
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold uppercase leading-[1.15] tracking-tight text-white">
                Administration des Services <br />
                Externalisés aux Entreprises <br />
                <span className="text-brand-orange">EN CÔTE D'IVOIRE !</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Accompagnement d'élite pour la constitution de sociétés, la gestion fiscale, la rédaction d'actes certifiés et le montage d'agréments administratifs à Abidjan.
              </p>

              {/* Phone & Mail strip */}
              <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-orange border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">APPELEZ-NOUS</span>
                    <span className="text-sm font-semibold text-white">+225 05 03 61 71 71</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-orange border border-white/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">EMAIL DIRECT</span>
                    <span className="text-sm font-semibold text-white">contact@iliko.ci</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Contact Form Box */}
            <div className="lg:col-span-5">
              <div className="bg-brand-orange text-white p-8 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Subtle watermark background icon */}
                <div className="absolute -bottom-6 -right-6 text-white/10 pointer-events-none">
                  <Send className="w-40 h-40" />
                </div>

                <h3 className="text-xl sm:text-2xl font-space font-extrabold uppercase tracking-tight mb-2 leading-tight">
                  DEMANDEZ UN DEVIS & <br />
                  PARLEZ À UN CONSEILLER <br />
                  MAINTENANT !
                </h3>
                <p className="text-white/80 text-xs mb-6 font-medium">
                  Réponse garantie sous 24h ouvrées par nos juristes experts.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
                  <div>
                    <input
                      type="text"
                      placeholder="Nom complet ou Société..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm rounded bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy shadow-inner"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Numéro de téléphone (+225)..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm rounded bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy shadow-inner"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Adresse email professionnelle..."
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm rounded bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy shadow-inner"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Décrivez votre besoin (Création SARL, Fiscalité, Agréments...)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-brand-navy hover:bg-brand-navy-dark text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                  >
                    <span>{isSubmitting ? "TRANSMISSION..." : "ENVOYER MA DEMANDE"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: 3-CARD ACTION & SERVICE HIGHLIGHT                  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-space font-bold text-brand-navy leading-tight">
                Des solutions juridiques, fiscales et administratives intégrales pour entrepreneurs exigeants.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                Iliko simplifie l'écosystème des affaires en Côte d'Ivoire. Nous prenons en charge l'ensemble de vos démarches administratives, de la rédaction de vos statuts jusqu'à l'obtention de vos agréments officiels, avec rigueur et célérité.
              </p>
            </div>
          </div>

          {/* 3 Column Cards with Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: About */}
            <div className="group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Notre Cabinet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-0 mt-auto">
                <Link
                  to="/about"
                  className="w-full bg-brand-navy hover:bg-brand-orange text-white py-3.5 px-6 font-space font-bold uppercase tracking-wider text-xs flex items-center justify-center transition-colors"
                >
                  NOTRE CABINET
                </Link>
              </div>
            </div>

            {/* Card 2: Services */}
            <div className="group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                  alt="Nos Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-0 mt-auto">
                <Link
                  to="/services"
                  className="w-full bg-brand-navy hover:bg-brand-orange text-white py-3.5 px-6 font-space font-bold uppercase tracking-wider text-xs flex items-center justify-center transition-colors"
                >
                  NOS SERVICES
                </Link>
              </div>
            </div>

            {/* Card 3: Contact */}
            <div className="group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Contact & Rendez-vous"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-0 mt-auto">
                <Link
                  to="/contact"
                  className="w-full bg-brand-navy hover:bg-brand-orange text-white py-3.5 px-6 font-space font-bold uppercase tracking-wider text-xs flex items-center justify-center transition-colors"
                >
                  PRENDRE RENDEZ-VOUS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: ORANGE 5-FEATURE STRIP                             */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-brand-orange text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Tarification Transparente</span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileCheck2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Dossiers & Agréments</span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Juristes Certifiés</span>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Accompagnement 24/7</span>
            </div>

            {/* Feature 5 */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Leader LegalTech CI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: GET TO KNOW OUR COMPANY HISTORY                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-navy/60 mb-1">
                  NOTRE HISTOIRE & MISSION
                </p>
                <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-brand-navy uppercase tracking-tight">
                  AU SERVICE DES ENTREPRENEURS EN CÔTE D'IVOIRE
                </h2>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mt-1">
                  BIENVENUE CHEZ ILIKO
                </p>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                Fondé par des juristes chevronnés et des experts du climat des affaires, Iliko s'engage à démocratiser l'accès aux formalités juridiques et administratives. Nous vous aidons à bâtir des bases solides pour votre structure, de la rédaction des statuts à l'immatriculation fiscale et sociale.
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div>
                  <span className="block text-4xl sm:text-5xl font-space font-extrabold text-brand-orange">
                    927+
                  </span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1 block">
                    Entreprises Créées
                  </span>
                </div>

                <div>
                  <span className="block text-4xl sm:text-5xl font-space font-extrabold text-brand-orange">
                    324+
                  </span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1 block">
                    Dossiers & Agréments Traités
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo with Orange Offset Border */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full">
                {/* Decorative Orange Offset Box */}
                <div className="absolute -top-4 -right-4 w-48 h-64 border-4 border-brand-orange rounded-lg z-20 pointer-events-none hidden sm:block" />

                {/* Main Image */}
                <div className="rounded-xl overflow-hidden shadow-xl relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop"
                    alt="Notre équipe Iliko"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: BLUE CTA & 3-FEATURE BAND                          */}
      {/* ------------------------------------------------------------- */}
      <section className="relative py-20 bg-brand-navy text-white overflow-hidden">
        {/* Subtle photo background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop')`
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Top Heading & Action Button */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold leading-tight mb-6">
              Une plateforme 100% digitalisée et sécurisée pour <span className="font-extrabold text-brand-orange">formaliser votre activité en Côte d'Ivoire.</span>
            </h2>
            <Link
              to="/services"
              className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3 px-8 rounded transition-colors shadow-lg"
            >
              DÉCOUVRIR NOS OFFRES
            </Link>
          </div>

          {/* Divider Line */}
          <div className="border-t border-white/20 my-10" />

          {/* 3 Columns Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-base font-space font-bold uppercase tracking-wider text-white mb-2">
                Délais Accélérés
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Création de SARL/SAS et obtention du RCCM et DFE en un temps record grâce à nos démarches digitalisées auprès du CEPICI.
              </p>
            </div>

            <div>
              <h4 className="text-base font-space font-bold uppercase tracking-wider text-white mb-2">
                Conformité Fiscale
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Rattachement DGI, déclarations régulières, immatriculations CNPS et veille réglementaire stricte pour votre sécurité.
              </p>
            </div>

            <div>
              <h4 className="text-base font-space font-bold uppercase tracking-wider text-white mb-2">
                Conseil Juridique
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Rédaction sur-mesure de contrats commerciaux, statuts, baux professionnels et accords d'associés conformes à l'OHADA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: AREAS OF EXPERTISE                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Pôles d'
                </p>
                <h2 className="text-2xl sm:text-3xl font-space font-extrabold text-brand-navy uppercase tracking-tight">
                  EXPERTISE
                </h2>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Un ensemble complet de prestations juridiques, administratives et comptables pour sécuriser et accélérer votre croissance en Afrique de l'Ouest.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-orange transition-colors group"
              >
                <span>VOIR TOUS LES SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right 3 Service Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                    alt="Création d'Entreprise"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded mb-3">
                    JURIDIQUE
                  </span>
                  <h3 className="text-sm sm:text-base font-space font-bold uppercase tracking-tight text-brand-navy mb-2">
                    CRÉATION D'ENTREPRISE
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Constitution SARL, SAS, SA, rédaction des statuts, formalités au Guichet Unique CEPICI et publication des annonces légales.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=600&auto=format&fit=crop"
                    alt="Conformité & Rattachement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded mb-3">
                    ADMINISTRATION
                  </span>
                  <h3 className="text-sm sm:text-base font-space font-bold uppercase tracking-tight text-brand-navy mb-2">
                    RATTACHEMENT FISCAL & CNPS
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Immatriculation au centre des impôts compétent, affiliation CNPS de vos collaborateurs et conformité déclarative.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
                    alt="Agréments & Actes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded mb-3">
                    CONSEIL
                  </span>
                  <h3 className="text-sm sm:text-base font-space font-bold uppercase tracking-tight text-brand-navy mb-2">
                    AGRÉMENTS & CONTRATS
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Montage de dossiers d'agrément sectoriels (Tourisme, BTP, Santé), baux commerciaux, pactes d'actionnaires et actes certifiés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: ORANGE STATS COUNTER BAR (CIRCULAR BADGES)         */}
      {/* ------------------------------------------------------------- */}
      <section className="relative py-16 bg-brand-orange text-white overflow-hidden">
        {/* Subtle photo background with orange tint */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')`
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/80 flex items-center justify-center mb-3">
                <span className="text-2xl sm:text-3xl font-space font-extrabold text-white">15+</span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                ANNÉES D'EXPERTISE
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/80 flex items-center justify-center mb-3">
                <span className="text-2xl sm:text-3xl font-space font-extrabold text-white">25+</span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                JURISTES & CONSEILLERS
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/80 flex items-center justify-center mb-3">
                <span className="text-2xl sm:text-3xl font-space font-extrabold text-white">99%</span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                TAUX DE SUCCÈS
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/80 flex items-center justify-center mb-3">
                <span className="text-2xl sm:text-3xl font-space font-extrabold text-white">500+</span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                ENTREPRISES CLIENTES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: LOGOS & "YOU'RE IN GOOD COMPANY"                   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          {/* Brand logos row */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-lg sm:text-xl font-space font-extrabold tracking-tight text-gray-800 border-b-2 border-brand-orange pb-0.5">CEPICI</span>
            <span className="text-lg sm:text-xl font-space font-extrabold tracking-tight text-gray-800">DGI CI</span>
            <span className="text-lg sm:text-xl font-space font-extrabold tracking-tight text-gray-800">CNPS</span>
            <span className="text-lg sm:text-xl font-space font-extrabold tracking-tight text-gray-800">CCI CI</span>
            <span className="text-lg sm:text-xl font-space font-extrabold tracking-tight text-gray-800">OHADA</span>
          </div>

          {/* "You're in good company" CTA */}
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-space font-extrabold text-brand-navy">
              Vous êtes en excellente compagnie
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Rejoignez des centaines de dirigeants, fondateurs de startups et directeurs financiers qui font confiance à Iliko pour piloter leurs démarches administratives et juridiques en toute sérénité.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3 px-8 rounded transition-colors shadow-md"
              >
                DÉMARRER MON PROJET
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 9: SOCIAL SHARE BAR                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-8 bg-brand-navy-dark border-t border-b border-white/10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-gray-200">
              SUIVEZ ET PARTAGEZ NOTRE PLATEFORME <span className="font-extrabold text-brand-orange">SUR LES RÉSEAUX SOCIAUX !</span>
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 10: 4-COLUMN FOOTER & BACK TO TOP                     */}
      {/* ------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default Index;
