import { Link } from "react-router-dom";
import { Shield, Phone, MessageCircle, MapPin, Clock, ExternalLink } from "lucide-react";
import { business, getPhoneLink, getWhatsAppLink, getMapsLink } from "../config/business";
import { services } from "../data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-site-footer"
      className="bg-[#0b0c0e] border-t border-stone-800 text-stone-300 pt-16 pb-28 sm:pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Craftsmanship */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-stone-900 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Shield className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-lg font-bold text-stone-100 tracking-tight block">
                  {business.name}
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-amber-500">
                  Custom Iron Work & Welding
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed">
              Professional iron fabrication and arc welding services in Proddatur.
              Specializing in custom compound gates, iron doors, railings, safety grills,
              and on-site welding repairs with durable, high-strength workmanship.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppLink(business.whatsappPrefillText)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-md bg-emerald-950/60 border border-emerald-600/40 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getPhoneLink()}
                aria-label={`Call ${business.phone}`}
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-md bg-stone-900 border border-amber-500/40 text-amber-400 hover:bg-stone-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Column 2: Fabrication Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-100 mb-4 font-mono">
              Fabrication Services
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              {services.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services#${srv.id}`}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-amber-500 hover:text-amber-400 font-medium inline-flex items-center gap-1 text-xs pt-1"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Work */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-100 mb-4 font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors block py-0.5">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-amber-400 transition-colors block py-0.5">
                  Our Work Gallery
                </Link>
              </li>
              <li>
                <Link to="/before-after" className="hover:text-amber-400 transition-colors block py-0.5">
                  Before & After Transformations
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors block py-0.5">
                  About Our Fabrication Standards
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors block py-0.5">
                  Visit Workshop & Directions
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-800/80">
              <h4 className="text-xs uppercase font-mono text-stone-400 mb-2">
                Service Radius
              </h4>
              <p className="text-xs text-stone-400 leading-normal">
                Serving Proddatur, Yerraguntla, Jammalamadugu, Mydukur, and neighboring YSR Kadapa localities.
              </p>
            </div>
          </div>

          {/* Column 4: Workshop Location & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-100 mb-4 font-mono">
              Workshop & Timings
            </h3>

            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <div>
                  <p className="text-stone-200 font-medium">Workshop Address:</p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    {business.address}, {business.city}, {business.state} - {business.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <div>
                  <p className="text-stone-200 font-medium">Business Hours:</p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    {business.hours}
                  </p>
                  <p className="text-stone-500 text-[11px]">
                    {business.workingDays}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getMapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  <span>Open in Google Maps / Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {business.name}. All rights reserved. Custom iron fabrication in Proddatur, Andhra Pradesh.
          </p>
          <p className="text-stone-500 flex items-center gap-2">
            <span>Primary Local Iron Work & Arc Welding Service</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-stone-300 underline">
              Direct Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
