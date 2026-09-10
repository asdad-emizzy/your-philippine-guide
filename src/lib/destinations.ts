import sheet1 from "@/assets/dest-sheet-1.jpg";
import sheet2 from "@/assets/dest-sheet-2.jpg";
import sheet3 from "@/assets/dest-sheet-3.jpg";
import sheet4 from "@/assets/dest-sheet-4.jpg";
import sheet5 from "@/assets/dest-sheet-5.jpg";
import sheet6 from "@/assets/dest-sheet-6.jpg";

export type Panel = 0 | 1 | 2 | 3;

export interface Destination {
  name: string;
  provinceOrArea: string;
  description: string;
  image: string;
  panel: Panel;
  slug: string;
  exploreLabel: string;
}

export const PANEL_CLASSES = ["image-panel-one", "image-panel-two", "image-panel-three", "image-panel-four"] as const;

const d = (
  name: string,
  provinceOrArea: string,
  description: string,
  sheet: string,
  panel: Panel,
): Destination => ({
  name,
  provinceOrArea,
  description,
  image: sheet,
  panel,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  exploreLabel: `Explore ${name}`,
});

export const destinations: Destination[] = [
  // Luzon, Visayas, Mindanao & Palawan — discovery library for the homepage hero
  d("El Nido", "Palawan", "Crystal-clear waters, dramatic limestone cliffs, and island adventures await.", sheet1, 0),
  d("Chocolate Hills", "Bohol", "An iconic Philippine landscape surrounded by nature, culture, and local stories.", sheet1, 1),
  d("Mayon Volcano", "Albay", "Discover Bicolano culture, local food, and one of the Philippines' most iconic volcanic landscapes.", sheet1, 2),
  d("Banaue Rice Terraces", "Ifugao", "Walk ancient green terraces shaped by generations of Cordilleran communities.", sheet1, 3),
  d("Boracay", "Aklan", "Powder-soft white sand, calm blue water, and brilliant sunsets by the shore.", sheet2, 0),
  d("Siargao", "Surigao del Norte", "Surf breaks, palm roads, rock pools, and slow island mornings.", sheet2, 1),
  d("Vigan", "Ilocos Sur", "Walk through a beautifully preserved heritage city shaped by centuries of Filipino history.", sheet2, 2),
  d("Kawasan Falls", "Cebu", "Turquoise cascades, jungle trails, and refreshing canyon adventures in the south of Cebu.", sheet2, 3),
  d("Sagada", "Mountain Province", "Misty pine forests, limestone caves, and quiet mountain mornings in the Cordillera.", sheet3, 0),
  d("Baguio City", "Benguet", "Cool highland air, pine-covered hills, creative food spots, and colorful hillside views.", sheet3, 1),
  d("Taal Volcano", "Batangas", "A lake within an island within a lake — one of the country's most remarkable views from Tagaytay ridge.", sheet3, 2),
  d("Davao City", "Davao del Sur", "Durian, island beaches, and the towering presence of Mount Apo at the heart of Mindanao.", sheet3, 3),
  d("Coron", "Palawan", "Hidden lagoons, shipwreck dives, and limestone islands rising from impossibly clear water.", sheet4, 0),
  d("Puerto Princesa", "Palawan", "Paddle into a world-famous underground river beneath ancient limestone and jungle.", sheet4, 1),
  d("Batanes", "Ivatan Islands", "Rolling green hills, stone lighthouses, and honest, windswept beauty at the northern tip.", sheet4, 2),
  d("Hundred Islands", "Pangasinan", "A hundred green islets scattered across calm blue water — perfect for a day of island hopping.", sheet4, 3),
  d("Cebu City", "Cebu", "Heritage churches, Magellan's Cross, and the gateway to the Visayas' islands and falls.", sheet5, 0),
  d("Camiguin", "Northern Mindanao", "A small island of white sandbars, hot springs, and volcanoes rising from turquoise seas.", sheet5, 1),
  d("Siquijor", "Central Visayas", "Waterfall rope swings, old churches, and the quiet magic of the island of fire.", sheet5, 2),
  d("Apo Island", "Dumaguete, Negros Oriental", "Snorkel with sea turtles over coral gardens in one of the country's oldest marine sanctuaries.", sheet5, 3),
  d("Intramuros", "Manila", "Cobblestone streets, fort walls, and centuries of Filipino history inside the Walled City.", sheet6, 0),
  d("Pink Beach", "Zamboanga City", "Rare blush-colored sand and colorful vintas sailing off one of Mindanao's most surprising shores.", sheet6, 1),
  d("La Union", "Ilocos Region", "Friendly surf breaks, beach cafés, and golden sunsets on the country's favorite weekend coast.", sheet6, 2),
  d("Pagudpud", "Ilocos Norte", "Long white beaches and hillside wind turbines on the northern edge of Luzon.", sheet6, 3),
];

const STORAGE_KEY = "pinoylokal:lastDestination";

/** Pick a destination index for a fresh page load, avoiding the last one shown this session. */
export function pickInitialIndex(): number {
  if (destinations.length < 2) return 0;
  let last = -1;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw != null) last = Number.parseInt(raw, 10);
  } catch {
    /* sessionStorage unavailable */
  }
  let next = Math.floor(Math.random() * destinations.length);
  if (next === last) next = (next + 1 + Math.floor(Math.random() * (destinations.length - 1))) % destinations.length;
  try {
    sessionStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    /* sessionStorage unavailable */
  }
  return next;
}

export function rememberIndex(index: number) {
  try {
    sessionStorage.setItem(STORAGE_KEY, String(index));
  } catch {
    /* sessionStorage unavailable */
  }
}
