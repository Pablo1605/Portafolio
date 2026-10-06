export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\/+/, "")}`;
}

export function withBaseIfNeeded(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  if (path === base || path.startsWith(`${base}/`)) {
    return path;
  }

  return withBase(path);
}
