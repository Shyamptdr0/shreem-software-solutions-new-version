export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://shreemsoftwaresolutions.com";
  
  const routes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/expertise",
    "/delivery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
