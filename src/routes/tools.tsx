import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calculator, Car, CircleDollarSign, HeartPulse, Plane, Repeat2 } from "lucide-react";

export const Route = createFileRoute("/tools")({
  head: () => ({ meta: [
    { title: "Useful Tools for Everyday Filipinos — PinoyLokal" },
    { name: "description", content: "Explore free PinoyLokal calculators and converters for money, travel, health, mileage, and remittance planning." },
    { property: "og:title", content: "Useful Tools for Everyday Filipinos — PinoyLokal" },
    { property: "og:description", content: "Helpful calculators and converters for everyday Filipino life." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ToolsPage,
});

function ToolsPage() {
  const tools = [[CircleDollarSign,"Peso Converter","Convert PHP to major world currencies."],[Calculator,"Loan Calculator","Estimate monthly repayments and interest."],[Car,"Mileage Calculator","Plan fuel use and travel costs."],[HeartPulse,"BMI Calculator","Check a quick body mass estimate."],[Plane,"Remittance Calculator","Estimate transfer totals and fees."],[Repeat2,"Unit Converter","Convert common length, weight, and temperature units."]] as const;
  return <main className="min-h-screen bg-background px-4 py-10 sm:px-7"><div className="mx-auto max-w-6xl"><Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-secondary"><ArrowLeft className="size-4" /> Back to PinoyLokal</Link><div className="mt-10 max-w-3xl"><p className="text-xs font-extrabold uppercase text-ember">PinoyLokal Tools</p><h1 className="mt-3 text-4xl font-extrabold text-primary sm:text-6xl">Useful Tools for Everyday Filipinos</h1><p className="mt-4 text-lg text-muted-foreground">Simple calculators and converters for daily decisions. This first release is a visual preview.</p></div><section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{tools.map(([Icon,title,desc]) => <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm"><span className="grid size-12 place-items-center rounded-xl bg-accent text-secondary"><Icon className="size-6" /></span><h2 className="mt-5 text-xl font-bold text-primary">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p><span className="mt-5 inline-block rounded-full bg-muted px-3 py-1 text-xs font-bold text-primary">Coming soon</span></article>)}</section></div></main>;
}