import { PageHero, CTA, FAQ } from "@/components/ui";
import { ServiceCards } from "@/components/services";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Services & Pricing",
  "Browse all 10 Mishi Beauty Salon services and exact PKR prices, including Facial, Bridal Makeup, Walima Makeup and grooming in Bilitang, Kohat.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="THE MISHI BEAUTY MENU"
        title="Find your little ritual."
        text="From everyday care to your most celebrated moments. Explore our services and choose what feels right for you."
      />
      <section className="wrap section">
        <ServiceCards />
        <div className="pricing-note">
          <strong>A clear price. A personal conversation.</strong>
          <p>
            Prices match our supplied rate list and are shown in Pakistani
            Rupees. For service details, suitability or a bridal package
            inquiry, please speak with the salon before your appointment.
          </p>
          <a
            className="text-link"
            href="/images/branding/rate-list.webp"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the original rate list ↗
          </a>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}
