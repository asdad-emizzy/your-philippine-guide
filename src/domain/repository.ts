/**
 * Domain access layer (Phase 1A).
 *
 * The UI should read domain data only through these functions. They are
 * synchronous today because the data is static; swapping the bodies for a
 * database or API later does not require changing call sites beyond awaiting.
 */
import {
  attractions,
  businesses,
  barangays,
  citiesMunicipalities,
  destinations,
  foods,
  guides,
  islands,
  places,
  providers,
  provinces,
  regions,
  services,
  tools,
  tourismAreas,
} from "./data";
import type {
  AdministrativeLocation,
  Business,
  Destination,
  DiscoveryLocation,
  Food,
  Guide,
  Place,
  Provider,
  Region,
  Service,
  Slug,
  Tool,
} from "./types";

/* ---------------------------------- indexes --------------------------------- */

const administrativeAll: AdministrativeLocation[] = [
  ...regions,
  ...provinces,
  ...citiesMunicipalities,
  ...barangays,
];

const discoveryAll: DiscoveryLocation[] = [
  ...destinations,
  ...islands,
  ...tourismAreas,
  ...attractions,
];

function indexBySlug<T extends { slug: Slug }>(items: readonly T[]): Map<Slug, T> {
  return new Map(items.map((item) => [item.slug, item]));
}

const administrativeIndex = indexBySlug(administrativeAll);
const discoveryIndex = indexBySlug(discoveryAll);

/* --------------------------- administrative access -------------------------- */

/** Look up an administrative location by slug. */
export function getLocation(slug: Slug): AdministrativeLocation | undefined {
  return administrativeIndex.get(slug);
}

export function listRegions(): Region[] {
  return regions;
}

/** Direct administrative children of a location, one level down. */
export function getChildren(slug: Slug): AdministrativeLocation[] {
  const location = getLocation(slug);
  if (!location) return [];
  switch (location.kind) {
    case "region":
      return [
        ...provinces.filter((p) => p.regionSlug === location.slug),
        ...citiesMunicipalities.filter((c) => c.regionSlug === location.slug && !c.provinceSlug),
      ];
    case "province":
      return citiesMunicipalities.filter((c) => c.provinceSlug === location.slug);
    case "city":
    case "municipality":
      return barangays.filter((b) => b.cityMunicipalitySlug === location.slug);
    case "barangay":
      return [];
  }
}

/** Direct administrative parent of a location, if any. */
export function getParent(slug: Slug): AdministrativeLocation | undefined {
  const location = getLocation(slug);
  if (!location) return undefined;
  switch (location.kind) {
    case "region":
      return undefined;
    case "province":
      return getLocation(location.regionSlug);
    case "city":
    case "municipality":
      return getLocation(location.provinceSlug ?? location.regionSlug);
    case "barangay":
      return getLocation(location.cityMunicipalitySlug);
  }
}

/** Full chain from the top-most region down to the given location. */
export function getAncestors(slug: Slug): AdministrativeLocation[] {
  const chain: AdministrativeLocation[] = [];
  let parent = getParent(slug);
  while (parent) {
    chain.unshift(parent);
    parent = getParent(parent.slug);
  }
  return chain;
}

/* ------------------------------ discovery access ----------------------------- */

/** Look up any discovery location (destination, island, tourism area, attraction). */
export function getDiscoveryLocation(slug: Slug): DiscoveryLocation | undefined {
  return discoveryIndex.get(slug);
}

export function getDestination(slug: Slug): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export function listDestinations(): Destination[] {
  return destinations;
}

/**
 * Destinations linked to an administrative location, including its descendants
 * (e.g. a region returns destinations in its provinces and cities).
 */
export function getDestinationsByLocation(slug: Slug): Destination[] {
  const scope = new Set<Slug>([slug]);
  const queue: Slug[] = [slug];
  while (queue.length > 0) {
    const next = queue.shift();
    if (!next) break;
    for (const child of getChildren(next)) {
      if (!scope.has(child.slug)) {
        scope.add(child.slug);
        queue.push(child.slug);
      }
    }
  }
  return destinations.filter((destination) =>
    (destination.administrativeSlugs ?? []).some((linked) => scope.has(linked)),
  );
}

/* ------------------------------- content access ------------------------------ */

export function listPlaces(): Place[] {
  return places;
}

export function listFoods(): Food[] {
  return foods;
}

export function listBusinesses(): Business[] {
  return businesses;
}

export function listServices(): Service[] {
  return services;
}

export function listProviders(): Provider[] {
  return providers;
}

export function listGuides(): Guide[] {
  return guides;
}

export function listTools(): Tool[] {
  return tools;
}

export function getTool(slug: Slug): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

/* ---------------------------------- search ---------------------------------- */

export interface SearchResult {
  kind:
    | "administrative"
    | "destination"
    | "place"
    | "food"
    | "business"
    | "service"
    | "provider"
    | "guide"
    | "tool";
  slug: Slug;
  name: string;
  summary?: string | undefined;
}

interface SearchableEntity {
  slug: Slug;
  name: string;
  summary?: string;
}

function appendMatches(
  results: SearchResult[],
  kind: SearchResult["kind"],
  entities: readonly SearchableEntity[],
  queryLowercase: string,
): void {
  for (const entity of entities) {
    const isMatch =
      entity.name.toLowerCase().includes(queryLowercase) ||
      (entity.summary?.toLowerCase().includes(queryLowercase) ?? false);
    if (!isMatch) continue;
    results.push({
      kind,
      slug: entity.slug,
      name: entity.name,
      summary: entity.summary,
    });
  }
}

/** Simple static, case-insensitive name/summary search. No search service. */
export function searchContent(query: string, limit = 20): SearchResult[] {
  const queryLowercase = query.trim().toLowerCase();
  if (queryLowercase.length === 0) return [];
  const results: SearchResult[] = [];
  appendMatches(results, "administrative", administrativeAll, queryLowercase);
  appendMatches(results, "destination", destinations, queryLowercase);
  appendMatches(results, "place", places, queryLowercase);
  appendMatches(results, "food", foods, queryLowercase);
  appendMatches(results, "business", businesses, queryLowercase);
  appendMatches(results, "service", services, queryLowercase);
  appendMatches(results, "provider", providers, queryLowercase);
  appendMatches(results, "guide", guides, queryLowercase);
  appendMatches(results, "tool", tools, queryLowercase);
  return results.slice(0, limit);
}
