
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page imports
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/MapPage";
import Forecast from "./pages/Forecast";
import Stories from "./pages/Stories";
import Contribute from "./pages/Contribute";
import Insights from "./pages/Insights";
import Network from "./pages/Network";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/network" element={<Network />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
