"use client";

import { personal } from "@/data";

export function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono"
        style={{ color: "var(--text-subtle)" }}
      >
        <span>
          <span style={{ color: "var(--accent)" }}>{">"}</span>{" "}
          {personal.name.split(" ")[0].toLowerCase()}.dev
        </span>
        <span>
          Construído com Next.js — {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
