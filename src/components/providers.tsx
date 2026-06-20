"use client";

import { AudioPlayerProvider } from "@/contexts/audio-player-context";
import { AudioPlayer } from "@/components/audio/audio-player";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AudioPlayerProvider>
      <SiteHeader />
      <main className="flex-1 pb-36">{children}</main>
      <SiteFooter />
      <AudioPlayer />
    </AudioPlayerProvider>
  );
}
