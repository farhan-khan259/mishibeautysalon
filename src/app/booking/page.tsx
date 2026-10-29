import { BookingForm } from "@/components/booking-form";
import { PageHero, FAQ } from "@/components/ui";
import { business } from "@/data/content";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Book Appointment",
  "Request a Mishi Beauty Salon appointment on WhatsApp. Choose your service and preferred date and time. The salon confirms availability personally.",
  "/booking",
);
export default function Booking() {
  return (
    <>
      <PageHero
        eyebrow="A MOMENT FOR YOURSELF"
        title="Your next glow starts here."
        text="Choose your beauty ritual and a preferred time. We’ll take the conversation to WhatsApp."
      />
      <section className="wrap section booking-layout">
        <aside>
          <span className="eyebrow">SIMPLE. PERSONAL. DIRECT.</span>
          <h2>
            Three steps to
            <br />
            <em>your next visit.</em>
          </h2>
          <ol className="booking-steps">
            <li>
              <strong>Make it yours</strong>
              <p>Choose your service, date and preferred time.</p>
            </li>
            <li>
              <strong>Send your request</strong>
              <p>Your details open in WhatsApp. Review and send the message.</p>
            </li>
            <li>
              <strong>Wait for confirmation</strong>
              <p>
                The salon will reply to confirm availability and any details.
              </p>
            </li>
          </ol>
          <div className="aside-note">
            <p>{business.hours}</p>
            <a className="text-link" href={`tel:${business.tel}`}>
              Prefer to call? {business.phone}
            </a>
          </div>
        </aside>
        <BookingForm />
      </section>
      <FAQ />
    </>
  );
}
