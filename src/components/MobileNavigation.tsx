import { Link, useLocation } from "react-router-dom";
import { X, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { business, getPhoneLink, getWhatsAppLink, getMapsLink } from "../config/business";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Before & After", href: "/before-after" },
    { name: "About", href: "/about" },
    { name: "Contact & Workshop", href: "/contact" },
  ];

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-[#121418] border-l border-stone-800 p-6 flex flex-col justify-between shadow-2xl h-full overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-800">
            <div>
              <span className="text-lg font-bold text-stone-100 tracking-tight block">
                {business.name}
              </span>
              <span className="text-xs text-amber-500 uppercase tracking-widest font-mono">
                Proddatur Iron Works
              </span>
            </div>
            <button
              id="mobile-nav-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile site navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                      : "text-stone-300 hover:bg-stone-800/60 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Workshop Details & Hours */}
          <div className="mt-8 pt-6 border-t border-stone-800/80 space-y-3.5 text-xs text-stone-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                {business.address}, {business.city}, {business.state}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{business.workingDays}</span>
            </div>
          </div>
        </div>

        {/* Quick Contact CTAs */}
        <div className="mt-8 pt-6 border-t border-stone-800 space-y-3">
          <a
            href={getWhatsAppLink(business.whatsappPrefillText)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={getPhoneLink()}
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {business.phone}</span>
          </a>

          <a
            href={getMapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-stone-400 hover:text-amber-400 underline underline-offset-4 pt-1"
          >
            Open in Google Maps / Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
