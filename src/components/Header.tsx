import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Shield, Phone } from "lucide-react";
import { business, getPhoneLink } from "../config/business";
import { WhatsAppButton } from "./WhatsAppButton";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Before & After", href: "/before-after" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        id="main-site-header"
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#0f1013]/95 backdrop-blur-md border-b border-stone-800/90 shadow-lg shadow-black/40 py-3"
            : "bg-[#0f1013] border-b border-stone-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Business Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
            aria-label={`${business.name} - Home`}
          >
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shadow-inner">
              <Shield className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-100 group-hover:text-amber-400 transition-colors block leading-tight">
                {business.name}
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-amber-500 block">
                Iron Works • Proddatur
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 font-semibold"
                      : "text-stone-300 hover:text-white hover:bg-stone-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3">
            {/* Phone quick call (Desktop) */}
            <a
              href={getPhoneLink()}
              aria-label={`Call ${business.phone}`}
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-amber-400 bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 px-3.5 py-2 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{business.phone}</span>
            </a>

            {/* WhatsApp CTA */}
            <WhatsAppButton
              size="sm"
              label="WhatsApp"
              className="hidden sm:inline-flex"
            />

            {/* Mobile Menu Button */}
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800 lg:hidden focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
