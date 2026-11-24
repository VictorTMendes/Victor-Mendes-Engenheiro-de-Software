"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13,13,13,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          <span style={{ color: "var(--accent)" }}>{">"}</span>{" "}
          {personal.name.split(" ")[0].toLowerCase()}
          <span style={{ color: "var(--accent)" }}>.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          style={{ color: "var(--text-muted)" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className="h-px transition-all"
              style={{
                backgroundColor: "currentColor",
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
              }}
            />
            <span
              className="h-px transition-all"
              style={{
                backgroundColor: "currentColor",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="h-px transition-all"
              style={{
                backgroundColor: "currentColor",
                transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-sm border-b"
              style={{
                color: "var(--text-muted)",
                borderColor: "var(--border)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
