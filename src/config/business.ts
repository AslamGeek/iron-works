export interface BusinessConfig {
  name: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  address: string;
  landmark: string;
  mapsUrl: string;
  hours: string;
  workingDays: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
  whatsappPrefillText: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  serviceAreas: string[];
}

export const business: BusinessConfig = {
  name: "[BUSINESS_NAME]",
  phone: "[PHONE_NUMBER]",
  phoneFormatted: "[PHONE_NUMBER]",
  whatsapp: "[WHATSAPP_NUMBER]",
  whatsappFormatted: "[WHATSAPP_NUMBER]",
  email: "[BUSINESS_EMAIL]",
  address: "[WORKSHOP_ADDRESS]",
  landmark: "Near Main Market / Industrial Road, Proddatur",
  mapsUrl: "[GOOGLE_MAPS_URL]",
  hours: "[BUSINESS_HOURS]",
  workingDays: "Monday – Saturday: 8:30 AM – 8:00 PM (Sunday by appointment)",
  city: "Proddatur",
  district: "YSR Kadapa District",
  state: "Andhra Pradesh",
  country: "India",
  pincode: "516360",
  whatsappPrefillText: "Hi, I found your website and would like to enquire about iron work in Proddatur.",
  coordinates: {
    lat: 14.7504,
    lng: 78.5522,
  },
  serviceAreas: [
    "Proddatur Town",
    "Yerraguntla",
    "Jammalamadugu",
    "Mydukur",
    "Chapad",
    "Rajampet Road",
    "Kadapa Rural",
    "Nearby towns & villages within 35 km"
  ],
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const message = encodeURIComponent(customMessage || business.whatsappPrefillText);
  // Remove non-numeric characters for the wa.me link
  const cleanNumber = business.whatsapp.replace(/[^0-9+]/g, "");
  // Fallback to standard wa.me format
  const targetNumber = cleanNumber.startsWith("+") ? cleanNumber.slice(1) : cleanNumber;
  return `https://wa.me/${targetNumber || "910000000000"}?text=${message}`;
};

export const getPhoneLink = (): string => {
  return `tel:${business.phone}`;
};

export const getMapsLink = (): string => {
  return business.mapsUrl.startsWith("http")
    ? business.mapsUrl
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${business.name} ${business.address} ${business.city} ${business.state}`
      )}`;
};
