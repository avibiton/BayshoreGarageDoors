import type { MetadataRoute } from "next";
import { BUSINESS, SERVICES } from "@/lib/config";

const BASE_URL = `https://${BUSINESS.website}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/about", "/service-areas", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  // Same data source as generateStaticParams in app/services/[slug]/page.tsx
  const servicePages = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
