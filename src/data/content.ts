export const business = {
  name: "Mishi Beauty Salon",
  tagline: "Look Good ✦ Feel Good ✦ Be You",
  phone: "+92 331 0251833",
  tel: "+923310251833",
  whatsapp: "923310251833",
  area: "Bilitang, Kohat, Khyber Pakhtunkhwa, Pakistan",
  hours: "Monday–Sunday, 8:00 AM–8:00 PM",
  maps: "https://www.google.com/maps/search/?api=1&query=Bilitang%2C%20Kohat%2C%20Pakistan",
  socials: [] as { name: string; url: string }[],
};
export const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Bridal Studio", "/bridal"],
  ["Gallery", "/gallery"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
];
export const faqs = [
  {
    q: "How do I request an appointment?",
    a: "Choose a service, your preferred date and time, and complete the booking form. It opens WhatsApp with your request ready for you to send.",
  },
  {
    q: "Is my appointment automatically confirmed?",
    a: "No. Please send your WhatsApp request and wait for the salon to confirm availability.",
  },
  { q: "When is the salon open?", a: business.hours + "." },
  {
    q: "Where can I find you?",
    a: "We are in Bilitang, Kohat. Contact us on WhatsApp for directions to the salon entrance.",
  },
  {
    q: "How can I discuss my bridal look?",
    a: "Select Bridal Makeup or Walima Makeup on the booking page, add your event type, and send us your preferred date on WhatsApp.",
  },
  {
    q: "Where can I check prices?",
    a: "The Services & Pricing page lists all 10 services and prices from our supplied rate list. For package details, please ask us directly.",
  },
];
export type Review = {
  id: string;
  name: string;
  text: string;
  rating?: number;
  bridal?: boolean;
  image?: string;
};
export const reviews: Review[] = [];
export type Offer = {
  id: string;
  title: string;
  description: string;
  active: boolean;
  image?: string;
  startDate?: string;
  endDate?: string;
  whatsappMessage: string;
  banner?: boolean;
};
export const offers: Offer[] = [];
export const gallery = [
  {
    id: "bridal-portrait",
    src: "/images/bridal-luxe.png",
    alt: "South Asian bride wearing ornate jewellery and bridal makeup",
    category: "Bridal",
    title: "The art of the bridal moment",
  },
  {
    id: "pink-bride",
    src: "/images/walima-ivory.png",
    alt: "Bridal portrait with pink attire and traditional jewellery",
    category: "Bridal",
    title: "A softer kind of romance",
  },
  {
    id: "makeup",
    src: "/images/party-glam.png",
    alt: "Makeup application with a brush",
    category: "Makeup",
    title: "Beauty in the details",
  },
  {
    id: "facial-care",
    src: "/images/facial-care.png",
    alt: "Professional facial treatment in an elegant salon",
    category: "Skin Care",
    title: "A moment for your skin",
  },
  {
    id: "face-grooming",
    src: "/images/face-grooming.png",
    alt: "Professional eyebrow grooming treatment",
    category: "Grooming",
    title: "Precision in every detail",
  },
  {
    id: "hand-wax",
    src: "/images/hand-wax.png",
    alt: "Professional hand waxing treatment",
    category: "Grooming",
    title: "Smooth, considered care",
  },
];
