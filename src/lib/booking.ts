import { business } from "../data/content.ts";
export type Booking = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  event: string;
  people: string;
};
export function todayPakistan(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
export function validateBooking(b: Booking, today = todayPakistan()) {
  const e: Partial<Record<keyof Booking, string>> = {};
  if (b.name.trim().length < 2) e.name = "Please enter your full name.";
  if (
    !/^\+?[\d\s()-]{10,20}$/.test(b.phone) ||
    b.phone.replace(/\D/g, "").length < 10
  )
    e.phone = "Please enter a valid phone number.";
  if (!b.service) e.service = "Please choose a service.";
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(b.date) ||
    Number.isNaN(Date.parse(b.date)) ||
    new Date(b.date).toISOString().slice(0, 10) !== b.date ||
    b.date < today
  )
    e.date = "Choose today or a future date.";
  if (
    !/^([01]\d|2[0-3]):[0-5]\d$/.test(b.time) ||
    b.time < "08:00" ||
    b.time > "20:00"
  )
    e.time = "Choose a time between 8:00 AM and 8:00 PM.";
  if (!/^\d+$/.test(b.people) || Number(b.people) < 1 || Number(b.people) > 50)
    e.people = "Enter between 1 and 50 people.";
  return e;
}
export function bookingMessage(b: Booking) {
  return `Hello Mishi Beauty Salon!\n\nI would like to request an appointment.\n\nName: ${b.name.trim()}\nPhone: ${b.phone.trim()}\nService: ${b.service}\nPreferred Date: ${b.date}\nPreferred Time: ${b.time}${b.event ? "\nBridal Event Type: " + b.event : ""}\nNumber of People: ${b.people}\n\nPlease confirm availability.\n\nThank you!`;
}
export function whatsapp(
  message = "Hello Mishi Beauty Salon! I would like to inquire about your services.",
) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
