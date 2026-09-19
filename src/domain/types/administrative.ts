/**
 * Administrative geography: Philippines -> Region -> Province -> City/Municipality -> Barangay.
 * Deliberately separate from discovery geography.
 */
import type { EntityBase, Slug } from "./common";

export type IslandGroup = "luzon" | "visayas" | "mindanao";

export interface Region extends EntityBase {
  kind: "region";
  /** Official designation, e.g. "Region IV-A" or "CAR". */
  designation?: string;
  islandGroup: IslandGroup;
}

export interface Province extends EntityBase {
  kind: "province";
  regionSlug: Slug;
}

/** Cities and municipalities share the same level of the hierarchy. */
export interface CityMunicipality extends EntityBase {
  kind: "city" | "municipality";
  /** Highly urbanized cities may sit directly under a region. */
  provinceSlug?: Slug;
  regionSlug: Slug;
}

export interface Barangay extends EntityBase {
  kind: "barangay";
  cityMunicipalitySlug: Slug;
}

export type AdministrativeLocation = Region | Province | CityMunicipality | Barangay;
