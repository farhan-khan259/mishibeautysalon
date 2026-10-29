import { PageHero, Photo, SectionTitle, CTA, Button } from "@/components/ui";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "About Us",
  "Meet Mishi Beauty Salon in Bilitang, Kohat. Discover our beauty philosophy and explore makeup, skin care and bridal services.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="A LITTLE ABOUT MISHI"
        title="Beauty begins with you."
        text="A personal moment. A thoughtful ritual. A look that feels like your own."
      />
      <section className="wrap section welcome">
        <Photo src="/images/walima-ivory.png" />
        <div>
          <span className="eyebrow">OUR PHILOSOPHY</span>
          <h2>
            Look good.
            <br />
            Feel good.
            <br />
            <em>Be you.</em>
          </h2>
          <p>
            Mishi Beauty Salon brings beauty services to women in Bilitang,
            Kohat. From skin care and grooming to party and bridal makeup, our
            service menu makes it easy to find your next beauty moment.
          </p>
          <p>
            We believe a beauty conversation should begin with you: the
            occasion, the mood and the look you have in mind.
          </p>
          <Button href="/services" secondary>
            Discover the beauty menu
          </Button>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <SectionTitle
            eyebrow="WHAT MATTERS TO US"
            title="Care in the conversation"
          />
          <div className="values">
            <div>
              <span className="gold-star">01</span>
              <h3>Your individuality</h3>
              <p>
                Share what you love, what you prefer and how you want to feel.
              </p>
            </div>
            <div>
              <span className="gold-star">02</span>
              <h3>A clear beginning</h3>
              <p>
                Our published rate list helps you plan. Ask directly about any
                details before your visit.
              </p>
            </div>
            <div>
              <span className="gold-star">03</span>
              <h3>A personal connection</h3>
              <p>
                Your appointment request goes directly to the salon on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap section welcome">
        <div>
          <span className="eyebrow">FOR YOUR CELEBRATIONS</span>
          <h2>
            Make room for
            <br />
            <em>a beautiful moment.</em>
          </h2>
          <p>
            Explore Party Makeup, Bridal Makeup and Walima Makeup, alongside
            skin care and grooming rituals. For your wedding, start with a
            conversation about your date and your inspiration.
          </p>
          <Button href="/bridal">Explore bridal beauty</Button>
        </div>
        <Photo />
      </section>
      <CTA />
    </>
  );
}
