import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Newspaper, ArrowLeft, FileText, Calendar, Globe, CheckCircle2, Sparkles, ArrowRight, Upload, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const AnnonceModal = ({ title, subtitle, docs }: { title: string; subtitle: string; docs: string[] }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Vous devez vous connecter pour déposer une annonce légale",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Annonce légale transmise",
        description: "Votre texte d'annonce a été enregistré. L'attestation de parution vous sera délivrée sous 24h.",
      });
      setSubmitting(false);
      setOpen(false);
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full bg-brand-navy hover:bg-brand-orange text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm">
          <span>Déposer cette annonce</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-8 rounded-3xl">
        <DialogHeader className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Publication Officielle
          </div>
          <DialogTitle className="text-2xl font-space font-extrabold text-brand-navy">{title}</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">{subtitle}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100">
            <h4 className="font-space font-bold text-xs text-brand-navy uppercase tracking-wider mb-2">
              Documents et éléments nécessaires :
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              {docs.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-xs font-semibold text-gray-700 block mb-1">
                Dénomination sociale de la société *
              </Label>
              <input
                type="text"
                placeholder="Ex: Société Ivoire Tech SARL..."
                required
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 block mb-1">
                Texte de l'annonce ou modifications statutaires *
              </Label>
              <Textarea
                placeholder="Indiquez le texte complet de votre avis de constitution ou les détails des résolutions de l'Assemblée Générale..."
                rows={4}
                required
                className="rounded-xl text-xs"
              />
            </div>

            <div className="border-2 border-dashed border-gray-200 hover:border-brand-orange/50 transition-colors rounded-2xl p-6 text-center bg-gray-50/50">
              <Upload className="h-7 w-7 text-brand-orange mx-auto mb-1.5" />
              <p className="text-xs text-gray-600 mb-2">
                Joindre le projet de statuts ou le Procès-Verbal d'AG (PDF)
              </p>
              <input
                type="file"
                multiple
                className="hidden"
                id="file-upload-annonce"
                accept=".pdf,.doc,.docx"
              />
              <label htmlFor="file-upload-annonce">
                <span className="inline-block bg-white hover:bg-gray-100 text-brand-navy border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm">
                  Sélectionner un fichier
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {submitting ? "Publication en cours..." : "Valider et publier mon annonce"}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AnnoncesLegales = () => {
  const announcements = [
    {
      icon: FileText,
      badge: "CONSTITUTION",
      title: "Avis de Constitution",
      subtitle: "Création de SARL, SAS, SA, SCI",
      description: "Publication obligatoire de l'avis de création pour l'obtention du RCCM et la finalisation du dossier d'immatriculation au CEPICI.",
      docs: ["Statuts signés de la société", "Identité des gérants/dirigeants", "Montant du capital et siège social"]
    },
    {
      icon: Calendar,
      badge: "MODIFICATION",
      title: "Modification Statutaire",
      subtitle: "Changement de gérant, capital, siège",
      description: "Publication légale de tout changement de statuts, transfert de siège social, augmentation de capital ou cession de parts.",
      docs: ["Procès-Verbal de l'Assemblée Générale Extraordinaire", "Nouveaux statuts mis à jour", "Extrait RCCM actuel"]
    },
    {
      icon: Globe,
      badge: "CLÔTURE",
      title: "Dissolution & Liquidation",
      subtitle: "Fermeture & cessation d'activité",
      description: "Avis de dissolution anticipée, nomination du liquidateur et clôture de liquidation dans les journaux d'annonces légales habilités.",
      docs: ["Procès-Verbal de dissolution ou de clôture", "Rapport du liquidateur", "Bilan de clôture de liquidation"]
    }
  ];

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
            backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop')`
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
            Annonces Légales <br />
            <span className="text-brand-orange">Officielles en Côte d'Ivoire</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Publication certifiée dans les journaux habilités d'annonces légales (JAL) et au Journal Officiel avec délivrance immédiate de l'attestation de parution.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3 CARDS GRID                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-gray-50/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-space font-bold text-brand-navy mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-semibold mb-4">{item.subtitle}</p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="mb-6 pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2.5">
                      Éléments requis :
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-500">
                      {item.docs.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <AnnonceModal
                    title={item.title}
                    subtitle={item.subtitle}
                    docs={item.docs}
                  />
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

export default AnnoncesLegales;
