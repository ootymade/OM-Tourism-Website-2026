export function PullQuote({ children }: { children: string }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="relative mx-auto max-w-3xl border-l-4 border-gold pl-6 md:pl-10">
          <span
            aria-hidden="true"
            className="absolute -top-4 left-2 font-heading text-6xl leading-none text-gold/40 md:-top-6 md:text-7xl"
          >
            &ldquo;
          </span>
          <p className="font-heading text-xl italic leading-relaxed text-forest md:text-2xl">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}
