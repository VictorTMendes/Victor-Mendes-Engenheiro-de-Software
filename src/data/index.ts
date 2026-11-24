export const personal = {
  name: "Victor Mendes",
  role: "Engenheiro de Software .NET",
  tagline: "Construo APIs e interfaces que escalam",
  description:
    "Iniciei com C++ em jogos, migrei para C# na graduação e nunca mais saí do ecossistema Microsoft. Hoje sou Engenheiro de Software Pleno na Alutal e mantenho um SaaS em produção.",
  email: "victortm2508@gmail.com",
  github: "https://github.com/VictorTMendes",
  instagram: "https://instagram.com/victorteixeirz",
  linkedin: "https://www.linkedin.com/in/victor-mendes-678825292/",
  available: true,
};

export const stack = [
  {
    category: "Backend",
    items: [
      { name: "C#", icon: "csharp" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "REST APIs", icon: "api" },
      { name: "Golang", icon: "go" },
      { name: "Node.js", icon: "node" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Angular", icon: "angular" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "SQL Server", icon: "sqlserver" },
      { name: "EF Core", icon: "ef" },
      { name: "PostgreSQL", icon: "pg" },
    ],
  },
  {
    category: "IA & Ferramentas",
    items: [
      { name: "Claude Code", icon: "claude" },
      { name: "Codex", icon: "codex" },
      { name: "Orca", icon: "orca" },
      { name: "N8N", icon: "n8n" },
    ],
  },
  {
    category: "Mobile & Outros",
    items: [
      { name: "React Native", icon: "rn" },
      { name: "Android Studio", icon: "android" },
      { name: "Expo Go", icon: "expo" },
      { name: "Node.js", icon: "node" },
      { name: "RabbitMQ", icon: "rmq" },
      { name: "SAP B1", icon: "sap" },
    ],
  },
  {
    category: "DevOps & Infra",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Oracle Cloud", icon: "oracle" },
      { name: "IIS", icon: "iis" },
      { name: "Git / GitHub", icon: "git" },
    ],
  },
];

export const projects = [
  {
    id: "waybly",
    name: "Waybly",
    description:
      "SaaS de fechamento financeiro para distribuidoras de logística no iMile. Reduz um processo que levava até 3 dias — com funcionários dedicados exclusivamente a isso — para minutos, via importação de planilha com milhares de linhas.",
    tags: ["ASP.NET Core", "React", "PostgreSQL", "JWT", "Multi-tenant", "Oracle Cloud", "Docker", "Evolution API"],
    status: "production" as const,
    repo: null,
    live: "https://waybly.com.br",
    highlights: [
      "Processamento de planilhas com milhares de linhas de pedidos em segundos",
      "Fechamento financeiro completo em minutos vs. 3 dias no processo manual",
      "Arquitetura multi-tenant com isolamento por schema",
      "Autenticação e autorização com JWT + refresh tokens",
    ],
  },
  {
    id: "placeholder-1",
    name: "Em breve",
    description: "Projeto em construção.",
    tags: [],
    status: "wip" as const,
    repo: null,
    live: null,
    highlights: [],
  },
];

export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    icon: "aws",
    status: "in_progress" as const,
    credentialUrl: null,
  },
];

export const experience = [
  {
    company: "Alutal",
    role: "Desenvolvedor Fullstack Pleno",
    period: "Set 2026 — presente",
    description: [
      "Promovido a pleno após 13 meses — reconhecimento por entregas consistentes e autonomia técnica",
      "Arquitetura de microsserviços com mensageria via RabbitMQ e deploy em AWS com Docker",
      "Planejamento técnico de arquitetura de software e CI/CD",
    ],
    stack: ["ASP.NET Core", "TypeScript", "React Native", "Node.js", "SQL Server", "RabbitMQ", "AWS", "Docker", "SAP B1", "IIS"],
  },
  {
    company: "Alutal",
    role: "Programador Fullstack Junior",
    period: "Ago 2025 — Set 2026",
    description: [
      "Primeiro emprego na área, iniciado ainda durante a graduação em ADS",
      "Desenvolvimento web e mobile, implementação de features, correção de bugs e testes unitários",
      "Integração com SAP B1",
    ],
    stack: ["ASP.NET Core", "TypeScript", "React Native", "Node.js", "SQL Server", "RabbitMQ", "AWS", "Docker", "SAP B1", "IIS"],
  },
];
