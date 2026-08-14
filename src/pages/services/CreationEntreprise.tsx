import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, FileText, ArrowLeft, Upload, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useToast } from "@/hooks/use-toast";

const ServiceModal = ({ title, description, documents, type }: { title: string; description: string; documents: string[]; type: string }) => {
  const { user } = useAuth();
  const { uploadMultipleFiles, uploading } = useFileUpload();
  const { toast } = useToast();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    message: ""
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Vous devez être connecté pour initier une commande",
        variant: "destructive",
      });
      return;
    }

    if (selectedFiles.length === 0) {
      toast({
        title: "Documents requis",
        description: "Veuillez téléverser au moins un document justificatif",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      if (selectedFiles.length > 0) {
        const filePath = `${user.id}/creation-entreprise`;
        await uploadMultipleFiles(selectedFiles, "user-documents", filePath);
      }

      toast({
        title: "Demande transmise avec succès",
        description: "Votre dossier a été enregistré. Un juriste dédié prendra contact sous 24h.",
      });

      setFormData({ message: "" });
      setSelectedFiles([]);
      setOpen(false);

    } catch (error: any) {
      console.error("Error submitting order:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full bg-brand-navy hover:bg-brand-orange text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm">
          <span>Constituer mon dossier</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-3xl">
        <DialogHeader className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Création de Société
          </div>
          <DialogTitle className="text-2xl font-space font-extrabold text-brand-navy">{title}</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">{description}</DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-2">
          {/* Documents List */}
          <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
            <h3 className="font-space font-bold text-base text-brand-navy mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-brand-orange" />
              Pièces justificatives requises
            </h3>
            <ul className="space-y-3 text-xs text-gray-600">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form & Upload */}
          <div>
            <div className="mb-6 p-4 bg-orange-50/60 border border-orange-200/80 rounded-2xl text-xs text-orange-950">
              <div className="flex items-center gap-2 font-bold text-brand-orange mb-1">
                <CreditCard className="w-4 h-4" />
                <span>Modalités de paiement sécurisé</span>
              </div>
              <p className="leading-relaxed text-gray-600">
                • 50% à la validation du dossier initial.<br />
                • 50% lors de la délivrance des documents officiels (RCCM & DFE).<br />
                • Étude préalable et premier devis 100% gratuits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="message" className="text-xs font-semibold text-gray-700 block mb-1">
                  Remarques ou détails particuliers (optionnel)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ex: Capital envisagé, nombre d'associés, siège social..."
                  rows={3}
                  className="rounded-xl text-xs"
                />
              </div>

              <div className="border-2 border-dashed border-gray-200 hover:border-brand-orange/50 transition-colors rounded-2xl p-6 text-center bg-gray-50/50">
                <Upload className="h-8 w-8 text-brand-orange mx-auto mb-2" />
                <p className="text-xs text-gray-600 mb-2">
                  <span className="text-brand-orange font-bold">*Requis</span> — Déposez vos pièces d'identité et justificatifs
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  required
                />
                <label htmlFor="file-upload">
                  <span className="inline-block bg-white hover:bg-gray-100 text-brand-navy border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm">
                    Parcourir mes fichiers
                  </span>
                </label>
                {selectedFiles.length > 0 && (
                  <div className="mt-3 text-xs text-left bg-white p-3 rounded-xl border border-gray-100">
                    <p className="font-bold text-brand-navy mb-1.5">Fichiers sélectionnés ({selectedFiles.length}) :</p>
                    <ul className="space-y-1">
                      {selectedFiles.map((file, index) => (
                        <li key={index} className="text-gray-500 flex items-center justify-between text-[11px]">
                          <span className="truncate max-w-[200px]">{file.name}</span>
                          <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting || uploading}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {submitting || uploading ? "Téléversement en cours..." : "Transmettre mon dossier"}
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CreationEntreprise = () => {
  const sarlDocuments = [
    "Pièces d'identité (+ filiation), extraits d'acte de naissance des associés",
    "Statuts de société (4 exemplaires conformes OHADA)",
    "Déclaration de Souscription et de Versement (DSV)",
    "Contrat de bail commercial certifié ou titre de propriété + plan de localisation",
    "Extrait de casier judiciaire (≤ 3 mois) ou déclaration sur l'honneur",
    "Procès-verbal de nomination des dirigeants (Gérants)",
    "Procuration légalisée si mandataire"
  ];

  const sasDocuments = [
    "Pièces d'identité des dirigeants, président et actionnaires",
    "Statuts de la SAS / SA (4 exemplaires signés)",
    "Déclaration notariée de souscription et de versement du capital",
    "Contrat de bail commercial / titre de propriété + plan de localisation",
    "Casier judiciaire ou déclaration sur l'honneur des dirigeants",
    "Procès-verbal de l'Assemblée Générale constitutive",
    "Formulaire unique CEPICI personne morale"
  ];

  const siDocuments = [
    "Pièce d'identité officielle + extrait d'acte de naissance du promoteur",
    "Contrat de bail professionnel ou attestation de domiciliation",
    "Casier judiciaire récent ou déclaration sur l'honneur",
    "Certificat de résidence et livret de famille (si marié)",
    "Plan de situation géographique du lieu d'exercice",
    "Formulaire Unique CEPICI Personne Physique"
  ];

  const forfaitDocuments = [
    "Abidjan et banlieue (Guichet Unique CEPICI Plateau)",
    "Villes antennes régionales (San Pedro, Bouaké, Yamoussoukro, Korhogo)",
    "Procédures d'immatriculation express décentralisées"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop')`
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
            Création d'Entreprise <br />
            <span className="text-brand-orange">en Côte d'Ivoire</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Choisissez la forme juridique adaptée à votre modèle économique. Nous prenons en charge la rédaction de vos statuts et l'immatriculation complète au CEPICI.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4 FORMS CARDS                                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-gray-50/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* SARL */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded">
                      FORME LA PLUS COURANTE
                    </span>
                    <h3 className="text-2xl font-space font-bold text-brand-navy mt-1">SARL</h3>
                    <p className="text-xs text-gray-400 font-semibold">Société à Responsabilité Limitée</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Idéale pour les PME et projets à plusieurs associés. Capital minimum accessible et responsabilité des associés limitée au montant de leurs apports.
                </p>

                <div className="mb-6 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                    Principales pièces requises :
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Pièces d'identité et extraits de naissance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Statuts signés (4 exemplaires)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Bail commercial ou titre de propriété</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <ServiceModal
                  title="Création de SARL"
                  description="Société à Responsabilité Limitée (OHADA)"
                  documents={sarlDocuments}
                  type="sarl"
                />
              </div>
            </div>

            {/* SAS & SA */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-navy text-white px-2 py-0.5 rounded">
                      FLEXIBILITÉ & INVESTISSEMENT
                    </span>
                    <h3 className="text-2xl font-space font-bold text-brand-navy mt-1">SAS & SA</h3>
                    <p className="text-xs text-gray-400 font-semibold">Sociétés par Actions</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Structure souple plébiscitée par les startups, investisseurs et grands groupes permettant une grande liberté dans l'organisation des statuts.
                </p>

                <div className="mb-6 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                    Principales pièces requises :
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Pièces d'identité des dirigeants & actionnaires</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Statuts signés avec PV constitutif</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Déclaration de souscription notariée</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <ServiceModal
                  title="Création de SAS & SA"
                  description="Sociétés par Actions (Simplifiée & Anonyme)"
                  documents={sasDocuments}
                  type="sas"
                />
              </div>
            </div>

            {/* SI */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-brand-navy px-2 py-0.5 rounded">
                      ENTREPRENEUR INDIVIDUEL
                    </span>
                    <h3 className="text-2xl font-space font-bold text-brand-navy mt-1">Entreprise Individuelle (EI)</h3>
                    <p className="text-xs text-gray-400 font-semibold">Exercice en nom propre</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  La solution la plus rapide et économique pour lancer une activité commerciale, artisanale ou de prestation de services en nom propre.
                </p>

                <div className="mb-6 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                    Principales pièces requises :
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Pièce d'identité et extrait d'acte de naissance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Bail ou attestation d'adresse</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Casier judiciaire ou déclaration sur l'honneur</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <ServiceModal
                  title="Création d'Entreprise Individuelle"
                  description="Immatriculation en nom propre"
                  documents={siDocuments}
                  type="si"
                />
              </div>
            </div>

            {/* Forfaits Spéciaux Territoriaux */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded">
                      COUVERTURE NATIONALE
                    </span>
                    <h3 className="text-2xl font-space font-bold text-brand-navy mt-1">Forfaits Territoriaux</h3>
                    <p className="text-xs text-gray-400 font-semibold">Abidjan & Villes de l'Intérieur</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Immatriculation facilitée dans toutes les antennes régionales du CEPICI : San Pedro, Bouaké, Yamoussoukro, Korhogo et toutes les régions de Côte d'Ivoire.
                </p>

                <div className="mb-6 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                    Zones couvertes :
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Grand Abidjan (Plateau, Cocody, Yopougon, Marcory)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Antennes régionales du CEPICI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Livraison sécurisée des documents officiels</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <ServiceModal
                  title="Forfait Régional Décentralisé"
                  description="Immatriculation partout en Côte d'Ivoire"
                  documents={forfaitDocuments}
                  type="forfait"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreationEntreprise;
