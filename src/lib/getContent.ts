import rawOverrides from "@/data/content-overrides.json";
import { withBaseIfNeeded } from "@/lib/site";

export type ContentOverrides = Record<string, string>;

export const contentOverrides: ContentOverrides = rawOverrides;

export function getContent(key: string, fallback: string): string {
  return contentOverrides[key] ?? fallback;
}

export function getLinkHref(linkKey: string, fallback: string): string {
  return contentOverrides[`link.${linkKey}`] ?? fallback;
}

export function getImageSrc(imageKey: string): string | undefined {
  const src = contentOverrides[`image.${imageKey}`];

  return src ? withBaseIfNeeded(src) : undefined;
}
