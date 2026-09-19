/**
 * Content data (static, Phase 1A).
 * Entries are added only when the information is verified — no fabricated
 * places, food claims, businesses, providers, or cultural claims.
 * Tools mirror the existing public /tools URLs, which must stay stable.
 */
import type { Business, Food, Guide, Place, Provider, Service, Tool } from "../types";

export const places: Place[] = [];
export const foods: Food[] = [];
export const businesses: Business[] = [];
export const services: Service[] = [];

/** Providers are published only after manual approval and explicit consent. */
export const providers: Provider[] = [];

export const guides: Guide[] = [];

export const tools: Tool[] = [
  {
    kind: "tool",
    slug: "peso-converter",
    name: "Peso Converter",
    category: "money",
    path: "/tools",
    available: false,
  },
  { kind: "tool", slug: "loan-calculator", name: "Loan Calculator", category: "money", path: "/tools", available: false },
  {
    kind: "tool",
    slug: "remittance-calculator",
    name: "Remittance Calculator",
    category: "money",
    path: "/tools",
    available: false,
  },
  {
    kind: "tool",
    slug: "mileage-calculator",
    name: "Mileage Calculator",
    category: "travel",
    path: "/tools",
    available: false,
  },
  { kind: "tool", slug: "bmi-calculator", name: "BMI Calculator", category: "health", path: "/tools", available: false },
];
