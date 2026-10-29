"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUp, MessageCircle, Share2 } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { business, navigation } from "@/data/content";
import { whatsapp } from "@/lib/booking";
export function Logo() {
  return (
    <span className="logo-mark">
      <Image
        src="/images/branding/logo-transparent.png"
        width={2048}
        height={768}
        sizes="(max-width: 600px) 174px, (max-width: 1100px) 190px, 220px"
        alt="Mishi Beauty Salon"
        priority
      />
    </span>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <>
      <div className="topbar">
        BILITANG, KOHAT <span>✦</span> EVERY DAY, 8 AM – 8 PM
      </div>
      <header className={scrolled ? "header solid" : "header"}>
        <nav className="nav wrap" aria-label="Main navigation">
          <div className="nav-left">
            {navigation.slice(0, 3).map(([n, h]) => (
              <Link
                aria-current={path === h ? "page" : undefined}
                key={h}
                href={h}
              >
                {n}
              </Link>
            ))}
          </div>
          <Link href="/" className="brand" aria-label="Mishi Beauty Salon home">
            <Logo />
          </Link>
          <div className="nav-right">
            <Link
              aria-current={path === "/bridal" ? "page" : undefined}
              href="/bridal"
            >
              Bridal Studio
            </Link>
            <Link
              href="/gallery"
              aria-current={path === "/gallery" ? "page" : undefined}
            >
              Gallery
            </Link>
            <Link href="/booking" className="nav-book">
              Book a visit ↗
            </Link>
          </div>
          <button
            className="menu-toggle icon-button"
            ref={trigger}
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </nav>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
        >
          <button
            className="icon-button menu-close"
            aria-label="Close navigation"
            onClick={close}
          >
            <X />
          </button>
          <div className="mobile-logo">
            <Logo />
          </div>
          <p className="eyebrow">LOOK GOOD · FEEL GOOD · BE YOU</p>
          {[...navigation, ["Book Appointment", "/booking"]].map(([n, h]) => (
            <Link
              key={h}
              href={h}
              onClick={close}
              aria-current={path === h ? "page" : undefined}
            >
              {n}
            </Link>
          ))}
        </motion.div>
      </dialog>
    </>
  );
}
export function Footer() {
  const [shared, setShared] = useState("");
  async function share() {
    try {
      if (navigator.share)
        await navigator.share({
          title: business.name,
          url: window.location.origin,
        });
      else {
        await navigator.clipboard.writeText(window.location.origin);
        setShared("Link copied.");
      }
    } catch {
      setShared("Share cancelled or unavailable.");
    }
  }
  return (
    <>
      <footer>
        <div className="wrap footer-grid">
          <div>
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <p>{business.tagline}</p>
            <p>
              Beauty, with a personal touch.
              <br />
              Bilitang, Kohat.
            </p>
          </div>
          <div>
            <span className="eyebrow">EXPLORE</span>
            {navigation.slice(1).map(([n, h]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </div>
          <div>
            <span className="eyebrow">LET’S CONNECT</span>
            <a href={whatsapp()}>WhatsApp us ↗</a>
            <a href={`tel:${business.tel}`}>{business.phone}</a>
            <p>{business.hours}</p>
            {business.socials.map((s) => (
              <a
                href={s.url}
                key={s.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                {s.name}
              </a>
            ))}
            <button className="text-button" onClick={share}>
              <Share2 size={14} /> Share Mishi
            </button>
            <span role="status">{shared}</span>
          </div>
        </div>
        <div className="wrap footer-bottom">
          © {new Date().getFullYear()} Mishi Beauty Salon{" "}
          <span>Made for your beautiful moments.</span>
        </div>
      </footer>
      <a
        className="floating-wa"
        href={whatsapp()}
        aria-label="Chat with Mishi Beauty Salon on WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
      <button
        className="back-top icon-button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          })
        }
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
export function MotionPage({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
