const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby(["pages/*.tsx", "pages/buttons/*.tsx"]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page.replace("pages", "").replace(".js", "");
                const route = path === "/index" ? "" : path;
                return `
                        <url>
                            <loc>${`https://cssbuttons.app${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("./public/sitemap.xml", formatted);
})();
