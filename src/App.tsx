import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import CreationEntreprise from "./pages/services/CreationEntreprise";
import RattachementServices from "./pages/services/RattachementServices";
import AnnoncesLegales from "./pages/services/AnnoncesLegales";
import AgrementTourisme from "./pages/services/AgrementTourisme";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/creation-entreprise" element={<CreationEntreprise />} />
            <Route path="/services/rattachement-services" element={<RattachementServices />} />
            <Route path="/services/annonces-legales" element={<AnnoncesLegales />} />
            <Route path="/services/agrement-tourisme" element={<AgrementTourisme />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
