import { Photo, Button, SectionTitle, FAQ, CTA } from "@/components/ui";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/editorial";
import { services, price } from "@/data/services";
import { metadata as seo } from "@/lib/seo";
import { whatsapp } from "@/lib/booking";
export const metadata = seo(
  "Bridal Studio",
  "Explore bridal makeup in Kohat at Mishi Beauty Salon. Bridal Makeup PKR 5,000, Walima Makeup PKR 4,000 and personal WhatsApp consultations.",
  "/bridal",
);
export default function Bridal() {
  return (
    <>
      <section className="wrap bridal-hero">
        <div>
          <span className="eyebrow">THE MISHI BRIDAL STUDIO</span>
          <h1>
            Your moment.
            <br />
            Your story.
            <br />
            <em>Your bridal glow.</em>
          </h1>
          <p>
            A celebration of tradition, individuality and the beautiful details
            that make your day yours.
          </p>
          <Button href="/booking?service=bridal-makeup">
            Request a bridal consultation
          </Button>
        </div>
        <Photo priority />
      </section>
      <section className="wrap section">
        <SectionTitle
          eyebrow="BEGIN WITH A CONVERSATION"
          title="A look to call your own"
          text="Bring your outfit colours, jewellery ideas and inspiration. Discuss a traditional bridal look or a softer, contemporary direction with the salon before your event."
        />
        <div className="values">
          <div>
            <h3>Traditional romance</h3>
            <p>
              Rich colours, thoughtful details and inspiration rooted in
              celebration.
            </p>
          </div>
          <div>
            <h3>Soft, modern elegance</h3>
            <p>
              A refined mood, gentle definition and a look that feels personal.
            </p>
          </div>
          <div>
            <h3>Your celebration</h3>
            <p>
              Tell us your occasion, preferred date and number of people so we
              can discuss availability.
            </p>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <SectionTitle
            eyebrow="BRIDAL BEAUTY, CLEARLY PRICED"
            title="The bridal edit"
          />
          <div className="service-grid">
            {services
              .filter((s) => s.bridal)
              .map((s) => (
                <article className="service-card" key={s.id}>
                  <span className="eyebrow">BRIDAL BEAUTY</span>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <strong>{price(s.price)}</strong>
                  <Button secondary href={`/booking?service=${s.id}`}>
                    Inquire about this service
                  </Button>
                </article>
              ))}
          </div>
          <div className="pricing-note">
            <h3>Looking for a bridal package?</h3>
            <p>
              Ask us about your preferred services and event. Package inclusions
              and pricing are confirmed directly by the salon.
            </p>
            <a
              className="text-link"
              href={whatsapp(
                "Hello Mishi Beauty Salon! I would like to discuss bridal package options and availability.",
              )}
            >
              Discuss your bridal plans ↗
            </a>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <SectionTitle
          eyebrow="THE BRIDAL MOODBOARD"
          title="Beautiful possibilities"
        />
        <Gallery />
      </section>
      <section className="wrap section">
        <div className="authentic-note">
          <span className="eyebrow">REAL TRANSFORMATIONS</span>
          <h3>Before & after, with a real story.</h3>
          <p>
            We will share authentic Mishi transformations here when photographs
            and client permission are available. For now, explore our
            inspiration gallery and discuss your own look with us.
          </p>
        </div>
        <Reviews bridal />
      </section>
      <FAQ bridal />
      <CTA />
    </>
  );
}
