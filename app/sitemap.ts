import type { MetadataRoute } from "next";

const baseUrl = "https://tourism.ootymade.com";

const routes = [
  "",
  "/stay",
  "/travel",
  "/experiences",
  "/packages",
  "/about",
  "/contact",
  "/faq",
  "/plan-your-day",
];
const legalRoutes = ["/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const main = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const legal = legalRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...main, ...legal];
}
