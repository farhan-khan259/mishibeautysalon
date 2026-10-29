import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageHero, Button, CTA } from "@/components/ui";
import { business } from "@/data/content";
import { whatsapp } from "@/lib/booking";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Contact & Location",
  "Contact Mishi Beauty Salon in Bilitang, Kohat. Call or WhatsApp +92 331 0251833. Open daily 8 AM to 8 PM. Find area directions and plan your visit.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="COME SAY HELLO"
        title="Beautifully close to home."
        text="Find us in Bilitang, Kohat. A little care, a little conversation, a moment for you."
      />
      <section className="wrap section">
        <div className="contact-grid">
          <a href={whatsapp()} className="contact-card">
            <MessageCircle />
            <span className="eyebrow">WHATSAPP FIRST</span>
            <h3>Let’s talk beauty.</h3>
            <p>Ask about services, bridal plans or a preferred appointment.</p>
            <span className="text-link">Message the salon ↗</span>
          </a>
          <a href={`tel:${business.tel}`} className="contact-card">
            <Phone />
            <span className="eyebrow">GIVE US A CALL</span>
            <h3>{business.phone}</h3>
            <p>A direct line to discuss your visit.</p>
            <span className="text-link">Call Mishi ↗</span>
          </a>
          <div className="contact-card">
            <Clock />
            <span className="eyebrow">OUR OPENING HOURS</span>
            <h3>Every day</h3>
            <p>
              Monday to Sunday
              <br />
              8:00 AM–8:00 PM · Pakistan time
            </p>
            <span className="muted">Appointments subject to confirmation</span>
          </div>
        </div>
      </section>
      <section className="wrap section location">
        <div className="area-art">
          <MapPin size={50} />
          <span>BILITANG</span>
          <small>KOHAT · KHYBER PAKHTUNKHWA</small>
          <div className="area-ring" />
        </div>
        <div>
          <span className="eyebrow">YOUR LOCAL BEAUTY MOMENT</span>
          <h2>
            We’re in
            <br />
            <em>Bilitang, Kohat.</em>
          </h2>
          <p>{business.area}</p>
          <p>
            The directions link shows the general Bilitang area. Message us for
            the salon’s exact entrance and local directions before your visit.
          </p>
          <Button href={business.maps} secondary>
            Explore the area on Maps
          </Button>
        </div>
      </section>
      <CTA />
    </>
  );
}
