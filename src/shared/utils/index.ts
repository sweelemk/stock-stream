import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
