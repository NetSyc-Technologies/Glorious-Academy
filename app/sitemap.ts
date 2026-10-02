import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { coursesData } from "@/content/courses";
import { centresData } from "@/content/centres";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.canonicalDomain;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/courses",
    "/results",
    "/testimonials",
    "/resources",
    "/resources/pyqs",
    "/centres",
    "/admissions",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/courses" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/courses") ? 0.9 : 0.7,
  }));

  const courseRoutes: MetadataRoute.Sitemap = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const centreRoutes: MetadataRoute.Sitemap = centresData.map((centre) => ({
    url: `${baseUrl}/centres/${centre.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes, ...centreRoutes];
}
