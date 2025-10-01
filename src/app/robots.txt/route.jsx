export async function GET() {
const robots = `# robots.txt for fliptradegroup.com
User-agent: *
# Allow normal site pages
Allow: /
Sitemap: https://www.fliptradegroup.com/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
