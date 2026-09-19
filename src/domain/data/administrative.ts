/**
 * Administrative geography data (static, Phase 1A).
 * Only official Philippine administrative facts are recorded here.
 * Coverage is intentionally limited to locations referenced by existing content.
 */
import type { Barangay, CityMunicipality, Province, Region } from "../types";

export const regions: Region[] = [
  { kind: "region", slug: "ncr", name: "National Capital Region", designation: "NCR", islandGroup: "luzon" },
  { kind: "region", slug: "car", name: "Cordillera Administrative Region", designation: "CAR", islandGroup: "luzon" },
  { kind: "region", slug: "ilocos-region", name: "Ilocos Region", designation: "Region I", islandGroup: "luzon" },
  { kind: "region", slug: "cagayan-valley", name: "Cagayan Valley", designation: "Region II", islandGroup: "luzon" },
  { kind: "region", slug: "central-luzon", name: "Central Luzon", designation: "Region III", islandGroup: "luzon" },
  { kind: "region", slug: "calabarzon", name: "Calabarzon", designation: "Region IV-A", islandGroup: "luzon" },
  { kind: "region", slug: "mimaropa", name: "Mimaropa", designation: "Region IV-B", islandGroup: "luzon" },
  { kind: "region", slug: "bicol-region", name: "Bicol Region", designation: "Region V", islandGroup: "luzon" },
  { kind: "region", slug: "western-visayas", name: "Western Visayas", designation: "Region VI", islandGroup: "visayas" },
  { kind: "region", slug: "central-visayas", name: "Central Visayas", designation: "Region VII", islandGroup: "visayas" },
  {
    kind: "region",
    slug: "zamboanga-peninsula",
    name: "Zamboanga Peninsula",
    designation: "Region IX",
    islandGroup: "mindanao",
  },
  {
    kind: "region",
    slug: "northern-mindanao",
    name: "Northern Mindanao",
    designation: "Region X",
    islandGroup: "mindanao",
  },
  { kind: "region", slug: "davao-region", name: "Davao Region", designation: "Region XI", islandGroup: "mindanao" },
  { kind: "region", slug: "caraga", name: "Caraga", designation: "Region XIII", islandGroup: "mindanao" },
];

export const provinces: Province[] = [
  { kind: "province", slug: "ilocos-norte", name: "Ilocos Norte", regionSlug: "ilocos-region" },
  { kind: "province", slug: "ilocos-sur", name: "Ilocos Sur", regionSlug: "ilocos-region" },
  { kind: "province", slug: "la-union", name: "La Union", regionSlug: "ilocos-region" },
  { kind: "province", slug: "pangasinan", name: "Pangasinan", regionSlug: "ilocos-region" },
  { kind: "province", slug: "batanes", name: "Batanes", regionSlug: "cagayan-valley" },
  { kind: "province", slug: "benguet", name: "Benguet", regionSlug: "car" },
  { kind: "province", slug: "mountain-province", name: "Mountain Province", regionSlug: "car" },
  { kind: "province", slug: "ifugao", name: "Ifugao", regionSlug: "car" },
  { kind: "province", slug: "batangas", name: "Batangas", regionSlug: "calabarzon" },
  { kind: "province", slug: "cavite", name: "Cavite", regionSlug: "calabarzon" },
  { kind: "province", slug: "palawan", name: "Palawan", regionSlug: "mimaropa" },
  { kind: "province", slug: "albay", name: "Albay", regionSlug: "bicol-region" },
  { kind: "province", slug: "aklan", name: "Aklan", regionSlug: "western-visayas" },
  { kind: "province", slug: "bohol", name: "Bohol", regionSlug: "central-visayas" },
  { kind: "province", slug: "cebu", name: "Cebu", regionSlug: "central-visayas" },
  { kind: "province", slug: "siquijor", name: "Siquijor", regionSlug: "central-visayas" },
  { kind: "province", slug: "negros-oriental", name: "Negros Oriental", regionSlug: "central-visayas" },
  { kind: "province", slug: "camiguin", name: "Camiguin", regionSlug: "northern-mindanao" },
  { kind: "province", slug: "davao-del-sur", name: "Davao del Sur", regionSlug: "davao-region" },
  { kind: "province", slug: "surigao-del-norte", name: "Surigao del Norte", regionSlug: "caraga" },
];

export const citiesMunicipalities: CityMunicipality[] = [
  { kind: "city", slug: "manila", name: "Manila", regionSlug: "ncr" },
  { kind: "city", slug: "baguio-city", name: "Baguio City", regionSlug: "car" },
  { kind: "municipality", slug: "sagada", name: "Sagada", provinceSlug: "mountain-province", regionSlug: "car" },
  { kind: "municipality", slug: "banaue", name: "Banaue", provinceSlug: "ifugao", regionSlug: "car" },
  { kind: "city", slug: "vigan", name: "Vigan", provinceSlug: "ilocos-sur", regionSlug: "ilocos-region" },
  { kind: "municipality", slug: "pagudpud", name: "Pagudpud", provinceSlug: "ilocos-norte", regionSlug: "ilocos-region" },
  {
    kind: "city",
    slug: "alaminos",
    name: "Alaminos",
    provinceSlug: "pangasinan",
    regionSlug: "ilocos-region",
  },
  { kind: "city", slug: "tagaytay", name: "Tagaytay", provinceSlug: "cavite", regionSlug: "calabarzon" },
  { kind: "municipality", slug: "talisay-batangas", name: "Talisay", provinceSlug: "batangas", regionSlug: "calabarzon" },
  { kind: "municipality", slug: "el-nido", name: "El Nido", provinceSlug: "palawan", regionSlug: "mimaropa" },
  { kind: "municipality", slug: "coron", name: "Coron", provinceSlug: "palawan", regionSlug: "mimaropa" },
  { kind: "city", slug: "puerto-princesa", name: "Puerto Princesa", regionSlug: "mimaropa" },
  { kind: "city", slug: "legazpi", name: "Legazpi", provinceSlug: "albay", regionSlug: "bicol-region" },
  { kind: "municipality", slug: "malay", name: "Malay", provinceSlug: "aklan", regionSlug: "western-visayas" },
  { kind: "city", slug: "cebu-city", name: "Cebu City", regionSlug: "central-visayas" },
  { kind: "municipality", slug: "badian", name: "Badian", provinceSlug: "cebu", regionSlug: "central-visayas" },
  {
    kind: "city",
    slug: "dumaguete",
    name: "Dumaguete",
    provinceSlug: "negros-oriental",
    regionSlug: "central-visayas",
  },
  { kind: "city", slug: "zamboanga-city", name: "Zamboanga City", regionSlug: "zamboanga-peninsula" },
  { kind: "city", slug: "davao-city", name: "Davao City", regionSlug: "davao-region" },
  {
    kind: "municipality",
    slug: "general-luna",
    name: "General Luna",
    provinceSlug: "surigao-del-norte",
    regionSlug: "caraga",
  },
];

/** No verified barangay-level data has been collected yet. */
export const barangays: Barangay[] = [];
