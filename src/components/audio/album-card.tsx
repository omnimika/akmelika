"use client";

import Link from "next/link";
import Image from "next/image";
import { useAudioPlayer, useAlbumCover } from "@/contexts/audio-player-context";
import type { Album } from "@/data/albums";

export function AlbumCard({ album }: { album: Album }) {
  const cover = useAlbumCover(album);
  const { playAlbum } = useAudioPlayer();

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition hover:border-amber-500/30">
      <div className="relative aspect-square">
        <Image src={cover} alt={`${album.title} cover`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80">{album.year}</p>
          <h3 className="mt-2 text-xl font-semibold text-zinc-50">{album.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{album.tracks.length} tracks</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => playAlbum(album)}
            className="rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-500/30"
          >
            Play album
          </button>
          <Link
            href={`/music/${album.slug}`}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
