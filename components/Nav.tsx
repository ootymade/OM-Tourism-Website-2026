"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/stay", label: "Stay" },
  { href: "/travel", label: "Travel" },
  { href: "/experiences", label: "Experiences" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <div className="bg-forest text-cream">
        <div className="container-page flex h-8 items-center justify-between text-xs">
          <a
            href="https://wa.me/919786168888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5 shrink-0"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.14-1.35a9.96 9.96 0 0 0 4.9 1.25h.01c5.52 0 10-4.48 10-10s-4.49-9.9-10.01-9.9Zm0 18.13h-.01a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.05.8.82-2.97-.2-.3a8.14 8.14 0 0 1-1.25-4.34c0-4.49 3.66-8.14 8.15-8.14 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.38 5.76c0 4.49-3.66 8.12-8.16 8.12Zm4.47-6.08c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.17.2-.57.2-1.06.14-1.17-.06-.11-.22-.17-.46-.29Z" />
            </svg>
            +91 97861 68888
          </a>
          <span className="hidden text-cream/70 sm:inline">Est. 2012 · By OotyMade.com</span>
        </div>
      </div>
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-heading text-xl font-semibold text-forest md:text-2xl"
        >
          OotyMade Tourism
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 font-body text-sm font-medium transition-colors hover:text-gold-dark ${
                    active ? "text-gold-dark" : "text-forest"
                  } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:content-[''] ${
                    active ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-forest transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-forest/10 bg-cream transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
        }`}
      >
        <ul className="container-page flex min-h-0 flex-col gap-1 overflow-hidden py-2">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-md px-2 py-2.5 font-body text-sm font-medium transition-colors ${
                    active ? "bg-mint/60 text-gold-dark" : "text-forest hover:bg-mint/40"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
