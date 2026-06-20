"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { albums, getAlbumCoverSrc, getTrackSrc, type Album, type Track } from "@/data/albums";

export type QueueItem = {
  album: Album;
  track: Track;
  src: string;
};

type AudioPlayerContextValue = {
  queue: QueueItem[];
  currentIndex: number;
  current: QueueItem | null;
  isPlaying: boolean;
  isExpanded: boolean;
  progress: number;
  duration: number;
  volume: number;
  playTrack: (album: Album, track: Track) => void;
  playAlbum: (album: Album, startTrackId?: string) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  setExpanded: (expanded: boolean) => void;
};

const AudioPlayerContext = createContext<AudioPlayerContextValue | null>(null);

function buildQueueItem(album: Album, track: Track): QueueItem {
  return {
    album,
    track,
    src: getTrackSrc(album, track),
  };
}

function buildAlbumQueue(album: Album): QueueItem[] {
  return album.tracks.map((track) => buildQueueItem(album, track));
}

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.85);

  const current = queue[currentIndex] ?? null;

  const playTrack = useCallback((album: Album, track: Track) => {
    const nextQueue = buildAlbumQueue(album);
    const index = nextQueue.findIndex((item) => item.track.id === track.id);
    setQueue(nextQueue);
    setCurrentIndex(index >= 0 ? index : 0);
    setIsPlaying(true);
  }, []);

  const playAlbum = useCallback((album: Album, startTrackId?: string) => {
    const nextQueue = buildAlbumQueue(album);
    const index = startTrackId
      ? nextQueue.findIndex((item) => item.track.id === startTrackId)
      : 0;
    setQueue(nextQueue);
    setCurrentIndex(index >= 0 ? index : 0);
    setIsPlaying(true);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((value) => !value);
  }, []);

  const playNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (queue.length === 0) return 0;
      return index < queue.length - 1 ? index + 1 : 0;
    });
    setIsPlaying(true);
  }, [queue.length]);

  const playPrevious = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }

    setCurrentIndex((index) => {
      if (queue.length === 0) return 0;
      return index > 0 ? index - 1 : queue.length - 1;
    });
    setIsPlaying(true);
  }, [queue.length]);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setProgress(time);
  }, []);

  const setVolume = useCallback((nextVolume: number) => {
    const clamped = Math.min(1, Math.max(0, nextVolume));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !current) return;

    audio.src = current.src;
    audio.load();

    if (isPlaying) {
      void audio.play().catch(() => setIsPlaying(false));
    }
  }, [current, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      void audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => playNext();

    audio.volume = volume;
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [playNext, volume]);

  const value = useMemo<AudioPlayerContextValue>(
    () => ({
      queue,
      currentIndex,
      current,
      isPlaying,
      isExpanded,
      progress,
      duration,
      volume,
      playTrack,
      playAlbum,
      togglePlay,
      playNext,
      playPrevious,
      seek,
      setVolume,
      setExpanded,
    }),
    [
      queue,
      currentIndex,
      current,
      isPlaying,
      isExpanded,
      progress,
      duration,
      volume,
      playTrack,
      playAlbum,
      togglePlay,
      playNext,
      playPrevious,
      seek,
      setVolume,
    ],
  );

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
      <audio ref={audioRef} preload="metadata" />
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  }
  return context;
}

export function useDefaultAlbum() {
  return albums[0];
}

export function useAlbumCover(album: Album) {
  return getAlbumCoverSrc(album);
}
