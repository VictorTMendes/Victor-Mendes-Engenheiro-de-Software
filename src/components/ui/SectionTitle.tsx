"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
}

export function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span
        className="text-xs font-mono tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </span>
      <h2
        className="text-3xl font-bold mt-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div
        className="mt-4 h-px w-12"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </motion.div>
  );
}
