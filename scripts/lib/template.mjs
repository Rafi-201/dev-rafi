/** Shared chrome for every generated blog page. Kept as one inline <style>
 *  block so blog pages are fully self-contained and never depend on the
 *  hashed asset names Vite produces for the React app. */

export const BLOG_CSS = `
:root{
  --bg:#0b0b0c; --surface:#121214; --line:#1f1f23; --line-strong:#2c2c32;
  --ink:#ededee; --muted:#9a9aa2; --dim:#64646c; --accent:#7c9fff;
  --sans:"Inter",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  color-scheme:dark;
}
*,*::before,*::after{box-sizing:border-box}
html{background:var(--bg);scroll-behavior:smooth;scroll-padding-top:5rem}
body{
  margin:0;background:var(--bg);color:var(--ink);font-family:var(--sans);
  font-size:16px;line-height:1.7;letter-spacing:-0.01em;
  -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;
}
::selection{background:var(--accent);color:#07080c}
:focus-visible{outline:1px solid var(--accent);outline-offset:3px;border-radius:2px}
a{color:inherit}
img{max-width:100%;height:auto}

.wrap{max-width:44rem;margin:0 auto;padding:0 1.5rem}

.topbar{border-bottom:1px solid var(--line)}
.topbar .wrap{display:flex;align-items:center;justify-content:space-between;height:4rem}
.topbar a{font-size:.8125rem;text-decoration:none;color:var(--muted);transition:color .2s}
.topbar a:hover{color:var(--ink)}
.topbar .mark{font-family:var(--mono);letter-spacing:.15em;color:var(--ink)}

.meta{font-family:var(--mono);font-size:.6875rem;letter-spacing:.18em;
  text-transform:uppercase;color:var(--dim)}

article{padding:4rem 0 5rem}
article h1{font-size:2rem;line-height:1.2;font-weight:500;letter-spacing:-0.03em;margin:1.25rem 0 0}
article .lede{color:var(--muted);font-size:1.0625rem;margin:1rem 0 0}
article .byline{margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--line)}

.prose{margin-top:3rem}
.prose>*+*{margin-top:1.5rem}
.prose p{color:var(--muted)}
.prose strong{color:var(--ink);font-weight:500}
.prose h2{font-size:1.25rem;font-weight:500;letter-spacing:-0.02em;color:var(--ink);
  margin-top:3.5rem;padding-top:2rem;border-top:1px solid var(--line)}
.prose h3{font-size:1rem;font-weight:500;color:var(--ink);margin-top:2.5rem}
.prose ul,.prose ol{color:var(--muted);padding-left:1.25rem}
.prose li+li{margin-top:.6rem}
.prose li::marker{color:var(--dim)}
.prose a{color:var(--ink);text-decoration:underline;
  text-decoration-color:var(--line-strong);text-underline-offset:4px;transition:text-decoration-color .2s}
.prose a:hover{text-decoration-color:var(--accent)}
.prose blockquote{margin:0;padding-left:1.25rem;border-left:1px solid var(--line-strong);color:var(--dim)}
.prose hr{border:0;border-top:1px solid var(--line);margin:3rem 0}
.prose code{font-family:var(--mono);font-size:.85em;color:var(--ink);
  background:var(--surface);border:1px solid var(--line);border-radius:3px;padding:.1em .35em}
.prose pre{overflow-x:auto;border:1px solid var(--line);border-radius:6px;
  padding:1.125rem 1.25rem;font-size:.8125rem;line-height:1.65}
.prose pre code{background:none;border:0;padding:0;font-size:inherit}
.prose table{width:100%;border-collapse:collapse;font-size:.9375rem;display:block;overflow-x:auto}
.prose th,.prose td{text-align:left;padding:.65rem .75rem;border-bottom:1px solid var(--line)}
.prose th{color:var(--ink);font-weight:500;font-size:.8125rem}
.prose td{color:var(--muted)}
.prose h2 .anchor,.prose h3 .anchor{opacity:0;text-decoration:none;color:var(--dim);margin-left:.4rem}
.prose h2:hover .anchor,.prose h3:hover .anchor{opacity:1}

.tags{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:3rem;
  padding-top:1.5rem;border-top:1px solid var(--line)}
.tag{font-family:var(--mono);font-size:.6875rem;color:var(--dim);
  border:1px solid var(--line);border-radius:3px;padding:.2rem .5rem}

.index-list{list-style:none;margin:3rem 0 0;padding:0}
.index-list li{border-top:1px solid var(--line);padding:2rem 0}
.index-list li:last-child{border-bottom:1px solid var(--line)}
.index-list h2{font-size:1.125rem;font-weight:500;margin:.75rem 0 0;letter-spacing:-0.02em}
.index-list a{text-decoration:none}
.index-list a:hover h2{color:var(--accent)}
.index-list p{color:var(--muted);margin:.5rem 0 0;font-size:.9375rem}

.foot{border-top:1px solid var(--line);padding:2.5rem 0;margin-top:4rem}
.foot .wrap{display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:space-between}
.foot,.foot a{font-family:var(--mono);font-size:.75rem;color:var(--dim);text-decoration:none}
.foot a:hover{color:var(--ink)}

@media (max-width:640px){
  article h1{font-size:1.625rem}
  article{padding:2.5rem 0 3rem}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{transition-duration:.01ms!important;animation-duration:.01ms!important}
}
`.trim();

export const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />`;

export const FAVICON = `<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230b0b0c'/%3E%3Ctext x='32' y='43' font-family='ui-monospace,Menlo,monospace' font-size='27' font-weight='700' fill='%237c9fff' text-anchor='middle'%3ETH%3C/text%3E%3C/svg%3E" />`;

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * @param {object} options
 * @param {string} options.title      full <title> text
 * @param {string} options.description meta description
 * @param {string} options.canonical  absolute URL
 * @param {string} options.body       page markup
 * @param {string} options.upHref     relative path back to the portfolio root
 * @param {string} [options.head]     extra <head> markup (JSON-LD, robots…)
 */
export function page({ title, description, canonical, body, upHref, head = "" }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0b0b0c" />
    <meta name="color-scheme" content="dark" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    ${FAVICON}
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <link rel="alternate" type="application/rss+xml" title="Tanvir Hasan — Writing" href="${escapeHtml(upHref)}blog/rss.xml" />
    ${FONTS}
    ${head}
    <style>${BLOG_CSS}</style>
  </head>
  <body>
    <header class="topbar">
      <div class="wrap">
        <a class="mark" href="${escapeHtml(upHref)}">TH</a>
        <a href="${escapeHtml(upHref)}blog/">Writing</a>
      </div>
    </header>
    ${body}
    <footer class="foot">
      <div class="wrap">
        <span>© ${new Date().getFullYear()} Tanvir Hasan</span>
        <span>
          <a href="${escapeHtml(upHref)}">Portfolio</a> ·
          <a href="${escapeHtml(upHref)}blog/rss.xml">RSS</a> ·
          <a href="https://github.com/Rafi-201">GitHub</a>
        </span>
      </div>
    </footer>
  </body>
</html>
`;
}
