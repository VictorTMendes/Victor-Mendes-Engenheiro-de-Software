"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stack } from "@/data";

const techIcons: Record<string, string> = {
  csharp: "C#",
  dotnet: ".NET",
  ef: "EF",
  api: "API",
  go: "Go",
  react: "Re",
  nextjs: "Nx",
  typescript: "TS",
  angular: "Ng",
  javascript: "JS",
  sqlserver: "SQL",
  pg: "PG",
  docker: "Dk",
  git: "Git",
  azure: "Az",
  cicd: "CI",
  rn: "RN",
  android: "AS",
  expo: "Ex",
  node: "Nd",
  rmq: "MQ",
  sap: "SAP",
  aws: "AWS",
  oracle: "OCI",
  claude: "Cl",
  codex: "Cx",
  copilot: "Co",
  orca: "Or",
  n8n: "N8",
  iis: "IIS",
};

function TechBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.15 }}
      className="flex items-center gap-3 px-4 py-3 rounded border transition-colors duration-200"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <span
        className="font-mono text-xs font-bold w-8 text-center shrink-0"
        style={{ color: "var(--accent)" }}
      >
        {techIcons[icon] ?? icon.slice(0, 2).toUpperCase()}
      </span>
      <span className="text-sm" style={{ color: "var(--text-primary)" }}>
        {name}
      </span>
    </motion.div>
  );
}

export function Stack() {
  return (
    <section
      id="stack"
      className="py-32 px-6"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="// stack" title="Tecnologias" />

        <div className="grid md:grid-cols-2 gap-12">
          {stack.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3
                className="text-xs font-mono tracking-widest uppercase mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <TechBadge key={item.name} name={item.name} icon={item.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
