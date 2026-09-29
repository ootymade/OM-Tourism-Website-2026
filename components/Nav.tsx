import Link from "next/link";

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
  return (
    <nav className="site-nav">
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
