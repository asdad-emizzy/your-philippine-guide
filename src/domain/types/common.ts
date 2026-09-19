/**
 * Shared primitives for the PinoyLokal domain model.
 * Phase 1A: types only — no database, no backend, no runtime services.
 */

/** URL-safe stable identifier used in routes and data references. */
export type Slug = string;

/** Kinds of administrative locations (government geography). */
export type AdministrativeKind = "region" | "province" | "city" | "municipality" | "barangay";

/** Kinds of discovery locations (travel/tourism geography). */
export type DiscoveryKind = "destination" | "island" | "tourismArea" | "attraction";

/** Kinds of content entities that can be attached to locations. */
export type ContentKind = "place" | "food" | "business" | "service" | "provider" | "guide" | "tool";

export type EntityKind = AdministrativeKind | DiscoveryKind | ContentKind;

/** Optional geographic coordinates. Only set when the value is actually known. */
export interface GeoPoint {
  lat: number;
  lng: number;
}

/** Fields shared by every addressable domain entity. */
export interface EntityBase {
  slug: Slug;
  name: string;
  /** Short editorial summary. Never auto-generated or fabricated. */
  summary?: string;
  coordinates?: GeoPoint;
}

/** Reference to a stored image (e.g. Cloudflare R2 object or bundled asset URL). */
export interface ImageRef {
  src: string;
  alt: string;
}

/**
 * How a content entity is anchored in geography.
 * Administrative and discovery geography stay distinct: content may point at
 * either or both, but the two hierarchies are never merged.
 */
export interface LocationLinks {
  /** Administrative location slugs (region / province / city / municipality / barangay). */
  administrative?: Slug[];
  /** Discovery location slugs (destination / island / tourism area / attraction). */
  discovery?: Slug[];
}

/** Editorial publication state. Publication is a manual decision. */
export type PublishStatus = "draft" | "published";

/** Public contact handles. External links only — no messaging in-app. */
export interface ContactChannels {
  phone?: string;
  viber?: string;
  whatsapp?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}
