import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { MobileContactBar } from "./components/MobileContactBar";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { OurWorkPage } from "./pages/OurWorkPage";
import { BeforeAfterPage } from "./pages/BeforeAfterPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0f1013] text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans antialiased">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/before-after" element={<BeforeAfterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />

        {/* Persistent Floating Conversion Action */}
        <FloatingWhatsAppButton />

        {/* Sticky Mobile Bottom Quick Action Bar */}
        <MobileContactBar />
      </div>
    </BrowserRouter>
  );
}
