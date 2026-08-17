/**
 * Renders content/posts/*.md into real static HTML pages under dist/blog/.
 *
 * Static pages (rather than client-side routes) mean each post gets a proper
 * URL, its own Open Graph tags for link previews, and no 404 on refresh under
 * GitHub Pages. Runs after `vite build`.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";
import { codeToHtml } from "shiki";
import { formatDate, publishedPosts, readPosts, ROOT } from "./lib/posts.mjs";
import { escapeHtml, page } from "./lib/template.mjs";

const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const SITE = `${String(pkg.homepage).replace(/\/+$/, "")}/`;
const DIST = join(ROOT, "dist");
const AUTHOR = "Tanvir Hasan";

const CODE_BLOCK = /<pre><code(?: class="language-([\w-]+)")?>([\s\S]*?)<\/code><\/pre>/g;
const THEME = "github-dark-dimmed";

function decodeEntities(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function slugify(text) {
  return text
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Swap marked's plain <pre><code> for Shiki-highlighted markup. */
async function highlight(html) {
  const blocks = [...html.matchAll(CODE_BLOCK)];
  if (blocks.length === 0) return html;

  const replacements = await Promise.all(
    blocks.map(async ([, lang, escaped]) => {
      const code = decodeEntities(escaped).replace(/\n$/, "");
      try {
        return await codeToHtml(code, { lang: lang || "text", theme: THEME });
      } catch {
        // Unknown language — fall back to an unhighlighted block.
        return await codeToHtml(code, { lang: "text", theme: THEME });
      }
    })
  );

  let index = 0;
  return html.replace(CODE_BLOCK, () => replacements[index++]);
}

/** Give headings stable ids so sections are linkable. */
function anchorHeadings(html) {
  return html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_match, level, inner) => {
    const id = slugify(inner);
    return `<h${level} id="${id}">${inner}<a class="anchor" href="#${id}" aria-label="Link to this section">#</a></h${level}>`;
  });
}

async function renderPost(post) {
  const parsed = await marked.parse(post.body, { async: true, gfm: true });
  const content = anchorHeadings(await highlight(parsed));
  const canonical = `${SITE}blog/${post.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: AUTHOR, url: SITE },
    mainEntityOfPage: canonical,
    keywords: post.tags.join(", "),
  };

  const head = [
    post.draft ? '<meta name="robots" content="noindex, nofollow" />' : "",
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");

  const body = `<main class="wrap">
      <article>
        <p class="meta">${escapeHtml(formatDate(post.date))} · ${post.readingTime} min read${
          post.draft ? " · Draft" : ""
        }</p>
        <h1>${escapeHtml(post.title)}</h1>
        ${post.description ? `<p class="lede">${escapeHtml(post.description)}</p>` : ""}
        <div class="prose">${content}</div>
        ${
          post.tags.length
            ? `<div class="tags">${post.tags
                .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
                .join("")}</div>`
            : ""
        }
      </article>
    </main>`;

  const html = page({
    title: `${post.title} — ${AUTHOR}`,
    description: post.description,
    canonical,
    body,
    upHref: "../../",
    head,
  });

  const dir = join(DIST, "blog", post.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf8");
}

function renderIndex(posts) {
  const body = `<main class="wrap">
      <article>
        <p class="meta">Writing</p>
        <h1>Backend, explained plainly</h1>
        <p class="lede">Notes on the things I've had to get right in production — event-driven systems, message reliability, database performance, and agentic AI.</p>
        ${
          posts.length
            ? `<ul class="index-list">${posts
                .map(
                  (post) => `<li>
            <a href="../blog/${escapeHtml(post.slug)}/">
              <p class="meta">${escapeHtml(formatDate(post.date))} · ${post.readingTime} min read</p>
              <h2>${escapeHtml(post.title)}</h2>
              <p>${escapeHtml(post.description)}</p>
            </a>
          </li>`
                )
                .join("")}</ul>`
            : `<p class="lede" style="margin-top:3rem">No posts published yet.</p>`
        }
      </article>
    </main>`;

  const html = page({
    title: `Writing — ${AUTHOR}`,
    description:
      "Tutorials and notes on backend engineering: event-driven architecture, message reliability, database performance, and multi-agent AI systems.",
    canonical: `${SITE}blog/`,
    body,
    upHref: "../",
  });

  mkdirSync(join(DIST, "blog"), { recursive: true });
  writeFileSync(join(DIST, "blog", "index.html"), html, "utf8");
}

function renderFeed(posts) {
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeHtml(post.title)}</title>
      <link>${SITE}blog/${post.slug}/</link>
      <guid isPermaLink="true">${SITE}blog/${post.slug}/</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeHtml(post.description)}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${AUTHOR} — Writing</title>
    <link>${SITE}blog/</link>
    <description>Backend engineering, explained plainly.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  writeFileSync(join(DIST, "blog", "rss.xml"), xml, "utf8");
}

function renderSitemap(posts) {
  const urls = [SITE, `${SITE}blog/`, ...posts.map((p) => `${SITE}blog/${p.slug}/`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
  writeFileSync(join(DIST, "sitemap.xml"), xml, "utf8");
}

const all = readPosts();
const published = publishedPosts();

// Drafts still render so they can be previewed at their URL, but they are
// noindex'd and kept out of the index, feed and sitemap.
for (const post of all) {
  await renderPost(post);
}

renderIndex(published);
renderFeed(published);
renderSitemap(published);

writeFileSync(
  join(DIST, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`,
  "utf8"
);

const drafts = all.length - published.length;
console.log(
  `[blog] rendered ${all.length} page(s) — ${published.length} published` +
    (drafts ? `, ${drafts} draft(s) noindex'd` : "")
);
