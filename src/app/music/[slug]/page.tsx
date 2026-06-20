import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { TrackList } from "@/components/audio/track-list";
import { albums, getAlbumBySlug } from "@/data/albums";

type AlbumPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: AlbumPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) return { title: "Album" };

  return {
    title: album.title,
    description: album.description,
  };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) notFound();

  return (
    <PageShell
      eyebrow="Album"
      title={album.title}
      description={album.description}
    >
      <TrackList album={album} />
    </PageShell>
  );
}
