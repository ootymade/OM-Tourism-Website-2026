import type { Metadata } from "next";

const FALLBACK_IMAGE = "/images/hero-ooty-hills.jpg";

export function buildPageMetadata({
  title,
  description,
  image,
}: {
  title: string;
  description?: string | null;
  image?: string;
}): Metadata {
  const ogImage = image ?? FALLBACK_IMAGE;
  const desc = description ?? undefined;

  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}
