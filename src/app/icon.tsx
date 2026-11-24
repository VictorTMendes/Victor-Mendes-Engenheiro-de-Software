import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#22c55e",
            fontSize: "13px",
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: "-1px",
          }}
        >
          {"</>"}
        </span>
      </div>
    ),
    { ...size }
  );
}
