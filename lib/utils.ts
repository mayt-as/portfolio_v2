import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a /public asset with the deploy base path.
 *
 * next/image and next/link handle basePath on their own, but plain <img src>,
 * <a href> to a PDF, and anything referenced from JS do not — use this there.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Whole years elapsed since an ISO date, evaluated at build time (this is a
 * static export — the value freezes at the last deploy and updates on the
 * next one, not live in the visitor's browser).
 */
export function yearsSince(isoDate: string): number {
  const start = new Date(isoDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const hadAnniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
  if (!hadAnniversary) years -= 1;
  return years;
}
