"use client";
import { useState, useEffect } from "react";
import { services } from "@/data/services";
import {
  Booking,
  validateBooking,
  bookingMessage,
  todayPakistan,
  whatsapp,
} from "@/lib/booking";
export function BookingForm() {
  const [b, setB] = useState<Booking>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    event: "",
    people: "1",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Booking, string>>>(
    {},
  );
  const [status, setStatus] = useState("");
  const [handoff, setHandoff] = useState("");
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(todayPakistan());
    const id = new URLSearchParams(window.location.search).get("service");
    const s = services.find((s) => s.id === id);
    if (s) setB((b) => ({ ...b, service: s.name }));
  }, []);
  const bridal = services.find((s) => s.name === b.service)?.bridal;
  function field(key: keyof Booking, value: string) {
    setB({ ...b, [key]: value, ...(key === "service" ? { event: "" } : {}) });
    setHandoff("");
    setStatus("");
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validateBooking(b);
    if (!services.some((s) => s.name === b.service))
      errors.service = "Choose a listed service.";
    setErrors(errors);
    if (Object.keys(errors).length) {
      setStatus("Please correct the highlighted fields.");
      const key = Object.keys(errors)[0];
      document.getElementById(key)?.focus();
      return;
    }
    const url = whatsapp(
      bookingMessage({ ...b, event: bridal ? b.event : "" }),
    );
    setHandoff(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus(
      "Your WhatsApp request is ready. Send it in WhatsApp, then wait for salon confirmation.",
    );
  }
  function input(key: keyof Booking, label: string, type = "text") {
    return (
      <label className="field" htmlFor={key}>
        {label}
        <input
          id={key}
          type={type}
          value={b[key]}
          onChange={(e) => field(key, e.target.value)}
          aria-invalid={!!errors[key]}
          aria-describedby={errors[key] ? `${key}-error` : undefined}
          required
          min={
            key === "date"
              ? today
              : key === "time"
                ? "08:00"
                : key === "people"
                  ? 1
                  : undefined
          }
          max={key === "time" ? "20:00" : key === "people" ? 50 : undefined}
          step={key === "time" ? 1800 : undefined}
          autoComplete={
            key === "name" ? "name" : key === "phone" ? "tel" : undefined
          }
        />
        {errors[key] && (
          <small id={`${key}-error`} className="error">
            {errors[key]}
          </small>
        )}
      </label>
    );
  }
  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      <span className="eyebrow">YOUR APPOINTMENT REQUEST</span>
      <h2>
        Let’s make time
        <br />
        <em>for you.</em>
      </h2>
      <div className="form-grid">
        {input("name", "Full name")}
        {input("phone", "Phone number", "tel")}
        <label className="field full" htmlFor="service">
          Beauty service
          <select
            id="service"
            value={b.service}
            onChange={(e) => field("service", e.target.value)}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            required
          >
            <option value="">Choose your ritual</option>
            {services.map((s) => (
              <option key={s.id}>{s.name}</option>
            ))}
          </select>
          {errors.service && (
            <small className="error" id="service-error">
              {errors.service}
            </small>
          )}
        </label>
        {input("date", "Preferred date", "date")}
        {input("time", "Preferred time", "time")}
        {bridal && (
          <label className="field" htmlFor="event">
            Bridal event type <span className="muted">(optional)</span>
            <select
              id="event"
              value={b.event}
              onChange={(e) => field("event", e.target.value)}
            >
              <option value="">Select if applicable</option>
              {[
                "Barat",
                "Walima",
                "Mehndi",
                "Nikkah",
                "Other bridal event",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        )}
        {input("people", "Number of people", "number")}
      </div>
      <p className="muted">
        Every day, 8 AM–8 PM, Pakistan time. Your preferred time is a request,
        subject to availability.
      </p>
      <button className="button" type="submit">
        Continue to WhatsApp ↗
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
      {handoff && (
        <a
          className="text-link"
          href={handoff}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open your request in WhatsApp ↗
        </a>
      )}
      <small>
        Your details stay in this form until you choose to send them through
        WhatsApp. No appointment is confirmed on this website.
      </small>
    </form>
  );
}
