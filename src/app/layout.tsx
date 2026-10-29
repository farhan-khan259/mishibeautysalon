import type { Metadata } from "next";
import { Header, Footer, MotionPage } from "@/components/shell";
import { business } from "@/data/content";
import { siteUrl } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: siteUrl || new URL("http://localhost:3000"),
  title: {
    default: "Mishi Beauty Salon | Bilitang, Kohat",
    template: "%s | Mishi Beauty Salon",
  },
  description:
    "Beauty and bridal makeup in Bilitang, Kohat. Explore our rate list and request an appointment on WhatsApp.",
  icons: { icon: "/icon.svg" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    telephone: business.tel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bilitang, Kohat",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    openingHours: "Mo-Su 08:00-20:00",
    ...(siteUrl ? { url: siteUrl.href } : {}),
  };
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <MotionPage>{children}</MotionPage>
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c"),
          }}
        />
      </body>
    </html>
  );
}
