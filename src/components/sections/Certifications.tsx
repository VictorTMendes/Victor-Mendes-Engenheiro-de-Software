"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certifications } from "@/data";

const statusLabel: Record<string, string> = {
  in_progress: "Em progresso",
  completed: "Concluído",
};

const statusColor: Record<string, string> = {
  in_progress: "#f59e0b",
  completed: "#00ff9d",
};

const awsLogo = (
  <svg viewBox="0 0 60 36" width="40" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8 12.6c0 .7.1 1.3.2 1.7.2.4.4.9.7 1.4.1.2.2.4.2.5 0 .2-.1.4-.4.6l-1.3.9c-.2.1-.4.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.7-.7-1-.2-.4-.4-.8-.6-1.3-1.5 1.8-3.4 2.7-5.6 2.7-1.6 0-2.9-.5-3.8-1.4-.9-.9-1.4-2.1-1.4-3.6 0-1.6.6-2.9 1.7-3.9 1.1-1 2.6-1.5 4.5-1.5.6 0 1.3.1 2 .2.7.1 1.4.3 2.2.5V8c0-1.4-.3-2.4-.9-3-.6-.6-1.6-.9-3-.9-.6 0-1.3.1-2 .3-.7.2-1.3.4-1.9.7-.3.1-.5.2-.6.2-.2.1-.3.1-.4.1-.3 0-.5-.2-.5-.7V3.9c0-.4.1-.6.2-.8.1-.2.4-.3.8-.5.6-.3 1.4-.6 2.3-.8.9-.2 1.9-.3 2.9-.3 2.2 0 3.8.5 4.9 1.5 1.1 1 1.6 2.5 1.6 4.5v5.9l-.1.2zM9.6 15.8c.6 0 1.3-.1 2-.4.7-.3 1.3-.7 1.8-1.4.3-.4.5-.8.6-1.3.1-.5.2-1.1.2-1.8v-.9c-.5-.1-1.1-.2-1.7-.3-.6-.1-1.1-.1-1.7-.1-1.2 0-2.1.2-2.7.7-.6.5-.9 1.1-.9 2 0 .8.2 1.4.6 1.9.5.4 1.1.6 1.8.6zm14.6 2c-.4 0-.6-.1-.8-.2-.2-.1-.3-.5-.5-1l-5-16.5c-.1-.5-.2-.8-.2-1 0-.4.2-.6.6-.6h2.3c.4 0 .7.1.8.2.2.1.3.5.5 1l3.6 14.1 3.3-14.1c.1-.5.3-.8.5-1 .2-.1.5-.2.9-.2h1.9c.4 0 .7.1.9.2.2.1.4.5.5 1l3.4 14.3 3.7-14.3c.1-.5.3-.8.5-1 .2-.1.5-.2.8-.2h2.2c.4 0 .6.2.6.6 0 .1 0 .3-.1.5l-.1.5-5.2 16.5c-.1.5-.3.8-.5 1-.2.1-.5.2-.8.2h-2c-.4 0-.7-.1-.9-.2-.2-.1-.4-.5-.5-1L28 4.4 24.8 17.6c-.1.5-.3.8-.5 1-.2.1-.5.2-.9.2h-2.2l1 .2zm27.7.4c-1.2 0-2.5-.1-3.7-.4-1.2-.3-2.1-.6-2.8-.9-.4-.2-.6-.4-.7-.6-.1-.2-.1-.4-.1-.6v-.8c0-.5.2-.7.5-.7.1 0 .3 0 .5.1.2.1.4.2.6.3.8.4 1.7.7 2.6.9.9.2 1.9.3 2.8.3 1.5 0 2.6-.3 3.4-.8.8-.5 1.2-1.3 1.2-2.2 0-.6-.2-1.2-.6-1.6-.4-.4-1.2-.8-2.3-1.2l-3.4-1.1c-1.7-.5-2.9-1.3-3.7-2.3-.8-1-1.2-2.1-1.2-3.3 0-.9.2-1.8.6-2.5.4-.7 1-1.3 1.7-1.8.7-.5 1.5-.9 2.4-1.1.9-.3 1.9-.4 2.9-.4.5 0 1.1.1 1.6.1.5.1 1 .2 1.5.3.5.1.9.2 1.3.4.4.1.7.3.9.4.3.2.5.4.6.5.1.2.1.4.1.7v.8c0 .5-.2.8-.5.8-.2 0-.5-.1-.9-.3-1.2-.5-2.6-.8-4.1-.8-1.3 0-2.4.2-3.1.7-.7.5-1.1 1.1-1.1 2.1 0 .6.2 1.2.7 1.6.5.4 1.3.9 2.6 1.3l3.3 1c1.7.5 2.9 1.2 3.6 2.2.7.9 1.1 2 1.1 3.2 0 1-.2 1.9-.6 2.6-.4.7-1 1.4-1.7 1.9-.7.5-1.6.9-2.6 1.1-.9.3-2 .4-3.2.4z" fill="#FF9900"/>
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  aws: awsLogo,
};

export function Certifications() {
  return (
    <section
      id="certificacoes"
      className="py-32 px-6"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="// certificações" title="Certificações" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg p-6 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className="p-2 rounded"
                  style={{ backgroundColor: "var(--bg-elevated)" }}
                >
                  {iconMap[cert.icon] ?? (
                    <div
                      className="w-10 h-6 rounded"
                      style={{ backgroundColor: "var(--border)" }}
                    />
                  )}
                </div>

                <span
                  className="text-xs font-mono px-2 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: `${statusColor[cert.status]}18`,
                    color: statusColor[cert.status],
                    border: `1px solid ${statusColor[cert.status]}44`,
                  }}
                >
                  {statusLabel[cert.status]}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3
                  className="text-base font-semibold leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </h3>
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cert.issuer}
                </span>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono mt-auto"
                  style={{ color: "var(--accent)" }}
                >
                  Ver credencial →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
