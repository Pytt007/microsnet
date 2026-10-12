import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Eye, EyeOff, Sparkles, CheckCircle2, Shield, Lock, ArrowRight, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const { signIn, signUp, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;
    await signIn(loginEmail, loginPassword);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !registerEmail || !phone || !registerPassword || !confirmPassword) {
      return;
    }

    if (registerPassword !== confirmPassword) {
      return;
    }

    if (!acceptTerms) {
      return;
    }

    const { error } = await signUp(registerEmail, registerPassword, {
      first_name: firstName,
      last_name: lastName,
      phone: phone
    });

    if (!error) {
      setActiveTab("login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter antialiased flex flex-col justify-between">
      <Header currentPage="auth" />

      <main className="pt-28 pb-16 flex-1 flex items-center justify-center px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
            {/* Left Brand Panel */}
            <div className="lg:col-span-5 bg-brand-navy text-white p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between hidden md:flex">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/95 to-brand-navy-dark" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-brand-orange" />
                  Espace Sécurisé Iliko
                </div>

                <h2 className="text-2xl lg:text-3xl font-space font-bold leading-tight">
                  Pilotez toutes vos démarches <br />
                  <span className="text-brand-orange">en un seul endroit</span>
                </h2>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Créez votre compte pour suivre l'avancement de vos dossiers, télécharger vos attestations officielles et échanger directement avec vos juristes dédiés.
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Suivi en temps réel de votre immatriculation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Coffre-fort numérique pour vos documents légaux</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Assistance juridique personnalisée 24/7</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-auto border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Conformité OHADA & SSL 256-bit</span>
                </div>
                <span>Abidjan, CI</span>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              {/* Tab Selector */}
              <div className="flex bg-gray-100 p-1 rounded-2xl mb-8 max-w-sm mx-auto w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-2.5 text-xs font-space font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeTab === "login"
                      ? "bg-brand-navy text-white shadow-sm"
                      : "text-gray-600 hover:text-brand-navy"
                  }`}
                >
                  Connexion
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className={`flex-1 py-2.5 text-xs font-space font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeTab === "register"
                      ? "bg-brand-navy text-white shadow-sm"
                      : "text-gray-600 hover:text-brand-navy"
                  }`}
                >
                  Inscription
                </button>
              </div>

              {/* LOGIN TAB */}
              {activeTab === "login" && (
                <div className="animate-fade-in">
                  <div className="mb-6 text-center sm:text-left">
                    <h3 className="text-2xl font-space font-extrabold text-brand-navy mb-1">
                      Ravi de vous revoir
                    </h3>
                    <p className="text-xs text-gray-500">
                      Entrez vos identifiants pour accéder à votre tableau de bord.
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        placeholder="votre.email@entreprise.ci"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-semibold text-gray-700">
                          Mot de passe
                        </label>
                        <a href="#" className="text-xs text-brand-orange hover:underline font-medium">
                          Mot de passe oublié ?
                        </a>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-navy"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                    >
                      <span>{loading ? "CONNEXION EN COURS..." : "SE CONNECTER"}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="text-center pt-4">
                      <p className="text-xs text-gray-500">
                        Vous n'avez pas encore d'espace ?{" "}
                        <button
                          type="button"
                          onClick={() => setActiveTab("register")}
                          className="text-brand-navy font-bold hover:text-brand-orange transition-colors"
                        >
                          Créer un compte
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              )}

              {/* REGISTER TAB */}
              {activeTab === "register" && (
                <div className="animate-fade-in">
                  <div className="mb-6 text-center sm:text-left">
                    <h3 className="text-2xl font-space font-extrabold text-brand-navy mb-1">
                      Créer votre compte
                    </h3>
                    <p className="text-xs text-gray-500">
                      Remplissez vos informations pour démarrer vos démarches en ligne.
                    </p>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          placeholder="Jean"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">
                          Nom *
                        </label>
                        <input
                          type="text"
                          placeholder="Kouassi"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          placeholder="j.kouassi@entreprise.ci"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">
                          Téléphone (+225) *
                        </label>
                        <input
                          type="tel"
                          placeholder="05 03 61 71 71"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">
                          Mot de passe *
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent pr-9"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-navy"
                          >
                            {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">
                          Confirmer le mot de passe *
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent pr-9"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-navy"
                          >
                            {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                          required
                          className="mt-0.5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                        />
                        <span>
                          J'accepte les conditions générales d'utilisation et la politique de confidentialité de Iliko.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-space font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                    >
                      <span>{loading ? "CRÉATION DU COMPTE..." : "FINALISER MON INSCRIPTION"}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="text-center pt-2">
                      <p className="text-xs text-gray-500">
                        Vous avez déjà un compte ?{" "}
                        <button
                          type="button"
                          onClick={() => setActiveTab("login")}
                          className="text-brand-navy font-bold hover:text-brand-orange transition-colors"
                        >
                          Se connecter
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
