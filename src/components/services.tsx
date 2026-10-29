"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { services, price } from "@/data/services";
export function ServiceCards({ featured = false }: { featured?: boolean }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const list = featured
    ? services.filter((s) =>
        ["facial", "party-makeup", "bridal-makeup"].includes(s.id),
      )
    : services.filter(
        (s) =>
          (category === "All" || category === s.category) &&
          s.name.toLowerCase().includes(query.toLowerCase().trim()),
      );
  return (
    <>
      {!featured && (
        <div className="catalog-tools">
          <label className="search">
            <Search size={18} />
            <span className="sr-only">Search services</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find your beauty ritual…"
              type="search"
            />
          </label>
          <div className="filters" aria-label="Service categories">
            {["All", ...new Set(services.map((s) => s.category))].map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="muted" aria-live="polite">
            {list.length} services
          </p>
        </div>
      )}
      <div className="service-grid">
        {list.map((s, i) => (
          <Link
            key={s.id}
            className="service-card"
            href={`/booking?service=${s.id}`}
          >
            <span className="service-image">
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw"
              />
            </span>
            <span className="service-num">
              {String(i + 1).padStart(2, "0")} <ArrowUpRight size={20} />
            </span>
            <span className="eyebrow">{s.category}</span>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <div className="service-price">
              <strong>{price(s.price)}</strong>
              <span>Book this ritual ↗</span>
            </div>
          </Link>
        ))}
      </div>
      {!list.length && (
        <div className="empty">
          <h3>No matching rituals</h3>
          <p>Try another name or explore the full rate list.</p>
          <button
            className="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
