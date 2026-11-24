"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personal } from "@/data";

const stats = [
  { value: "1+", label: "ano de experiência profissional" },
  { value: "1", label: "SaaS em produção" },
  { value: "13mo", label: "junior → pleno" },
];

export function About() {
  return (
    <section id="sobre" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="// sobre" title="Quem sou" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Comecei programando em{" "}
              <span style={{ color: "var(--text-primary)" }}>C++ para jogos</span>{" "}
              — foi o que me fisgou na área. Durante a graduação em ADS migrei para{" "}
              <span style={{ color: "var(--text-primary)" }}>.NET e C#</span> e
              não saí mais. Entrei no mercado ainda na faculdade, como junior na
              Alutal, e fui promovido a pleno em 13 meses.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Sou curioso por natureza — acompanho de perto lançamentos de
              ferramentas, IAs e mudanças no ecossistema .NET. Não por obrigação,
              mas porque genuinamente quero entender se algo pode melhorar a forma
              como trabalho.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Também sou fundador do{" "}
              <a
                href="https://waybly.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-primary)", textDecoration: "underline", textDecorationColor: "var(--accent)", textUnderlineOffset: "3px" }}
              >
                Waybly
              </a>{" "}
              — um
              SaaS que resolve o fechamento financeiro de distribuidoras de
              logística no iMile. Um processo que levava{" "}
              <span style={{ color: "var(--text-primary)" }}>até 3 dias</span>{" "}
              agora é feito em minutos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded border"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="text-3xl font-bold font-mono mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
