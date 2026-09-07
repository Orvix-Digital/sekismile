import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Seki Smile — Coming soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// This route is prerendered at build time, so reading the logo off disk here
// runs in Node during the build and never on the Worker at request time.
export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public", "seki-smile-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          color: "#4e1937",
          backgroundImage:
            "linear-gradient(160deg, #f09c9b 0%, #fdba90 28%, #fedaa4 54%, #e7d1ce 76%, #c1bdf7 100%)",
        }}
      >
        <img src={logoSrc} alt="Seki Smile" width={332} height={260} />
        <div
          style={{
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginTop: 44,
          }}
        >
          Coming Soon
        </div>
      </div>
    ),
    size,
  );
}
