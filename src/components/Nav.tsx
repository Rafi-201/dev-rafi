import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/profile";
import { blogIsLive } from "../data/posts";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  // "Writing" only appears once the blog has enough posts to be worth visiting.
  const links = blogIsLive
    ? [...navLinks.slice(0, -1), { href: "#writing", label: "Writing" }, navLinks[navLinks.length - 1]]
    : navLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className="font-mono text-[13px] tracking-widest text-ink transition-colors hover:text-accent"
        >
          {profile.initials}
        </a>

        <div className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-[13px] text-muted transition-colors hover:text-ink sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="text-[13px] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
