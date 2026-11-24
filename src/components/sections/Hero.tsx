"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { personal } from "@/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-8">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {personal.available ? "Disponível para oportunidades" : "Ocupado no momento"}
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {personal.name.split(" ")[0]}
            <br />
            <span style={{ color: "var(--text-muted)" }}>
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <div
            className="text-xl md:text-2xl font-mono mb-8 h-8"
            style={{ color: "var(--text-muted)" }}
          >
            <TypewriterText
              texts={[
                "ASP.NET Core + React",
                "APIs RESTful",
                "SQL Server",
                "Fullstack .NET",
              ]}
            />
          </div>

          <p
            className="text-base md:text-lg max-w-xl leading-relaxed mb-12"
            style={{ color: "var(--text-muted)" }}
          >
            {personal.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded border transition-all duration-200"
              style={{
                backgroundColor: "var(--accent)",
                borderColor: "var(--accent)",
                color: "#000",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-dim)";
                e.currentTarget.style.borderColor = "var(--accent-dim)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded border transition-all duration-200"
              style={{
                backgroundColor: "transparent",
                borderColor: "var(--border-hover)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
              }}
            >
              Entrar em contato
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12">
            {[
              { href: personal.github, icon: GithubIcon, label: "GitHub" },
              { href: personal.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: personal.instagram, icon: InstagramIcon, label: "Instagram" },
              { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--text-subtle)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-subtle)")
                }
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-subtle)" }}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
