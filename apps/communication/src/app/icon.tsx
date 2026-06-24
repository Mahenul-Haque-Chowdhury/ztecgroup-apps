import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06131f 0%, #12334d 100%)",
          borderRadius: 36,
          color: "#ffffff",
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: "-0.08em",
        }}
      >
        C
      </div>
    ),
    size,
  );
}