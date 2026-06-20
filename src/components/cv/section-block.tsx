import type { ReactNode } from "react";

export function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
      <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
