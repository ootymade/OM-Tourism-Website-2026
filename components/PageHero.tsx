type PageHeroProps = {
  title: string;
  painPoint?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaAction?: string | null;
};

export function PageHero({ title, painPoint, body, ctaText, ctaAction }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-mint/60 via-mint/20 to-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <h1>{title}</h1>
          {painPoint && (
            <p className="mt-4 font-heading text-xl italic text-gold-dark md:text-2xl">
              {painPoint}
            </p>
          )}
          {body && <p className="mt-6">{body}</p>}
          {ctaText && ctaAction && (
            <a href={ctaAction} className="btn-primary mt-8">
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
