import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-4 text-center">
      <p className="font-heading text-sm font-semibold uppercase tracking-widest text-gold-dark">
        404
      </p>
      <h1 className="mt-4">Looks Like This Trail Doesn&apos;t Exist</h1>
      <p className="mt-4 max-w-md">
        The page you&apos;re looking for may have moved or never existed. Let&apos;s get you back
        on track.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
