export type AudioFormat = "mp3" | "wav";

export type Track = {
  id: string;
  number: number;
  title: string;
  fileName: string;
};

export type Album = {
  slug: string;
  title: string;
  year: number;
  artist: string;
  folderName: string;
  coverFileName: string;
  description?: string;
  tracks: Track[];
};

const AKMELIKA_2020_TRACKS: Track[] = [
  { id: "01", number: 1, title: "Sliding Along", fileName: "01 Sliding Along" },
  { id: "02", number: 2, title: "Particles", fileName: "02 Particles" },
  { id: "03", number: 3, title: "Surfing Jesus", fileName: "03 Surfing Jesus" },
  { id: "04", number: 4, title: "Thriller", fileName: "04 Thriller" },
  { id: "05", number: 5, title: "Puma", fileName: "05 Puma" },
  { id: "06", number: 6, title: "Spooky Olive", fileName: "06 Spooky Olive" },
  { id: "07", number: 7, title: "Afternoon", fileName: "07 Afternoon" },
  { id: "08", number: 8, title: "Black Pearl", fileName: "08 Black Pearl" },
];

export const albums: Album[] = [
  {
    slug: "akmelika-2020",
    title: "AkmelikA",
    year: 2020,
    artist: "AkmelikA",
    folderName: "2020 Akmelika",
    coverFileName: "ALBUM COVER.jpg",
    description:
      "Self-titled debut album — eight tracks spanning experimental rock, noise, and lounge-inflected textures.",
    tracks: AKMELIKA_2020_TRACKS,
  },
];

export function getAlbumBySlug(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}

export function getTrackSrc(
  album: Album,
  track: Track,
  format: AudioFormat = "mp3",
): string {
  const base = `/albums/${encodeURIComponent(album.folderName)}/${format}`;
  const file = `${track.fileName}.${format}`;
  return `${base}/${encodeURIComponent(file)}`;
}

export function getAlbumCoverSrc(album: Album, format: AudioFormat = "mp3"): string {
  const base = `/albums/${encodeURIComponent(album.folderName)}/${format}`;
  return `${base}/${encodeURIComponent(album.coverFileName)}`;
}
