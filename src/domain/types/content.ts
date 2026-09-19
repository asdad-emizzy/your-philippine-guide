/**
 * Content entities: Place, Food, Business, Service, Provider, Guide, Tool.
 * All geography links go through LocationLinks so administrative and discovery
 * hierarchies stay distinct.
 */
import type {
  ContactChannels,
  EntityBase,
  ImageRef,
  LocationLinks,
  PublishStatus,
  Slug,
} from "./common";

interface ContentBase extends EntityBase {
  status: PublishStatus;
  locations: LocationLinks;
  images?: ImageRef[];
  tags?: string[];
}

export type PlaceCategory =
  | "attraction"
  | "landmark"
  | "market"
  | "museum"
  | "church"
  | "park"
  | "accommodation"
  | "transportHub"
  | "other";

export interface Place extends ContentBase {
  kind: "place";
  category: PlaceCategory;
}

export type FoodCategory = "dish" | "recipe" | "delicacy" | "drink" | "streetFood" | "ingredient";

export interface Food extends ContentBase {
  kind: "food";
  category: FoodCategory;
  /** Region/province of origin, when genuinely known. */
  originSlug?: Slug;
}

export interface Business extends ContentBase {
  kind: "business";
  /** e.g. "restaurant", "hardware store". Free-form but curated. */
  businessType: string;
  contact?: ContactChannels;
}

export interface Service extends ContentBase {
  kind: "service";
  /** e.g. "electrical repair", "aircon cleaning". */
  serviceType: string;
}

/**
 * Provider = a skilled person or team listed in the directory.
 * Publication requires manual approval and explicit consent.
 * Private validation data is intentionally NOT part of this public type.
 */
export interface Provider extends ContentBase {
  kind: "provider";
  /** Primary skill, e.g. "Electrician". */
  skill: string;
  /** Services offered, as public tags. */
  serviceTags: string[];
  /** Human-readable location label shown on the card. */
  locationLabel: string;
  contact?: ContactChannels;
  /** Explicit consent to publish the listing. */
  consentToPublish: boolean;
}

export type GuideCategory = "travel" | "howTo" | "money" | "culture" | "local" | "food";

export interface Guide extends ContentBase {
  kind: "guide";
  category: GuideCategory;
  /** Route path of the published guide, when it exists. */
  path?: string;
}

export type ToolCategory = "money" | "health" | "travel" | "utility";

export interface Tool extends EntityBase {
  kind: "tool";
  category: ToolCategory;
  /** Existing public URL — must stay stable for SEO. */
  path: string;
  available: boolean;
}

export type ContentEntity = Place | Food | Business | Service | Provider | Guide | Tool;
