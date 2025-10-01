export async function GET() {
  const baseUrl = "https://www.fliptradegroup.com";

  const staticUrls = [
    `${baseUrl}/`,
    `${baseUrl}/forex`,
    `${baseUrl}/indices`,
    `${baseUrl}/commodities`,
    `${baseUrl}/cryptocurrency`,
    `${baseUrl}/metals`,
    `${baseUrl}/stocks`,
    `${baseUrl}/accounts-types`,
    `${baseUrl}/contact-us`
  ];

  const today = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
