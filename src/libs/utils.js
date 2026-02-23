import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16,
  );
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

export function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

export function lerpColor(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = lerp(a.r, b.r, t);
  const g = lerp(a.g, b.g, t);
  const b2 = lerp(a.b, b.b, t);
  return `rgb(${r}, ${g}, ${b2})`;
}
