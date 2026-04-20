export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://shreemsoftwaresolutions.com/sitemap.xml",
  };
}
