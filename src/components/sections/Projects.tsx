"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock, ChevronDown, Zap } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data";

function statusLabel(status: "production" | "wip" | "open") {
  const map = {
    production: { text: "Em produção", color: "var(--accent)" },
    wip: { text: "Em desenvolvimento", color: "var(--text-muted)" },
    open: { text: "Open source", color: "#60a5fa" },
  };
  return map[status];
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const status = statusLabel(project.status as "production" | "wip" | "open");
  const isWip = project.status === "wip";

  if (isWip) {
    return (
      <div
        className="rounded border p-6 flex items-center justify-center min-h-48"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-surface)",
          borderStyle: "dashed",
        }}
      >
        <span className="text-sm font-mono" style={{ color: "var(--text-subtle)" }}>
          // em breve
        </span>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="rounded border overflow-hidden"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-surface)",
      }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: status.color }}
              />
              <span className="text-xs font-mono" style={{ color: status.color }}>
                {status.text}
              </span>
            </div>
            <h3
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <GithubIcon size={18} />
              </a>
            ) : (
              <Lock size={16} style={{ color: "var(--text-subtle)" }} />
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 rounded"
              style={{
                backgroundColor: "var(--bg-elevated)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.highlights.length > 0 && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-1 text-xs font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            <ChevronDown
              size={14}
              style={{
                transform: expanded ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
            {expanded ? "Menos detalhes" : "Ver detalhes técnicos"}
          </button>
        )}
      </div>

      <AnimatePresence>
        {expanded && project.highlights.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="pt-5 space-y-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <Zap
                      size={12}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="// projetos" title="O que construí" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
