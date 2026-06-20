import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
        )}
      </header>
      <div className="mt-10">{children}</div>
    </div>
  );
}
