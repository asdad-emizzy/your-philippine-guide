import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Bot, BriefcaseBusiness, Calculator, Car, ChevronLeft, ChevronRight, CircleDollarSign,
  Facebook, HeartPulse, Instagram, Landmark, Map, MapPin, Menu, MessageCircle,
  Phone, Plane, Search, Send, Store, Sun, Theater, Utensils, Wrench, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { destinations, PANEL_CLASSES, pickInitialIndex, rememberIndex } from "@/lib/destinations";
import destinationImage from "@/assets/destinations-grid.jpg";
import popularImage from "@/assets/popular-grid.jpg";
import sponsoredImage from "@/assets/sponsored-chicken.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "PinoyLokal — Your Local Guide to the Philippines" },
    { name: "description", content: "Discover Filipino food, places, local services, practical guides, culture, travel, and everyday tools." },
    { property: "og:title", content: "PinoyLokal — Your Local Guide to the Philippines" },
    { property: "og:description", content: "Discover the best of Filipino life, from local places and food to trusted providers and useful tools." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

const nav = ["Home", "Food", "Places", "Local", "How-To", "Money", "Travel", "Culture", "Providers"];
const HERO_HEIGHT = "min-h-[560px] sm:min-h-[540px]";

const categories = [
  [Utensils, "Food", "Recipes & cuisine"], [MapPin, "Places", "Destinations"], [Store, "Local", "Businesses"],
  [Wrench, "How-To", "Practical guides"], [CircleDollarSign, "Money", "Costs & savings"], [Car, "Travel", "Trips & transport"],
  [Theater, "Culture", "Traditions"], [BriefcaseBusiness, "Providers", "Skilled locals"], [Calculator, "Tools", "Everyday helpers"],
] as const;

const popular = [
  ["Filipino recipe", "Chicken adobo, the comforting classic", "Food", "image-panel-one"],
  ["Philippine travel guide", "Island-hop Palawan with confidence", "Travel", "image-panel-two"],
  ["Practical How-To", "Simple fixes for everyday Filipino homes", "How-To", "image-panel-three"],
  ["Filipino culture", "A joyful guide to local festivals", "Culture", "image-panel-four"],
] as const;

const placeCards = [
  ["Baguio", "Cordillera", "image-panel-one"], ["Cebu", "Visayas", "image-panel-four"], ["Siargao", "Mindanao", "image-panel-two"],
  ["Tagaytay", "Luzon", "image-panel-four"], ["Bohol", "Visayas", "image-panel-three"], ["Palawan", "MIMAROPA", "image-panel-two"],
] as const;

function Brand() {
  return <span className="flex shrink-0 items-center gap-2"><span className="grid size-9 place-items-center rounded-full bg-sun text-sun-foreground shadow-sun"><Sun className="size-6" /></span><span className="font-display text-lg font-extrabold text-primary">Pinoy<span className="text-ember">Lokal</span></span></span>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const [destIndex, setDestIndexState] = useState<number>(() => (typeof window === "undefined" ? 0 : pickInitialIndex()));
  const prevIndexRef = useRef<number | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const setDestIndex = (next: number) => {
    const wrapped = (next + destinations.length) % destinations.length;
    prevIndexRef.current = destIndex;
    setPrevIndex(destIndex);
    setDestIndexState(wrapped);
    rememberIndex(wrapped);
  };

  const current = destinations[destIndex] ?? destinations[0];
  const previous = prevIndex != null ? destinations[prevIndex] : null;
  void prevIndexRef;

  useEffect(() => {
    const strip = thumbStripRef.current;
    const active = strip?.querySelector<HTMLElement>("[data-active='true']");
    active?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [destIndex]);

  const handleDemo = (message: string) => setNotice(message);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:flex sm:px-7">
        <a href="#top" aria-label="PinoyLokal home"><Brand /></a>
        <nav className="ml-4 hidden min-w-0 items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replace("-", "")}`} className="rounded-full px-2.5 py-2 text-xs font-semibold text-primary/75 transition-colors hover:bg-accent hover:text-primary">{item}</a>)}
          <Link to="/tools" className="rounded-full px-2.5 py-2 text-xs font-semibold text-primary/75 transition-colors hover:bg-accent hover:text-primary">Tools</Link>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button onClick={() => document.getElementById("main-search")?.focus()} aria-label="Focus search" className="grid size-9 place-items-center rounded-full bg-card text-primary ring-1 ring-border transition-colors hover:bg-accent"><Search className="size-4" /></button>
          <Button variant="coastal" size="sm" className="hidden sm:inline-flex" onClick={() => handleDemo("Listing submissions are coming soon.")}>+ Add Listing</Button>
          <Button variant="glass" size="icon" className="xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-4 py-4 xl:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-1 sm:grid-cols-4">{nav.map((item) => <a key={item} href={`#${item.toLowerCase().replace("-", "")}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-accent">{item}</a>)}<Link to="/tools" className="rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-accent">Tools</Link></div></nav>}
    </header>

    <main id="top" className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-7">
      <section className="pt-5 sm:pt-7" aria-labelledby="hero-title">
        <div className="relative min-h-[560px] overflow-hidden rounded-[28px] shadow-coastal sm:min-h-[540px]">
          <img src={heroImage} alt="Aerial view of turquoise lagoons and limestone islands in Palawan" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/45 to-transparent" />
          <div className="relative flex min-h-[560px] max-w-2xl flex-col justify-center p-6 pb-28 sm:min-h-[540px] sm:p-12 sm:pb-32">
            <p className="mb-3 text-xs font-extrabold uppercase text-sun">Discover the Philippines</p>
            <h1 id="hero-title" className="max-w-xl text-4xl font-extrabold leading-tight text-primary-foreground sm:text-6xl">Today, Explore <span className="text-sun">{featuredName}</span></h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg">{featuredCopy}</p>
            <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary-foreground"><MapPin className="size-4" />{featuredName}</p>
            <div className="mt-6 flex flex-wrap gap-3"><Button variant="sun" size="pill" onClick={() => handleDemo(`Exploring ${featuredName}.`)}>Explore <ArrowRight /></Button><Button variant="glass" size="pill" onClick={() => handleDemo("Destination guides are coming soon.")}>See Guide</Button></div>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-end gap-2 overflow-x-auto sm:inset-x-8">
            {destinations.slice(0, 6).map(([name], i) => <button key={name} onClick={() => handleDemo(`${name} preview selected.`)} className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border-2 ${name === featuredName ? "border-sun" : "border-primary-foreground/70"}`} aria-label={`Preview ${name}`}><img src={destinationImage} alt="" width={1920} height={1024} className={`h-full object-cover ${["image-panel-two","image-panel-three","image-panel-four","image-panel-one"][i%4]}`} /><span className="absolute inset-x-0 bottom-0 bg-primary/75 px-1 py-0.5 text-[9px] font-bold text-primary-foreground">{name.split(",")[0]}</span></button>)}
            <span className="ml-auto hidden rounded-full bg-surface-glass px-3 py-2 text-xs font-bold text-primary sm:block">1 of 12</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-1 pt-5" aria-label="Search PinoyLokal">
        <form onSubmit={(e) => { e.preventDefault(); handleDemo(query ? `Searching for “${query}” — demo only.` : "Type something to search."); }} className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-2.5 shadow-coastal sm:flex-row">
          <label className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl bg-muted px-4"><Search className="size-5 shrink-0 text-secondary" /><input id="main-search" value={query} onChange={(e) => setQuery(e.target.value)} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="What are you looking for? Try chicken adobo, Baguio travel, electrician near me…" /></label>
          <Button type="submit" variant="coastal" size="pill">Search</Button>
        </form>
        {notice && <button onClick={() => setNotice("")} className="mt-2 w-full rounded-xl bg-accent px-4 py-2 text-center text-xs font-semibold text-primary" aria-label="Dismiss notice">{notice}</button>}
      </section>

      <SectionHeader title="Explore PinoyLokal" subtitle="Everything local, useful, and proudly Filipino." />
      <section id="food" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9" aria-label="Categories">
        {categories.map(([Icon, title, desc]) => <button key={title} onClick={() => handleDemo(`${title} browsing is coming soon.`)} className="group rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-secondary"><span className="grid size-10 place-items-center rounded-xl bg-accent text-secondary transition group-hover:bg-secondary group-hover:text-secondary-foreground"><Icon className="size-5" /></span><h3 className="mt-3 text-sm font-bold text-primary">{title}</h3><p className="mt-1 text-xs leading-4 text-muted-foreground">{desc}</p></button>)}
      </section>

      <section className="mt-10 overflow-hidden rounded-3xl bg-primary text-primary-foreground" aria-labelledby="sponsor-title">
        <div className="grid md:grid-cols-[1.2fr_.8fr]">
          <div className="p-7 sm:p-10"><span className="rounded-full bg-sun px-3 py-1 text-[10px] font-extrabold uppercase text-sun-foreground">Sponsored · Placeholder advertisement</span><p className="mt-6 text-sm font-bold uppercase text-sun">Jolly Meals Campaign</p><h2 id="sponsor-title" className="mt-2 text-3xl font-extrabold sm:text-4xl">Sarap ng Pagsasama!</h2><p className="mt-3 max-w-xl text-primary-foreground/80">Share crispy fried chicken and brighter moments with the whole family. Sample campaign content for a future PinoyLokal partner.</p><Button variant="sun" size="pill" className="mt-6" onClick={() => handleDemo("This is a placeholder advertisement.")}>Learn More <ArrowRight /></Button></div>
          <img src={sponsoredImage} alt="Family sharing crispy fried chicken" loading="lazy" width={1280} height={768} className="h-full min-h-64 w-full object-cover" />
        </div>
      </section>

      <SectionHeader title="Popular This Week" subtitle="Fresh reads for life around the Philippines." />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Popular content">
        {popular.map(([label, title, type, pos]) => <article key={label} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-coastal"><div className="h-44 overflow-hidden"><img src={popularImage} alt={label} loading="lazy" width={1920} height={1024} className={`h-full object-cover transition duration-500 group-hover:scale-[1.03] ${pos}`} /></div><div className="p-5"><p className="text-xs font-extrabold uppercase text-ember">{type}</p><h3 className="mt-2 text-lg font-bold text-primary">{title}</h3><button className="mt-4 flex items-center gap-1 text-sm font-bold text-secondary" onClick={() => handleDemo(`${label} article preview.`)}>Read story <ArrowRight className="size-4" /></button></div></article>)}
      </section>

      <SectionHeader title="Find Local Skilled Providers" subtitle="A simple directory for discovering people who can help nearby." />
      <section id="providers" className="grid gap-4 lg:grid-cols-3" aria-label="Provider directory">
        {[
          ["Mario Dela Cruz", "Electrician", "Cebu City", ["Home wiring", "Repairs"], "@marioworks"],
          ["Ana Reyes", "Aircon Technician", "Quezon City", ["Cleaning", "Installation"], "@anacool.ph"],
          ["Paolo Santos", "Carpenter", "Davao City", ["Furniture", "Renovation"], "@gawangpaolo"],
        ].map(([name, role, location, tags, handle]) => <article key={name as string} className="rounded-2xl border border-border bg-card p-5 shadow-sm"><div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent font-display font-bold text-primary">{(name as string).split(" ").map(x => x[0]).slice(0,2).join("")}</span><div className="min-w-0"><h3 className="truncate text-base font-bold text-primary">{name as string}</h3><p className="text-sm font-semibold text-secondary">{role as string}</p><p className="mt-0.5 text-xs text-muted-foreground">{location as string}</p></div></div><div className="mt-4 flex flex-wrap gap-2">{(tags as string[]).map(t => <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-primary">{t}</span>)}</div><div className="mt-5 flex items-center gap-2 border-t border-border pt-4"><a href="tel:+630000000000" aria-label={`Call ${name}`} className="grid size-9 place-items-center rounded-full bg-accent text-primary"><Phone className="size-4" /></a><a href="viber://chat" aria-label={`Viber ${name}`} className="grid size-9 place-items-center rounded-full bg-accent text-primary"><MessageCircle className="size-4" /></a><a href="https://wa.me/630000000000" target="_blank" rel="noreferrer" aria-label={`WhatsApp ${name}`} className="grid size-9 place-items-center rounded-full bg-accent text-primary"><Send className="size-4" /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" className="ml-auto text-xs font-semibold text-secondary">{handle as string}</a></div></article>)}
      </section>
      <div className="mt-4"><Button variant="coastal" size="pill" onClick={() => handleDemo("Listing submissions are coming soon.")}>+ Add Your Listing</Button></div>

      <SectionHeader title="Featured Destinations" subtitle="Six local favorites for your next trip." />
      <section id="places" className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6" aria-label="Featured destinations">
        {placeCards.map(([place, region, pos]) => <article key={place} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><div className="h-36 overflow-hidden"><img src={destinationImage} alt={`${place} scenic view`} loading="lazy" width={1920} height={1024} className={`h-full object-cover transition duration-500 group-hover:scale-[1.03] ${pos}`} /></div><div className="p-3"><h3 className="text-sm font-bold text-primary">{place}</h3><p className="text-xs text-muted-foreground">{region}</p></div></article>)}
      </section>

      <section className="mt-12 grid gap-6 overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-coastal lg:grid-cols-[.8fr_1.2fr] lg:p-9" aria-labelledby="ai-title">
        <div><span className="inline-flex items-center gap-2 rounded-full bg-surface-glass px-3 py-1 text-xs font-extrabold uppercase text-primary"><Bot className="size-4 text-secondary" /> PinoyLokal AI</span><h2 id="ai-title" className="mt-4 text-3xl font-extrabold">Ask PinoyLokal</h2><p className="mt-3 max-w-lg text-primary-foreground/80">Get quick, helpful answers about Filipino life, food, places, travel and more.</p></div>
        <div className="rounded-2xl bg-card p-4 text-foreground"><div className="flex gap-2"><input className="min-w-0 flex-1 rounded-xl border border-border bg-muted px-4 text-sm outline-none focus:ring-2 focus:ring-secondary" placeholder="Ask anything about the Philippines..." /><Button variant="sun" size="icon" aria-label="Ask" onClick={() => handleDemo("PinoyLokal AI is a UI preview for now.")}><Send /></Button></div><p className="mt-4 text-xs font-bold uppercase text-muted-foreground">Suggested questions</p><div className="mt-2 grid gap-2 sm:grid-cols-2">{["Best beaches in the Philippines?", "What can I cook with chicken?", "How much does a trip to Bohol cost?", "What can I do in Baguio?"].map(q => <button key={q} onClick={() => handleDemo(`Selected: ${q}`)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-left text-xs font-semibold text-primary hover:bg-accent">{q}</button>)}</div></div>
      </section>

      <SectionHeader title="Useful Tools for Everyday Filipinos" subtitle="Calculate, convert, and get quick answers with our free tools." />
      <section id="tools" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label="Everyday tools">
        {[[CircleDollarSign,"Peso Converter"],[Calculator,"Loan Calculator"],[Car,"Mileage Calculator"],[HeartPulse,"BMI Calculator"],[Plane,"Remittance Calculator"],[Map,"More Tools"]].map(([Icon, title]) => <Link key={title as string} to="/tools" className="rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:-translate-y-1 hover:border-secondary"><span className="grid size-10 place-items-center rounded-xl bg-accent text-secondary"><Icon className="size-5" /></span><h3 className="mt-3 text-sm font-bold text-primary">{title as string}</h3></Link>)}
      </section>

      <section className="mt-12 overflow-hidden rounded-3xl bg-sun p-7 text-sun-foreground sm:p-10"><div className="max-w-2xl"><h2 className="text-3xl font-extrabold">Be Part of PinoyLokal</h2><p className="mt-3 text-sun-foreground/75">List your business or service and reach more Filipinos in your community.</p><Button variant="coastal" size="pill" className="mt-6" onClick={() => handleDemo("Listing submissions are coming soon.")}>+ Add Your Listing</Button></div></section>
    </main>

    <footer className="border-t border-border bg-card"><div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-7"><div className="flex flex-col gap-6 md:flex-row md:items-center"><Brand /><nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-primary/70">{["About","Contact","Write for Us","Advertise","Privacy","Terms"].map(x => <a key={x} href="#" onClick={(e) => {e.preventDefault(); handleDemo(`${x} page is coming soon.`)}} className="hover:text-secondary">{x}</a>)}</nav><div className="flex gap-2 md:ml-auto"><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-9 place-items-center rounded-full bg-muted text-primary"><Facebook className="size-4" /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-9 place-items-center rounded-full bg-muted text-primary"><Instagram className="size-4" /></a><span className="grid h-9 place-items-center rounded-full bg-muted px-3 text-xs font-bold text-primary">🇵🇭 PH</span></div></div><div className="mt-7 border-t border-border pt-5 text-xs text-muted-foreground">© 2026 PinoyLokal. Your Local Guide to the Philippines.</div></div></footer>
  </div>;
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="mb-5 mt-12"><h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{subtitle}</p></div>;
}