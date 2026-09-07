import { ImageResponse } from "next/og";

export const alt = "Seki — Coming soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#8f8f8f",
          }}
        >
          Coming soon
        </div>
        <div style={{ fontSize: 168, letterSpacing: -6, marginTop: 24 }}>
          Seki
        </div>
        <div
          style={{
            width: 180,
            height: 2,
            background: "#ededed",
            opacity: 0.7,
            marginTop: 40,
          }}
        />
      </div>
    ),
    size,
  );
}
