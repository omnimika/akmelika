import type { Stat } from "@/data/cv";

export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 text-center"
        >
          <p className="text-2xl font-semibold text-amber-300">{item.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
