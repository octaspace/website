/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://octa.space', // your main domain
    generateRobotsTxt: true,        // generates robots.txt automatically
    sitemapSize: 5000,               // optional, for large sites
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/api/*', '/admin/*'], // optional: block non-public pages
  };
  