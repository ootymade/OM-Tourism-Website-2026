import Image from "next/image";

type PageHeroProps = {
  title: string;
  painPoint?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaAction?: string | null;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  painPoint,
  body,
  ctaText,
  ctaAction,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className={`relative overflow-hidden ${hasImage ? "" : "bg-gradient-to-b from-mint/60 via-mint/20 to-cream"}`}>
      {hasImage && (
        <>
          {/* TEMPORARY placeholder — replace with real OotyMade photography before launch */}
          <Image
            src={imageSrc as string}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/55" />
        </>
      )}
      <div
        className={`container-page relative py-16 md:py-24 ${
          hasImage ? "flex min-h-[420px] items-center md:min-h-[520px]" : ""
        }`}
      >
        <div className="max-w-2xl">
          <h1 className={hasImage ? "text-cream" : undefined}>{title}</h1>
          {painPoint && (
            <p
              className={`mt-4 font-heading text-xl italic md:text-2xl ${
                hasImage ? "text-gold" : "text-gold-dark"
              }`}
            >
              {painPoint}
            </p>
          )}
          {body && <p className={`mt-6 ${hasImage ? "text-cream/90" : ""}`}>{body}</p>}
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
