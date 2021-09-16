const fs = require('fs');
const matter = require('gray-matter');

const getSiteMap = () => {
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

  const projectPages = fs.readdirSync(`${root}/src/articles/projects`).map(filename => {
    return `${baseUrl}/projects/${filename.replace('.md', '')}`;
  });

  const storiesPages = fs
    .readdirSync(`${root}/src/articles/stories`)
    .filter(filename => {
      return !filename.includes('external');
    })
    .map(filename => {
      const markdownWithMetadata = fs.readFileSync(`src/articles/stories/${filename}`).toString();

      let { data } = matter(markdownWithMetadata);

      return `${baseUrl}/stories/${filename.replace('.md', '')}`;
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
          ${projectPages
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
            ${storiesPages
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
