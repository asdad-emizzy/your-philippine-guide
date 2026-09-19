/**
 * Discovery geography: Philippines -> Destination -> Island -> Tourism Area -> Attraction.
 * Cross-references administrative geography but is never collapsed into it.
 */
import type { EntityBase, ImageRef, Slug } from "./common";

export interface Destination extends EntityBase {
  kind: "destination";
  /** Human-readable province or area label shown in the UI. */
  provinceOrArea: string;
  /** Administrative locations this destination covers or sits within. */
  administrativeSlugs?: Slug[];
  image?: ImageRef;
  exploreLabel?: string;
}

export interface Island extends EntityBase {
  kind: "island";
  destinationSlug?: Slug;
  administrativeSlugs?: Slug[];
}

export interface TourismArea extends EntityBase {
  kind: "tourismArea";
  destinationSlug?: Slug;
  islandSlug?: Slug;
}

export type AttractionType =
  | "beach"
  | "island"
  | "waterfall"
  | "mountain"
  | "volcano"
  | "cave"
  | "heritage"
  | "park"
  | "diveSite"
  | "viewpoint"
  | "other";

export interface Attraction extends EntityBase {
  kind: "attraction";
  attractionType: AttractionType;
  tourismAreaSlug?: Slug;
  islandSlug?: Slug;
  destinationSlug?: Slug;
  administrativeSlugs?: Slug[];
}

export type DiscoveryLocation = Destination | Island | TourismArea | Attraction;
