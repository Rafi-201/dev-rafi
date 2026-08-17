import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-dim">
          © {year} {profile.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-muted transition-colors hover:text-ink"
          >
            Email
          </a>
          <a
            href="#top"
            className="text-xs text-muted transition-colors hover:text-ink"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
