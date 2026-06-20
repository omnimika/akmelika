import Link from "next/link";
import { profile } from "@/data/cv";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.domain}
        </p>
        <div className="flex gap-4">
          <Link href="/music" className="transition hover:text-zinc-300">
            Music
          </Link>
          <Link href="/contact" className="transition hover:text-zinc-300">
            Contact
          </Link>
          <a href="/CV.pdf" className="transition hover:text-zinc-300">
            CV (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
