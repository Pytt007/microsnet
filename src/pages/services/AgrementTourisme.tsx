import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plane, Upload, ArrowLeft, CheckCircle2, Sparkles, ArrowRight, CreditCard, Building2, Compass, Hotel } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const AgrementTourisme = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const { user } = useAuth();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const services = [
    {
      id: "agrement-technique",
      icon: Hotel,
      badge: "HÔTELLERIE & RESTAURATION",
      title: "Agrément technique et professionnel – Établissements",
      description: "Obtention d'agrément officiel pour réceptifs hôteliers, résidences meublées, complexes touristiques et restaurants.",
      excerpt: "Formulaire officiel, Casier judiciaire, Plan d'affaires, Assurance RC Pro, Certificat de salubrité...",
      documents: [
        "Formulaire officiel de demande du Ministère du Tourisme",
        "Photocopie de l'agrément technique en cours (le cas échéant)",
        "Casier judiciaire et certificat de résidence du demandeur",
        "Liste du personnel avec fonctions, diplômes et nationalités",
        "Plan de situation géographique du site (quartier, rue, lot)",
        "Titre de propriété ou contrat de bail commercial enregistré",
        "Assurance Responsabilité Civile et Professionnelle (RC Pro)",
        "Attestation de cautionnement personnel et solidaire",
        "Plan d'affaires détaillé et inventaire des immobilisations",
        "Déclaration Fiscale d'Existence (DFE) et RCCM"
      ],
      additionalDocs: [
        {
          category: "Spécificités Établissements Hôteliers :",
          docs: [
            "Diplôme du Directeur (BTS Tourisme + 3 ans ou Master + 2 ans d'expérience)",
            "Certificat de salubrité (INHP) et conformité sécurité incendie (ONPC)",
            "Licence de débit de boissons pour bar/restaurant"
          ]
        }
      ],
      note: "Le dossier complet doit être fourni en 10 exemplaires reliés selon les normes ministérielles."
    },
    {
      id: "agrement-agence-voyage",
      icon: Compass,
      badge: "VOYAGES & CIRCUITS",
      title: "Agrément – Agence de voyage & Tour Opérateur",
      description: "Licence d'exploitation pour agences de billetterie, voyagistes réceptifs et organisateurs de circuits touristiques.",
      excerpt: "Agrément professionnel, Liste du personnel qualifié, Plan d'aménagement, Caution bancaire...",
      documents: [
        "Formulaire officiel de demande auprès du Guichet Unique Tourisme",
        "Copie de l'agrément professionnel délivré par le Ministère",
        "Liste certifiée sincère du personnel d'exploitation",
        "Plan d'aménagement des locaux et localisation précise",
        "Titre de propriété ou bail commercial enregistré",
        "Garantie financière / caution bancaire obligatoire",
        "Police d'assurance RC professionnelle",
        "Déclaration Fiscale d'Existence (DFE)"
      ],
      additionalDocs: [],
      note: "Dépôt et instruction auprès de la Commission Nationale des Agréments Touristiques."
    }
  ];

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Vous devez vous connecter pour initier une demande d'agrément",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Dossier d'agrément transmis",
        description: "Votre demande a été enregistrée. Notre spécialiste tourisme vous contactera sous 24h.",
      });
      setSubmitting(false);
    }, 800);
  };

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
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-brand-orange transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à tous les services
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold uppercase tracking-tight mb-6 leading-tight">
            Agréments Tourisme <br />
            <span className="text-brand-orange">& Hôtellerie en Côte d'Ivoire</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Obtenez vos licences officielles d'exploitation auprès du Ministère du Tourisme et des Loisirs pour vos hôtels, résidences et agences de voyage.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2 MAIN CARDS                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-gray-50/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((serv) => (
              <div
                key={serv.id}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <serv.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded">
                        {serv.badge}
                      </span>
                      <h3 className="text-xl font-space font-bold text-brand-navy mt-1">{serv.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {serv.description}
                  </p>

                  <div className="mb-6 pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                      Pièces clés requises :
                    </h4>
                    <p className="text-xs text-gray-500 italic leading-relaxed">
                      {serv.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setSelectedService(serv.id)}
                        className="w-full bg-brand-navy hover:bg-brand-orange text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
                      >
                        <span>Consulter les pièces & Commander</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-3xl">
                      <DialogHeader className="mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider w-fit mb-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          Agrément Ministériel
                        </div>
                        <DialogTitle className="text-2xl font-space font-extrabold text-brand-navy">
                          {selectedServiceData?.title}
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                          {selectedServiceData?.description}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid md:grid-cols-2 gap-8 mt-2">
                        {/* Documents */}
                        <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 space-y-4">
                          <h3 className="font-space font-bold text-base text-brand-navy flex items-center gap-2">
                            <Plane className="h-5 w-5 text-brand-orange" />
                            Dossier de candidature requis
                          </h3>
                          <ul className="space-y-2.5 text-xs text-gray-600">
                            {selectedServiceData?.documents.map((doc, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>

                          {selectedServiceData?.additionalDocs?.map((sec, idx) => (
                            <div key={idx} className="pt-3 border-t border-gray-200">
                              <h4 className="font-bold text-xs text-brand-navy mb-2">{sec.category}</h4>
                              <ul className="space-y-2 text-xs text-gray-600">
                                {sec.docs.map((d, dIdx) => (
                                  <li key={dIdx} className="flex items-start gap-2">
                                    <span className="text-brand-orange font-bold">•</span>
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {selectedServiceData?.note && (
                            <div className="p-3 bg-orange-50 rounded-xl text-xs text-brand-orange font-medium">
                              {selectedServiceData.note}
                            </div>
                          )}
                        </div>

                        {/* Form */}
                        <div>
                          <div className="mb-6 p-4 bg-orange-50/60 border border-orange-200/80 rounded-2xl text-xs text-orange-950">
                            <div className="flex items-center gap-2 font-bold text-brand-orange mb-1">
                              <CreditCard className="w-4 h-4" />
                              <span>Modalités d'accompagnement</span>
                            </div>
                            <p className="leading-relaxed text-gray-600">
                              • Audit initial et constitution du dossier complet en 10 exemplaires.<br />
                              • Dépôt et suivi auprès de la commission d'agrément.<br />
                              • Devis clair et sans engagement.
                            </p>
                          </div>

                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <Label className="text-xs font-semibold text-gray-700 block mb-1">
                                Nom de l'établissement / agence
                              </Label>
                              <input
                                type="text"
                                placeholder="Ex: Résidence Les Palmiers..."
                                required
                                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                              />
                            </div>

                            <div>
                              <Label className="text-xs font-semibold text-gray-700 block mb-1">
                                Type d'activité envisagée
                              </Label>
                              <input
                                type="text"
                                placeholder="Ex: Hôtel 3 étoiles, Restaurant, Agence de billetterie..."
                                required
                                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                              />
                            </div>

                            <div>
                              <Label className="text-xs font-semibold text-gray-700 block mb-1">
                                Message ou précisions (optionnel)
                              </Label>
                              <Textarea
                                placeholder="Précisez la localisation, la capacité d'accueil ou le calendrier envisagé..."
                                rows={3}
                                className="rounded-xl text-xs"
                              />
                            </div>

                            <div className="border-2 border-dashed border-gray-200 hover:border-brand-orange/50 transition-colors rounded-2xl p-6 text-center bg-gray-50/50">
                              <Upload className="h-8 w-8 text-brand-orange mx-auto mb-2" />
                              <p className="text-xs text-gray-600 mb-2">
                                <span className="text-brand-orange font-bold">*Requis</span> — Déposez vos justificatifs
                              </p>
                              <input
                                type="file"
                                multiple
                                className="hidden"
                                id="file-upload-tourisme"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                              />
                              <label htmlFor="file-upload-tourisme">
                                <span className="inline-block bg-white hover:bg-gray-100 text-brand-navy border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm">
                                  Parcourir mes fichiers
                                </span>
                              </label>
                            </div>

                            <button
                              type="submit"
                              disabled={submitting}
                              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
                            >
                              {submitting ? "Transmission en cours..." : "Transmettre ma demande"}
                            </button>
                          </form>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgrementTourisme;
