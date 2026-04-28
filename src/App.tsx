import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Historia from "./pages/Historia.tsx";
import Gelves from "./pages/Gelves.tsx";
import Coria from "./pages/Coria.tsx";
import NotFound from "./pages/NotFound.tsx";
import SplashScreen from "./components/SplashScreen.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SplashScreen />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/gelves" element={<Gelves />} />
          <Route path="/coria" element={<Coria />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
