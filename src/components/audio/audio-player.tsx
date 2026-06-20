"use client";

import Image from "next/image";
import { useAudioPlayer, useAlbumCover } from "@/contexts/audio-player-context";
import { formatTime } from "@/lib/format";
import type { QueueItem } from "@/contexts/audio-player-context";

function PlayerButton({
  children,
  onClick,
  label,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-zinc-100 transition hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  );
}

function PlayerBar({ current }: { current: QueueItem }) {
  const cover = useAlbumCover(current.album);
  const {
    isPlaying,
    isExpanded,
    progress,
    duration,
    volume,
    queue,
    currentIndex,
    togglePlay,
    playNext,
    playPrevious,
    seek,
    setVolume,
    setExpanded,
    playTrack,
  } = useAudioPlayer();

  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
        {isExpanded && (
          <div className="max-h-48 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-2">
            <p className="px-2 py-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Queue · {current.album.title}
            </p>
            <ul className="space-y-1">
              {queue.map((item, index) => {
                const active = index === currentIndex;
                return (
                  <li key={item.track.id}>
                    <button
                      type="button"
                      onClick={() => playTrack(item.album, item.track)}
                      className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition ${
                        active ? "bg-amber-500/15 text-amber-100" : "text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <span className="w-6 text-xs text-zinc-500">{item.track.number}</span>
                      <span className="flex-1 truncate">{item.track.title}</span>
                      {active && isPlaying && (
                        <span className="text-xs text-amber-400">playing</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setExpanded(!isExpanded)}
            className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-white/10"
            aria-label="Toggle queue"
          >
            <Image
              src={cover}
              alt={`${current.album.title} cover`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-zinc-100">{current.track.title}</p>
            <p className="truncate text-xs text-zinc-500">
              {current.album.artist} · {current.album.year}
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <PlayerButton onClick={playPrevious} label="Previous track">
              ⏮
            </PlayerButton>
            <PlayerButton
              onClick={togglePlay}
              label={isPlaying ? "Pause" : "Play"}
              className="h-10 w-10 bg-amber-500/20 text-base hover:bg-amber-500/30"
            >
              {isPlaying ? "⏸" : "▶"}
            </PlayerButton>
            <PlayerButton onClick={playNext} label="Next track">
              ⏭
            </PlayerButton>
          </div>

          <div className="hidden min-w-40 flex-1 items-center gap-2 md:flex">
            <span className="w-10 text-right text-xs text-zinc-500">{formatTime(progress)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={progress}
              onChange={(event) => seek(Number(event.target.value))}
              className="h-1 flex-1 cursor-pointer accent-amber-400"
              aria-label="Seek"
            />
            <span className="w-10 text-xs text-zinc-500">{formatTime(duration)}</span>
          </div>

          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            className="hidden h-1 w-20 cursor-pointer accent-amber-400 lg:block"
            aria-label="Volume"
          />

          <div className="flex items-center gap-2 sm:hidden">
            <PlayerButton onClick={togglePlay} label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? "⏸" : "▶"}
            </PlayerButton>
          </div>
        </div>

        <div className="md:hidden">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            onChange={(event) => seek(Number(event.target.value))}
            className="h-1 w-full cursor-pointer accent-amber-400"
            aria-label="Seek"
            style={{
              background: `linear-gradient(to right, rgb(251 191 36) ${progressPercent}%, rgb(63 63 70) ${progressPercent}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function AudioPlayer() {
  const { current } = useAudioPlayer();
  if (!current) return null;
  return <PlayerBar current={current} />;
}
