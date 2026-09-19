/**
 * Discovery geography data (static, Phase 1A).
 * Destinations are adapted from the existing homepage hero library in
 * src/lib/destinations.ts — that file stays the source of the hero content so
 * the current UI keeps working unchanged.
 */
import { destinations as heroDestinations } from "@/lib/destinations";
import type { Attraction, Destination, Island, Slug, TourismArea } from "../types";

/**
 * Cross-reference from a hero destination slug to administrative locations.
 * Only mappings that are factually correct are listed.
 */
const administrativeByDestination: Record<Slug, Slug[]> = {
  "el-nido": ["el-nido", "palawan"],
  "chocolate-hills": ["bohol"],
  "mayon-volcano": ["albay"],
  "banaue-rice-terraces": ["banaue", "ifugao"],
  boracay: ["malay", "aklan"],
  siargao: ["general-luna", "surigao-del-norte"],
  vigan: ["vigan", "ilocos-sur"],
  "kawasan-falls": ["badian", "cebu"],
  sagada: ["sagada", "mountain-province"],
  "baguio-city": ["baguio-city", "benguet"],
  "taal-volcano": ["talisay-batangas", "batangas"],
  "davao-city": ["davao-city", "davao-del-sur"],
  coron: ["coron", "palawan"],
  "puerto-princesa": ["puerto-princesa", "palawan"],
  batanes: ["batanes"],
  "hundred-islands": ["alaminos", "pangasinan"],
  "cebu-city": ["cebu-city", "cebu"],
  camiguin: ["camiguin"],
  siquijor: ["siquijor"],
  "apo-island": ["dumaguete", "negros-oriental"],
  intramuros: ["manila"],
  "pink-beach": ["zamboanga-city"],
  "la-union": ["la-union"],
  pagudpud: ["pagudpud", "ilocos-norte"],
};

export const destinations: Destination[] = heroDestinations.map((hero) => ({
  kind: "destination",
  slug: hero.slug,
  name: hero.name,
  provinceOrArea: hero.provinceOrArea,
  summary: hero.description,
  exploreLabel: hero.exploreLabel,
  image: { src: hero.image, alt: `${hero.name}, ${hero.provinceOrArea}` },
  administrativeSlugs: administrativeByDestination[hero.slug] ?? [],
}));

/** No verified island / tourism-area / attraction records have been collected yet. */
export const islands: Island[] = [];
export const tourismAreas: TourismArea[] = [];
export const attractions: Attraction[] = [];
