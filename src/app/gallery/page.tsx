import { PageHero, CTA } from "@/components/ui";
import { Gallery } from "@/components/gallery";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Inspiration Gallery",
  "Explore editorial bridal and makeup inspiration selected for the Mishi Beauty Salon moodboard. Open photographs in our interactive gallery.",
  "/gallery",
);
export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="THE INSPIRATION EDIT"
        title="Beauty, in the details."
        text="A curated moodboard of bridal elegance and makeup artistry. Find a detail you love and bring it into the conversation."
      />
      <section className="wrap section">
        <Gallery />
        <div className="authentic-note">
          <h3>Your Mishi moments, coming with permission.</h3>
          <p>
            Our salon portfolio will grow with genuine client photographs. The
            current collection is licensed editorial inspiration, rather than a
            record of our services or premises.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
