export type Service = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  bridal?: boolean;
};
export const services: Service[] = [
  {
    id: "facial",
    name: "Facial",
    price: 1000,
    category: "Skin Care",
    description: "A little time dedicated to your skin.",
    image: "/images/facial-care.png",
    imageAlt: "Professional facial treatment in a beauty salon",
  },
  {
    id: "bridal-facial",
    name: "Bridal Facial",
    price: 1200,
    category: "Skin Care",
    description: "Make space for your pre-event beauty ritual.",
    image: "/images/facial-care.png",
    imageAlt: "Bride-to-be receiving a professional facial treatment",
    bridal: true,
  },
  {
    id: "bleach",
    name: "Bleach",
    price: 400,
    category: "Skin Care",
    description: "Ask the salon about suitability for your skin.",
    image: "/images/facial-care.png",
    imageAlt: "Professional skin treatment applied with a facial brush",
  },
  {
    id: "skin-polish",
    name: "Skin Polish",
    price: 800,
    category: "Skin Care",
    description: "An extra touch to your beauty routine.",
    image: "/images/facial-care.png",
    imageAlt: "Relaxing professional skin polish treatment",
  },
  {
    id: "face-wax",
    name: "Face Wax",
    price: 500,
    category: "Waxing & Grooming",
    description: "A finishing touch for your face.",
    image: "/images/face-grooming.png",
    imageAlt: "Professional face and eyebrow grooming treatment",
  },
  {
    id: "plucking",
    name: "Plucking",
    price: 150,
    category: "Waxing & Grooming",
    description: "Refine the details of your look.",
    image: "/images/face-grooming.png",
    imageAlt: "Beautician carefully shaping an eyebrow with tweezers",
  },
  {
    id: "hand-wax",
    name: "Hand Wax",
    price: 300,
    category: "Waxing & Grooming",
    description: "Care for the little details.",
    image: "/images/hand-wax.png",
    imageAlt: "Professional hand and forearm waxing treatment",
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    price: 1500,
    category: "Makeup",
    description: "For celebrations and beautiful evenings.",
    image: "/images/party-glam.png",
    imageAlt: "Pakistani party makeup in warm rose-gold tones",
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    price: 5000,
    category: "Makeup",
    description: "Begin your bridal beauty conversation.",
    image: "/images/bridal-luxe.png",
    imageAlt: "Pakistani bridal makeup with gold and pearl jewellery",
    bridal: true,
  },
  {
    id: "walima-makeup",
    name: "Walima Makeup",
    price: 4000,
    category: "Makeup",
    description: "An elegant look for your Walima.",
    image: "/images/walima-ivory.png",
    imageAlt: "Ivory Pakistani Walima bridal makeup",
    bridal: true,
  },
];
export const price = (value: number) => `PKR ${value.toLocaleString("en-PK")}`;
