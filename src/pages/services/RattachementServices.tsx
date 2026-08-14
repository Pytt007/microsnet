import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, ArrowLeft, FileText, Upload, Shield, CheckCircle2, Sparkles, ArrowRight, CreditCard } from "lucide-react";
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
        const filePath = `${user.id}/rattachement-services`;
        await uploadMultipleFiles(selectedFiles, "user-documents", filePath);
      }

      toast({
        title: "Demande transmise avec succès",
        description: "Votre dossier de rattachement a été enregistré. Notre équipe prend contact sous 24h.",
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
          <span>Démarrer le rattachement</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-3xl">
        <DialogHeader className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Conformité Administrative
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
                <span>Modalités de prise en charge</span>
              </div>
              <p className="leading-relaxed text-gray-600">
                • 50% à la constitution du dossier de rattachement.<br />
                • Solde lors de la délivrance de l'attestation de rattachement ou d'immatriculation.<br />
                • Suivi administratif rigoureux auprès des régulateurs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="message" className="text-xs font-semibold text-gray-700 block mb-1">
                  Nom de l'entreprise & Centre des impôts concerné
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ex: Société ABC SARL - Centre des impôts de Cocody..."
                  rows={3}
                  className="rounded-xl text-xs"
                />
              </div>

              <div className="border-2 border-dashed border-gray-200 hover:border-brand-orange/50 transition-colors rounded-2xl p-6 text-center bg-gray-50/50">
                <Upload className="h-8 w-8 text-brand-orange mx-auto mb-2" />
                <p className="text-xs text-gray-600 mb-2">
                  <span className="text-brand-orange font-bold">*Requis</span> — Déposez vos pièces d'immatriculation
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload-rattachement"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  required
                />
                <label htmlFor="file-upload-rattachement">
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
                {submitting || uploading ? "Téléversement en cours..." : "Transmettre ma demande"}
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const RattachementServices = () => {
  const rattachementFiscaleDocuments = [
    "Lettre de demande de rattachement fiscal signée par le représentant légal",
    "Statuts de la société certifiés conformes",
    "Copie du Registre de Commerce et du Crédit Mobilier (RCCM)",
    "Déclaration Fiscale d'Existence (DFE) si déjà obtenue",
    "Pièce d'identité du gérant (CNI ou passeport en cours de validité)",
    "Plan précis de localisation géographique du siège social",
    "Contrat de bail commercial enregistré ou titre de propriété",
    "Facture CIE / SODECI récente au nom de l'entreprise ou du gérant"
  ];

  const rattachementCnpsDocuments = [
    "Formulaire officiel de demande d'immatriculation employeur (original)",
    "Formulaire de demande d'immatriculation des salariés",
    "Déclaration Fiscale d'Existence (DFE) et RCCM (copies)",
    "État de recensement des salariés fourni par la CNPS",
    "Extraits d'acte de naissance et pièces d'identité des salariés",
    "Quittance CIE/SODECI du local d'activité",
    "Relevé d'Identité Bancaire (RIB) de l'entreprise",
    "Statuts de la société et plan de situation"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop')`
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
            Rattachement aux services <br />
            <span className="text-brand-orange">administratifs & fiscaux</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mettez votre entreprise en parfaite conformité avec la Direction Générale des Impôts (DGI) et la Caisse Nationale de Prévoyance Sociale (CNPS).
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2 SERVICES CARDS                                              */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-gray-50/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rattachement Fiscal DGI */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Building className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded">
                      DIRECTION GÉNÉRALE DES IMPÔTS
                    </span>
                    <h3 className="text-2xl font-space font-bold text-brand-navy mt-1">Rattachement Fiscal</h3>
                    <p className="text-xs text-gray-400 font-semibold">Centre des Impôts compétent (DGI)</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Formalité obligatoire après la création pour obtenir votre numéro de compte contribuable actif et accéder aux déclarations fiscales en ligne.
                </p>

                <div className="mb-6 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                    Principales pièces requises :
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Lettre de demande de rattachement signée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Statuts signés et extrait RCCM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Contrat de bail & facture CIE/SODECI</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <ServiceModal
                  title="Rattachement Fiscal (DGI)"
                  description="Immatriculation au Centre des Impôts"
                  documents={rattachementFiscaleDocuments}
                  type="rattachement-fiscale"
                />
              </div>
            </div>

            {/* Rattachement Social CNPS */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-navy text-white px-2 py-0.5 rounded">
                      SÉCURITÉ SOCIALE
                    </span>
                    <h3 className="text-2xl font-space font-bold text-brand-navy mt-1">Rattachement CNPS</h3>
                    <p className="text-xs text-gray-400 font-semibold">Caisse Nationale de Prévoyance Sociale</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Immatriculation employeur et déclaration de vos premiers collaborateurs auprès de la CNPS pour garantir leur couverture sociale et éviter tout redressement.
                </p>

                <div className="mb-6 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                    Principales pièces requises :
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Formulaire d'immatriculation employeur</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>DFE, RCCM et statuts de la société</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Liste et pièces d'identité des salariés</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <ServiceModal
                  title="Rattachement CNPS"
                  description="Immatriculation Employeur & Salariés"
                  documents={rattachementCnpsDocuments}
                  type="rattachement-cnps"
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

export default RattachementServices;
