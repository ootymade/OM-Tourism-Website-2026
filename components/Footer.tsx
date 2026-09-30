import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-page flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-heading text-lg font-semibold">OotyMade Tourism</p>
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <li>
              <Link href="/faq" className="text-sm text-cream/80 transition-colors hover:text-gold">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/plan-your-day"
                className="text-sm text-cream/80 transition-colors hover:text-gold"
              >
                Plan Your Day
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-sm text-cream/80 transition-colors hover:text-gold"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-cream/80 transition-colors hover:text-gold"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-cream/60">
          © {new Date().getFullYear()} OotyMade Tourism. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
