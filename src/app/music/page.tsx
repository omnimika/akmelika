import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { SectionBlock } from "@/components/cv/section-block";
import { AlbumCard } from "@/components/audio/album-card";
import { albums } from "@/data/albums";
import { bandReleases } from "@/data/cv";

export const metadata: Metadata = {
  title: "Music",
  description: "AkmelikA discography and releases.",
};

export default function MusicPage() {
  return (
    <PageShell
      eyebrow="Discography"
      title="Music"
      description="Band releases, catalogue, and listening room. The site-wide player continues across every page."
    >
      <div className="space-y-8">
        <SectionBlock title="Available Now">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {albums.map((album) => (
              <AlbumCard key={album.slug} album={album} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Full Discography">
          <ul className="space-y-3">
            {bandReleases.map((release) => (
              <li
                key={`${release.year}-${release.title}`}
                className="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm text-zinc-500">{release.year}</p>
                  <p className="mt-1 font-medium text-zinc-100">{release.title}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-zinc-400">
                    {release.status.replace("-", " ")}
                  </span>
                  {"slug" in release && release.slug && (
                    <Link
                      href={`/music/${release.slug}`}
                      className="text-sm text-amber-300 transition hover:text-amber-200"
                    >
                      Open album
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </PageShell>
  );
}
