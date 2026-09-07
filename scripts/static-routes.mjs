export const projectSlugs = ["finalace", "cloud-catalog"];
export const articleSlugs = [
  "finalace-from-zero-to-one",
  "my-ai-workflow",
  "ai-and-encounter",
  "cities-and-choices",
  "xinjiang-solo-drive",
];

export const routes = [
  "/",
  "/zh",
  "/en",
  "/zh/full",
  "/en/full",
  ...["zh", "en"].flatMap((locale) => [
    ...projectSlugs.map((slug) => `/${locale}/full/projects/${slug}`),
    ...articleSlugs.map((slug) => `/${locale}/full/articles/${slug}`),
  ]),
  "/more",
  "/profile",
  ...projectSlugs.map((slug) => `/projects/${slug}`),
  "/updates",
  "/updates/ai-agent-open-source",
  "/updates/ai-coding-tools",
  "/updates/finalace-start",
  "/updates/personal-company",
  "/updates/waic-2026",
  ...articleSlugs.map((slug) => `/articles/${slug}`),
];

// Retired generated pages remain useful entry points for old shared links.
// Point visitors at the relevant collection without equating different projects.
export const retiredRoutes = {
  "/projects/narziss": "/zh/full/#projects",
  "/articles/ai-learning-assistant": "/zh/full/#writing",
  "/articles/waic-observation": "/zh/full/#writing",
};
