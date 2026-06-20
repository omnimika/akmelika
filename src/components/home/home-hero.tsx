"use client";

import Link from "next/link";
import { albums } from "@/data/albums";
import { highlights, profile } from "@/data/cv";
import { useAudioPlayer } from "@/contexts/audio-player-context";
import { StatGrid } from "@/components/cv/stat-grid";
import { AlbumCard } from "@/components/audio/album-card";

export function HomeHero() {
  const featuredAlbum = albums[0];
  const { playAlbum } = useAudioPlayer();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-400/80">akmelika.com</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{profile.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => playAlbum(featuredAlbum)}
              className="rounded-full bg-amber-500 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-amber-400"
            >
              Listen to {featuredAlbum.title} ({featuredAlbum.year})
            </button>
            <Link
              href="/experience"
              className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/5"
            >
              View experience
            </Link>
            <a
              href="/CV.pdf"
              className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/5"
            >
              Download CV
            </a>
          </div>
        </div>

        <AlbumCard album={featuredAlbum} />
      </section>

      <section className="mt-16">
        <StatGrid items={highlights} />
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {[
          { href: "/experience", title: "Experience", copy: "Ypsilon, venues, labels, and underground culture." },
          { href: "/studio", title: "Studio", copy: "Recording and production credits across Russian independent music." },
          { href: "/composer", title: "Composer", copy: "Documentary, advertising, and film composition work." },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-white/10 bg-zinc-900/30 p-6 transition hover:border-amber-500/30 hover:bg-zinc-900/50"
          >
            <h2 className="text-lg font-medium text-zinc-100">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.copy}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
