import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = fileURLToPath(new URL("../../", import.meta.url));
export const POSTS_DIR = join(ROOT, "content", "posts");

/** Posts must reach this count before the site links to the blog at all. */
export const REVEAL_THRESHOLD = 3;

/**
 * Minimal YAML-frontmatter parser. Deliberately supports only what posts
 * actually use — strings, ISO dates, booleans and flat `[a, b]` arrays — so
 * there is no dependency to keep in step with.
 */
function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) {
    throw new Error("Post is missing a --- frontmatter --- block");
  }

  const [, block, body] = match;
  const data = {};

  for (const line of block.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;

    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }

    value = value.replace(/^["']|["']$/g, "");

    if (value === "true" || value === "false") {
      data[key] = value === "true";
      continue;
    }

    data[key] = value;
  }

  return { data, body: body.trim() };
}

function readingTime(body) {
  // Strip code fences first — nobody reads code at prose speed, and counting
  // it inflates the estimate badly on a tutorial blog.
  const prose = body.replace(/```[\s\S]*?```/g, " ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function readPosts() {
  let files;
  try {
    files = readdirSync(POSTS_DIR).filter((name) => name.endsWith(".md"));
  } catch {
    return [];
  }

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = readFileSync(join(POSTS_DIR, file), "utf8");
    const { data, body } = parseFrontmatter(raw);

    if (!data.title) throw new Error(`${file}: frontmatter is missing "title"`);
    if (!data.date) throw new Error(`${file}: frontmatter is missing "date"`);

    return {
      slug,
      title: data.title,
      description: data.description ?? "",
      date: String(data.date),
      tags: data.tags ?? [],
      draft: data.draft === true,
      readingTime: readingTime(body),
      body,
    };
  });

  // Newest first.
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

/** Posts that are actually ready to be listed and indexed. */
export function publishedPosts() {
  return readPosts().filter((post) => !post.draft);
}

export function formatDate(iso) {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
