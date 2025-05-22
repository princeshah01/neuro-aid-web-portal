import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TumorClassifier from "./pages/TumorClassifier";
import ChatWithPdf from "./pages/ChatWithPdf";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
import { ChatbotProvider } from "@/context/ChatbotProvider";
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChatbotProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/services/tumor-classifier"
              element={<TumorClassifier />}
            />
            <Route path="/services/chat-with-pdf" element={<ChatWithPdf />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ChatbotProvider>
  </QueryClientProvider>
);

export default App;
