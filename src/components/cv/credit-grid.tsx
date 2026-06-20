import type { Credit } from "@/data/cv";

export function CreditGrid({ items }: { items: Credit[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={`${item.title}-${item.note ?? ""}`}
          className="rounded-xl border border-white/10 bg-black/20 p-4"
        >
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-zinc-100 transition hover:text-amber-200"
            >
              {item.title}
            </a>
          ) : (
            <p className="font-medium text-zinc-100">{item.title}</p>
          )}
          {item.note && <p className="mt-2 text-sm leading-6 text-zinc-400">{item.note}</p>}
        </li>
      ))}
    </ul>
  );
}
