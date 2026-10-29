import { ImageResponse } from "next/og";
export const runtime = "nodejs";
export const alt = "Mishi Beauty Salon — Look Good, Feel Good, Be You";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#f8e8ed",
          color: "#6f3448",
          border: "18px solid #c6a46a",
        }}
      >
        <span style={{ fontSize: 30, letterSpacing: 8 }}>BILITANG · KOHAT</span>
        <span style={{ fontSize: 115, marginTop: 35 }}>Mishi</span>
        <span style={{ fontSize: 38, letterSpacing: 10 }}>BEAUTY SALON</span>
        <span style={{ fontSize: 26, marginTop: 45 }}>
          Look Good · Feel Good · Be You
        </span>
      </div>
    ),
    size,
  );
}
