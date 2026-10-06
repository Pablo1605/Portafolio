export type CaseDetailBlock = {
  heading: string;
  text: string;
  aside: string;
};

export type CaseDetailMeta = {
  label: string;
  value: string;
};

export type CaseDetail = {
  summary: string;
  meta: CaseDetailMeta[];
  blocks: CaseDetailBlock[];
  features: string;
};

export type PortfolioCase = {
  slug: string;
  year: string;
  title: string;
  description: string;
  category: string;
  detail: CaseDetail;
};

const defaultDetail = (label: string): CaseDetail => ({
  summary: `Escribe aquí un resumen del ${label}. Explica el contexto, el desafío y el impacto final.`,
  meta: [
    { label: "Rol", value: "Tu rol en el proyecto" },
    { label: "Tecnologías", value: "Herramientas y tecnologías utilizadas" },
  ],
  blocks: [
    {
      heading: "Contexto",
      text: "Describe la situación, el cliente y el problema que había que resolver.",
      aside: "Nota sobre el contexto, las restricciones o el objetivo principal del caso.",
    },
    {
      heading: "Proceso",
      text: "Explica tu enfoque, las decisiones importantes y cómo se llevó a cabo el trabajo.",
      aside: "Detalla una decisión, un método o un aprendizaje relevante del proceso.",
    },
    {
      heading: "Resultado",
      text: "Comparte los resultados, aprendizajes y lo que este caso representa en tu portafolio.",
      aside: "Métrica, comentario o impacto final que quieras destacar.",
    },
  ],
  features: "Añade aquí las funcionalidades, una por línea.",
});

export const projectItems: PortfolioCase[] = [
  {
    slug: "projeto-1",
    year: "Año",
    title: "Nombre del proyecto",
    description:
      "Describe aquí el proyecto, el problema resuelto, sus tecnologías y el resultado.",
    category: "Categoría",
    detail: defaultDetail("proyecto"),
  },
  {
    slug: "projeto-2",
    year: "Año",
    title: "Nombre del proyecto",
    description:
      "Describe aquí el proyecto, el problema resuelto, sus tecnologías y el resultado.",
    category: "Categoría",
    detail: defaultDetail("proyecto"),
  },
];

export function getProjectItem(slug: string) {
  return projectItems.find((item) => item.slug === slug);
}
