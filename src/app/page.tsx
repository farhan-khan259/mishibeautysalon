import Link from "next/link";
import { ArrowDown, Flower2, Sparkles, Heart, MapPin } from "lucide-react";
import { Button, SectionTitle, Photo, FAQ, CTA } from "@/components/ui";
import { ServiceCards } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Promotions, Reviews } from "@/components/editorial";
import { business } from "@/data/content";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Beauty & Bridal Makeup in Kohat",
  "Discover Mishi Beauty Salon in Bilitang, Kohat. Browse beauty services, bridal makeup and accurate prices, then request a visit through WhatsApp.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="tiny-line" /> YOUR BEAUTY, BEAUTIFULLY CELEBRATED
          </span>
          <h1>
            A little glow.
            <br />A little grace.
            <br />
            <em>Completely you.</em>
          </h1>
          <p>
            Beautiful moments begin with a little care. Discover makeup, bridal
            beauty and personal rituals at Mishi Beauty Salon, Bilitang.
          </p>
          <div className="hero-buttons">
            <Button>Book Appointment</Button>
            <Button href="/services" secondary>
              Explore Services
            </Button>
          </div>
          <div className="hero-signoff">
            <span className="gold-star">✦</span>
            <span>
              Look Good · Feel Good · Be You
              <small>BEAUTY WITH A PERSONAL TOUCH</small>
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-arch">
            <Photo priority />
          </div>
          <span className="hero-seal">
            MISHI
            <br />
            <Flower2 size={25} />
            <small>BEAUTY IN EVERY DETAIL</small>
          </span>
          <span className="vertical-note">
            BRIDAL BEAUTY · EVERYDAY ELEGANCE
          </span>
        </div>
      </section>
      <div className="ribbon">
        <span>BRIDAL BEAUTY</span>✦<span>MAKEUP MOMENTS</span>✦
        <span>SKIN RITUALS</span>✦<span>YOUR KIND OF BEAUTIFUL</span>
      </div>
      <section className="wrap section welcome">
        <div className="welcome-art">
          <Photo
            src="/images/walima-ivory.png"
            alt="Editorial South Asian bridal portrait in pink"
          />
          <div className="small-brand">
            A moment of care.
            <br />
            <em>A feeling of Mishi.</em>
          </div>
        </div>
        <div>
          <span className="eyebrow">WELCOME TO MISHI</span>
          <h2>
            Beauty that feels
            <br />
            <em>like you.</em>
          </h2>
          <p>
            A soft glow for an everyday moment. A considered look for a
            celebration. Your beauty story is personal, and there is space for
            it here.
          </p>
          <p>
            Visit us in Bilitang, Kohat, and let’s talk about the look you have
            in mind. Khud ke liye, kuch khaas.
          </p>
          <Button href="/about" secondary>
            Our beauty philosophy
          </Button>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="THE BEAUTY MENU"
              title="Your next little ritual"
              text="Thoughtful moments of beauty, with a clear and simple rate list."
            />
            <Link className="text-link" href="/services">
              View all 10 services ↗
            </Link>
          </div>
          <ServiceCards featured />
        </div>
      </section>
      <section className="bridal-feature">
        <Photo
          src="/images/party-glam.png"
          alt="Editorial bridal makeup application"
        />
        <div className="bridal-copy">
          <span className="eyebrow">THE MISHI BRIDAL STUDIO</span>
          <h2>
            A day to remember.
            <br />
            <em>A look to cherish.</em>
          </h2>
          <p>
            From the first conversation to your celebration, start with the
            bridal look that feels right for you.
          </p>
          <Button href="/bridal">Enter the Bridal Studio</Button>
          <span className="fine-print">
            Bridal Makeup · Walima Makeup · Bridal Facial
          </span>
        </div>
      </section>
      <section className="wrap section">
        <SectionTitle
          eyebrow="THE MISHI EXPERIENCE"
          title="It’s in the little things"
        />
        <div className="values">
          {[
            [
              Heart,
              "Beauty, your way",
              "Bring your ideas. Let’s discuss a look that feels like you.",
            ],
            [
              Sparkles,
              "Clear prices",
              "Explore every listed service before requesting your visit.",
            ],
            [
              MapPin,
              "Close to home",
              "Find us in Bilitang, Kohat, with appointments requested directly on WhatsApp.",
            ],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Heart;
            return (
              <div key={String(title)}>
                <I size={28} />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="wrap section gallery-preview">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="THE INSPIRATION EDIT"
            title="A world of beautiful details"
          />
          <Link className="text-link" href="/gallery">
            Explore the gallery ↗
          </Link>
        </div>
        <Gallery preview />
      </section>
      <Promotions />
      <section className="section soft">
        <div className="wrap">
          <Reviews compact />
        </div>
      </section>
      <FAQ />
      <section className="visit-strip wrap">
        <MapPin size={30} />
        <div>
          <span className="eyebrow">WE’D LOVE TO SEE YOU</span>
          <h3>Bilitang, Kohat</h3>
          <p>{business.hours}</p>
        </div>
        <Button href="/contact" secondary>
          Plan your visit
        </Button>
        <ArrowDown className="visit-arrow" size={30} />
      </section>
      <CTA />
    </>
  );
}
