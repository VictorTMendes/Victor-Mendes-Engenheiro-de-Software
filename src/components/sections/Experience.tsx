"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experience } from "@/data";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="py-32 px-6"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="// experiência" title="Trajetória" />

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-10 relative"
              >
                <div
                  className="absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-0.5 hidden md:block"
                  style={{
                    backgroundColor: "var(--bg-base)",
                    border: "2px solid var(--accent)",
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.role}
                    </h3>
                    <span
                      className="text-sm"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.company}
                    </span>
                  </div>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {item.description.map((line, j) => (
                    <li
                      key={j}
                      className="text-sm flex items-start gap-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--border-hover)" }}>—</span>
                      {line}
                    </li>
                  ))}
                </ul>

                {"stack" in item && Array.isArray(item.stack) && (
                  <div className="flex flex-wrap gap-2">
                    {(item.stack as string[]).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{
                          backgroundColor: "var(--bg-elevated)",
                          color: "var(--text-muted)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
