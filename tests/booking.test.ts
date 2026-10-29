import test from "node:test";
import assert from "node:assert/strict";
import {
  validateBooking,
  bookingMessage,
  whatsapp,
  todayPakistan,
} from "../src/lib/booking.ts";
const valid = {
  name: "Ayesha Khan",
  phone: "+92 331 1234567",
  service: "Bridal Makeup",
  date: "2026-12-01",
  time: "10:30",
  event: "Walima",
  people: "2",
};
test("valid request preserves every field and correctly encodes Unicode and special characters", () => {
  assert.deepEqual(validateBooking(valid, "2026-10-29"), {});
  const b = { ...valid, name: "Ayesha & Sana ✦" };
  const u = new URL(whatsapp(bookingMessage(b)));
  assert.equal(u.hostname, "wa.me");
  assert.equal(u.pathname, "/923310251833");
  assert.equal(u.searchParams.get("text"), bookingMessage(b));
  assert.match(bookingMessage(b), /Bridal Event Type: Walima/);
  assert.match(bookingMessage(b), /Please confirm availability/);
});
test("rejects required fields, a past date, out-of-hours time and invalid group size", () => {
  const errors = validateBooking(
    {
      ...valid,
      name: "",
      phone: "bad",
      service: "",
      date: "2026-01-01",
      time: "20:30",
      people: "0",
    },
    "2026-10-29",
  );
  assert.deepEqual(
    Object.keys(errors).sort(),
    ["name", "phone", "service", "date", "time", "people"].sort(),
  );
});
test("salon opening and closing boundaries are accepted", () => {
  for (const time of ["08:00", "20:00"])
    assert.deepEqual(validateBooking({ ...valid, time }, "2026-10-29"), {});
});
test("Pakistan day rolls over before UTC", () => {
  assert.equal(todayPakistan(new Date("2026-10-29T20:00:00Z")), "2026-10-30");
});
test("non-bridal message omits event line", () =>
  assert.doesNotMatch(
    bookingMessage({ ...valid, event: "" }),
    /Bridal Event Type/,
  ));

test("invalid calendar dates and malformed times are rejected", () => {
  assert.ok(
    validateBooking({ ...valid, date: "2026-02-31" }, "2026-01-01").date,
  );
  assert.ok(validateBooking({ ...valid, time: "08:99" }, "2026-01-01").time);
});
