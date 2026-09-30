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
