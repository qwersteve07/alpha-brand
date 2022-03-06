const axios = require('axios').default;
const fs = require('fs');

const getSiteMap = async () => {
  const baseUrl = 'https://unmedesign.co';
  const root = process.cwd();

  const staticPages = fs
    .readdirSync(`${root}/src/pages`)
    .filter(staticPage => {
      return !['.DS_Store', 'home', '_app.js', '_document.js', '_error.js', 'sitemap.xml.build.js'].includes(
        staticPage
      );
    })
    .map(staticPagePath => {
      if (staticPagePath === 'index.js') return baseUrl;
      return `${baseUrl}/${staticPagePath}`;
    });

  const articlesPages = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-article-posts').then(res => {
    return res.data.map(data => `${baseUrl}/articles/${data.ID}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map(url => {
            return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.9</priority>
              </url>
            `;
          })
          .join('')}
          ${articlesPages
            .map(url => {
              return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>0.9</priority>
                </url>
              `;
            })
            .join('')}
      </urlset>
    `;

  fs.writeFile(`${root}/public/sitemap.xml`, sitemap, err => {
    if (err) console.log(err);
    else console.log('Write operation complete.');
  });
};

getSiteMap();
getSiteMap;
