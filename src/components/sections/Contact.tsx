"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { personal } from "@/data";

const links = [
  {
    label: "GitHub",
    href: personal.github,
    icon: GithubIcon,
    description: "Código e repositórios",
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: LinkedinIcon,
    description: "Perfil profissional",
  },
  {
    label: "Instagram",
    href: personal.instagram,
    icon: InstagramIcon,
    description: "@victorteixeirz",
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
    description: personal.email,
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            // contato
          </span>
          <h2
            className="text-3xl font-bold mt-2 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Vamos conversar
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Estou disponível para novas oportunidades. Entre em contato por
            qualquer um dos canais abaixo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center gap-3 p-6 rounded border text-center transition-colors duration-200 group"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <link.icon
                size={20}
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              />
              <div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                </div>
                <div
                  className="text-xs mt-0.5 truncate max-w-full"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.description}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
