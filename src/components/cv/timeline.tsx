import type { TimelineEntry } from "@/data/cv";

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <article
          key={`${item.period}-${item.title}`}
          className="grid gap-2 border-l border-amber-500/30 pl-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.period}</p>
          <div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-zinc-100 transition hover:text-amber-200"
              >
                {item.title}
              </a>
            ) : (
              <h3 className="text-lg font-medium text-zinc-100">{item.title}</h3>
            )}
            <p className="mt-1 text-sm text-amber-200/80">{item.role}</p>
            {item.description && (
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
