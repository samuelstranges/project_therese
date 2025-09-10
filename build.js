// Site configuration
const SITE_CONFIG = {
    title: "Project Therese",
    description: "A simple, elegant blog inspired by Project Isidore",
    baseUrl: "http://host.docker.internal:3000",
    author: "Project Therese",
    language: "en",
    showFooter: true,
    footer: "Built with Project Therese",
    menu: [
        { title: "Posts", url: "/recent.html" },
        { title: "RSS", url: "/rss.xml" },
        { title: "Contact", url: "/contact.html" },
    ],
};

const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const matter = require("gray-matter");
const DOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const { Feed } = require("feed");
const hljs = require("highlight.js");
const { SitemapStream, streamToPromise } = require("sitemap");

// Configure DOMPurify
const window = new JSDOM("").window;
const purify = DOMPurify(window);

// Configure marked with highlight.js using renderer
const renderer = new marked.Renderer();
renderer.code = function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            const highlighted = hljs.highlight(code, { language: lang }).value;
            return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
        } catch (err) {
            // Fall back to auto-detection on error
        }
    }

    const highlighted = hljs.highlightAuto(code).value;
    return `<pre><code class="hljs">${highlighted}</code></pre>`;
};

marked.setOptions({
    renderer: renderer,
});

// Ensure directories exist
const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Read and parse markdown file
const parseMarkdown = (filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: markdown } = matter(content);
    const html = marked(markdown);
    const cleanHtml = purify.sanitize(html);

    return {
        frontmatter: data,
        html: cleanHtml,
        slug: path.basename(filePath, ".md"),
    };
};

// Footer configuration
const FOOTER_CONTENT = `
    <div class="footer">
        <p>${SITE_CONFIG.footer}</p>
    </div>
`;

// Create HTML template
const createTemplate = (
    title,
    content,
    subtitle = "",
    isHomePage = false,
    date = null,
) => {
    const dropCapContent = content.replace(
        /<p>([A-Z])/,
        '<p><span class="dropcap">$1</span>',
    );

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="/assets/global.css">
    <link rel="stylesheet" href="/assets/grayscale.min.css">
</head>
<body>
    <div class="header-fixed">
        <nav class="navbar">
            <div class="logo">
                <a href="/">${SITE_CONFIG.title}</a>
            </div>
            <nav>
                <ul>
                    ${SITE_CONFIG.menu.map((item) => `<li><a href="${item.url}">${item.title}</a></li>`).join("")}
                </ul>
            </nav>
        </nav>
    </div>
    <div id="content">
        <h1 class="title">${title}</h1>
        ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ""}
        ${date ? `<p class="updated">Last Updated ${new Date(date).toISOString().split("T")[0]}</p>` : ""}
        ${dropCapContent}
    </div>
    ${SITE_CONFIG.showFooter ? FOOTER_CONTENT : ""}
</body>
</html>`;
};

// Generate RSS feed
const generateRSS = (posts) => {
    const feed = new Feed({
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        id: `${SITE_CONFIG.baseUrl}/`,
        link: `${SITE_CONFIG.baseUrl}/`,
        language: SITE_CONFIG.language,
    });

    posts
        .filter((post) => post.frontmatter.type === "post")
        .sort(
            (a, b) =>
                new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
        )
        .forEach((post) => {
            feed.addItem({
                title: post.frontmatter.title,
                id: `${SITE_CONFIG.baseUrl}/${post.slug}.html`,
                link: `${SITE_CONFIG.baseUrl}/${post.slug}.html`,
                description: post.frontmatter.subtitle || "",
                date: new Date(post.frontmatter.date),
            });
        });

    return feed.rss2();
};

// Generate sitemap.xml
const generateSitemap = async (posts) => {
    const sitemap = new SitemapStream({ hostname: SITE_CONFIG.baseUrl });

    // Add homepage
    sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });

    // Add all pages
    posts.forEach((post) => {
        sitemap.write({
            url: `/${post.slug}.html`,
            changefreq: post.frontmatter.type === "post" ? "monthly" : "yearly",
            priority: post.frontmatter.type === "post" ? 0.8 : 0.6,
            lastmod: post.frontmatter.date
                ? new Date(post.frontmatter.date)
                : new Date(),
        });
    });

    // Add recent posts page
    sitemap.write({ url: "/recent.html", changefreq: "daily", priority: 0.9 });

    sitemap.end();

    return streamToPromise(sitemap).then((data) => data.toString());
};

// Generate recent posts page
const generateRecentPosts = (posts) => {
    const blogPosts = posts
        .filter((post) => post.frontmatter.type === "post")
        .sort(
            (a, b) =>
                new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
        );

    const content = `
    <ul class="org-ul">
      ${blogPosts
          .map((post) => {
              const date = new Date(post.frontmatter.date);
              const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD format
              return `<li><a href="/${post.slug}.html">${post.frontmatter.title}</a><span class="timestamp">[${formattedDate}]</span></li>`;
          })
          .join("")}
    </ul>
  `;

    return createTemplate("Recent Posts", content);
};

// Main build function
const build = async () => {
    console.log("Building Project Therese...");

    // Ensure output directories exist
    ensureDir("dist");
    ensureDir("dist/assets");

    // Copy assets
    if (fs.existsSync("assets")) {
        const assets = fs.readdirSync("assets");
        assets.forEach((asset) => {
            fs.copyFileSync(
                path.join("assets", asset),
                path.join("dist", "assets", asset),
            );
        });
    }

    // Process markdown files
    const contentDir = "content";
    const files = fs
        .readdirSync(contentDir)
        .filter((file) => file.endsWith(".md"));
    const posts = [];

    files.forEach((file) => {
        const filePath = path.join(contentDir, file);
        const post = parseMarkdown(filePath);
        posts.push(post);

        // Generate HTML file
        const html = createTemplate(
            post.frontmatter.title,
            post.html,
            post.frontmatter.subtitle,
            post.slug === "welcome",
            post.frontmatter.date,
        );

        const outputPath = path.join("dist", `${post.slug}.html`);
        fs.writeFileSync(outputPath, html);
        console.log(`Generated: ${post.slug}.html`);
    });

    // Generate index.html (welcome page)
    const welcomePost = posts.find((p) => p.slug === "welcome");
    if (welcomePost) {
        const indexHtml = createTemplate(
            welcomePost.frontmatter.title,
            welcomePost.html,
            welcomePost.frontmatter.subtitle,
            true,
            welcomePost.frontmatter.date,
        );
        fs.writeFileSync("dist/index.html", indexHtml);
        console.log("Generated: index.html");
    }

    // Generate recent posts page
    const recentHtml = generateRecentPosts(posts);
    fs.writeFileSync("dist/recent.html", recentHtml);
    console.log("Generated: recent.html");

    // Generate RSS feed
    const rssContent = generateRSS(posts);
    fs.writeFileSync("dist/rss.xml", rssContent);
    console.log("Generated: rss.xml");

    // Generate sitemap
    const sitemapContent = await generateSitemap(posts);
    fs.writeFileSync("dist/sitemap.xml", sitemapContent);
    console.log("Generated: sitemap.xml");

    // Generate README.md from welcome.md
    const welcomeMarkdown = fs.readFileSync("content/welcome.md", "utf8");
    // Remove frontmatter and keep just the markdown content
    const { content: readmeContent } = matter(welcomeMarkdown);
    fs.writeFileSync("README.md", readmeContent.trim());
    console.log("Generated: README.md");

    console.log("Build complete!");
};

// Run build
build();
