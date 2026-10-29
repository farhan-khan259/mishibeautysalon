import { PageHero, CTA, SectionTitle } from "@/components/ui";
import { Reviews } from "@/components/editorial";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Client Reviews",
  "A place for genuine Mishi Beauty Salon client feedback and bridal stories. Share your experience directly with the salon through WhatsApp.",
  "/reviews",
);
export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="THE WORDS THAT MATTER"
        title="Beauty is personal. So is your story."
        text="A space for real experiences, thoughtful feedback and beautiful moments shared with permission."
      />
      <section className="wrap section">
        <Reviews />
      </section>
      <section className="section soft">
        <div className="wrap">
          <SectionTitle
            eyebrow="FROM OUR BRIDES"
            title="The moments you remember"
          />
          <Reviews bridal />
        </div>
      </section>
      <section className="wrap section authentic-note">
        <h3>Shared with care.</h3>
        <p>
          Client names, photographs and feedback will only appear when genuine
          content has been supplied for publication. No ratings or review counts
          are estimated.
        </p>
      </section>
      <CTA />
    </>
  );
}
