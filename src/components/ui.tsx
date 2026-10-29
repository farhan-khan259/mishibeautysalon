import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Flower2 } from "lucide-react";
import { faqs } from "@/data/content";
export function Button({
  children,
  href = "/booking",
  secondary = false,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
}) {
  return (
    <Link className={`button ${secondary ? "secondary" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <Flower2 className="flower-mark" size={100} />
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
export function Photo({
  src = "/images/bridal-luxe.png",
  alt = "Editorial bridal beauty inspiration",
  priority = false,
  className = "",
}: {
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, 50vw"
        priority={priority}
      />
      <span className="photo-note">Editorial inspiration · not salon work</span>
    </div>
  );
}
export function CTA() {
  return (
    <section className="cta wrap">
      <span className="eyebrow">YOUR NEXT BEAUTIFUL MOMENT</span>
      <h2>
        A little time.
        <br />
        <em>Just for you.</em>
      </h2>
      <p>Apni khubsurti ko waqt dein. Let’s find a moment that suits you.</p>
      <Button>Request an appointment</Button>
      <small>Sent through WhatsApp · Confirmed personally by the salon</small>
    </section>
  );
}
export function FAQ({ bridal = false }: { bridal?: boolean }) {
  return (
    <section className="wrap section">
      <SectionTitle
        eyebrow={bridal ? "YOUR BRIDAL QUESTIONS" : "A LITTLE CLARITY"}
        title="Before your visit"
      />
      <div className="faq">
        {faqs
          .filter((_, i) => !bridal || [0, 1, 4].includes(i))
          .map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span>+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
      </div>
    </section>
  );
}
