"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { gallery } from "@/data/content";
export function Gallery({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const touch = useRef(0);
  const list = gallery.filter((x) => filter === "All" || x.category === filter);
  const current = selected === null ? null : list[selected];
  function move(n: number) {
    setSelected((i) => (i === null ? 0 : (i + n + list.length) % list.length));
  }
  function close() {
    setSelected(null);
    opener.current?.focus();
  }
  useEffect(() => {
    if (selected !== null) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);
  return (
    <>
      {!preview && (
        <div className="filters gallery-filters">
          {["All", ...new Set(gallery.map((x) => x.category))].map((c) => (
            <button
              key={c}
              aria-pressed={filter === c}
              onClick={() => {
                setFilter(c);
                setSelected(null);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="gallery-grid">
        {list.map((p, i) => (
          <button
            className="gallery-item"
            key={p.id}
            onClick={(e) => {
              opener.current = e.currentTarget;
              setSelected(i);
            }}
            aria-label={`Enlarge ${p.title}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width:600px) 100vw, 33vw"
            />
            <span>
              <small>{p.category} · Style inspiration</small>
              <strong>{p.title}</strong>
              <Maximize2 size={18} />
            </span>
          </button>
        ))}
      </div>
      <p className="caption">
        Visual inspiration for Mishi services. These concept photographs do not
        depict Mishi clients or completed salon work.
      </p>
      <dialog
        ref={dialog}
        className="lightbox"
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
      >
        <button
          className="icon-button lightbox-close"
          onClick={close}
          aria-label="Close image"
        >
          <X />
        </button>
        {current && (
          <div
            className="lightbox-body"
            onTouchStart={(e) => {
              touch.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - touch.current;
              if (Math.abs(delta) > 50) move(delta < 0 ? 1 : -1);
            }}
          >
            <div className="lightbox-image">
              <Image src={current.src} alt={current.alt} fill sizes="90vw" />
            </div>
            <p>{current.title} · Style inspiration</p>
            <div className="lightbox-controls">
              <button
                className="icon-button"
                onClick={() => move(-1)}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
              <span aria-live="polite">
                {selected! + 1} / {list.length}
              </span>
              <button
                className="icon-button"
                onClick={() => move(1)}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
