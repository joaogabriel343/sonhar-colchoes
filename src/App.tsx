import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster"; // manter o Toaster se for usá-lo
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import History from "./pages/History";
import ProductDetail from "./pages/ProductDetail";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <TooltipProvider>
      <Toaster /> {/* Se você optar por usar Toaster */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
          <Route path="/historia" element={<History />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
