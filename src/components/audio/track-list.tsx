"use client";

import Image from "next/image";
import { useAudioPlayer, useAlbumCover } from "@/contexts/audio-player-context";
import type { Album } from "@/data/albums";

export function TrackList({ album }: { album: Album }) {
  const { current, isPlaying, playTrack } = useAudioPlayer();
  const cover = useAlbumCover(album);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
      <div className="flex flex-col gap-6 border-b border-white/10 p-6 sm:flex-row sm:items-center">
        <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:mx-0">
          <Image src={cover} alt={`${album.title} cover`} fill className="object-cover" sizes="192px" />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80">{album.year}</p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-50">{album.title}</h2>
          <p className="mt-2 text-sm text-zinc-400">{album.artist}</p>
          {album.description && (
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">{album.description}</p>
          )}
          {album.bandcampUrl && (
            <a
              href={album.bandcampUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm text-amber-300 transition hover:text-amber-200"
            >
              Listen on Bandcamp →
            </a>
          )}
        </div>
      </div>

      <ol className="divide-y divide-white/5">
        {album.tracks.map((track) => {
          const active = current?.track.id === track.id && current.album.slug === album.slug;

          return (
            <li key={track.id}>
              <button
                type="button"
                onClick={() => playTrack(album, track)}
                className={`flex w-full items-center gap-4 px-6 py-4 text-left transition hover:bg-white/5 ${
                  active ? "bg-amber-500/10" : ""
                }`}
              >
                <span className="w-8 text-sm text-zinc-500">{track.number}</span>
                <span className={`flex-1 text-sm ${active ? "text-amber-100" : "text-zinc-200"}`}>
                  {track.title}
                </span>
                <span className="text-xs text-zinc-500">
                  {active && isPlaying ? "Now playing" : "Play"}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
