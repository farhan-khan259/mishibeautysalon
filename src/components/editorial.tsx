"use client";
import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Star, MessageCircle } from "lucide-react";
import { offers, reviews } from "@/data/content";
import { whatsapp } from "@/lib/booking";
const subscribe = (notify: () => void) => {
  const id = setInterval(notify, 60000);
  return () => clearInterval(id);
};
export function Promotions() {
  const now = useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / 60000) * 60000,
    () => 0,
  );
  const visible = offers.filter(
    (o) =>
      o.active &&
      now > 0 &&
      (!o.startDate || Date.parse(o.startDate) <= now) &&
      (!o.endDate || Date.parse(o.endDate) >= now),
  );
  if (!visible.length) return null;
  return (
    <section className="wrap section">
      <span className="eyebrow">A LITTLE SOMETHING SPECIAL</span>
      <h2>At Mishi, this season</h2>
      <div className="service-grid">
        {visible.map((o) => (
          <article className="offer" key={o.id}>
            {o.image && <Image src={o.image} width={600} height={400} alt="" />}
            {o.banner && <span className="eyebrow">SPECIAL AT MISHI</span>}
            <h3>{o.title}</h3>
            <p>{o.description}</p>
            <a className="button" href={whatsapp(o.whatsappMessage)}>
              Ask about this offer ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Reviews({
  bridal = false,
  compact = false,
}: {
  bridal?: boolean;
  compact?: boolean;
}) {
  const list = reviews.filter((r) => !bridal || r.bridal);
  const [index, setIndex] = useState(0);
  if (!list.length)
    return (
      <div className={`review-empty ${compact ? "compact" : ""}`}>
        <MessageCircle size={28} />
        <span className="eyebrow">
          {bridal ? "BRIDAL STORIES" : "YOUR WORDS, YOUR EXPERIENCE"}
        </span>
        <h3>
          {bridal
            ? "Every bride has a story."
            : "Your experience belongs here."}
        </h3>
        <p>
          {bridal
            ? "Authentic bridal stories will be shared here with permission."
            : "We look forward to sharing genuine client feedback. Visited us? Tell us about your experience on WhatsApp."}
        </p>
        <a
          className="text-link"
          href={whatsapp(
            "Hello Mishi Beauty Salon! I would like to share feedback about my visit.",
          )}
        >
          Share your experience ↗
        </a>
      </div>
    );
  const r = list[index % list.length];
  return (
    <div className="review-carousel" aria-roledescription="carousel">
      <div key={r.id} className="review-slide">
        {r.image && <Image src={r.image} alt={r.name} width={64} height={64} />}{" "}
        {r.rating && (
          <span className="stars" aria-label={`${r.rating} out of 5 stars`}>
            {Array.from({ length: Math.min(5, r.rating) }, (_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </span>
        )}
        <blockquote>“{r.text}”</blockquote>
        <p>{r.name}</p>
      </div>
      <div className="filters">
        <button
          onClick={() => setIndex((index - 1 + list.length) % list.length)}
          aria-label="Previous review"
        >
          ←
        </button>
        <span aria-live="polite">
          {(index % list.length) + 1} / {list.length}
        </span>
        <button
          onClick={() => setIndex((index + 1) % list.length)}
          aria-label="Next review"
        >
          →
        </button>
      </div>
    </div>
  );
}
