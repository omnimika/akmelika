import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionBlock } from "@/components/cv/section-block";
import { Timeline } from "@/components/cv/timeline";
import { CreditGrid } from "@/components/cv/credit-grid";
import {
  awards,
  education,
  experience,
  labels,
  otherWork,
  venueArtists,
} from "@/data/cv";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline, Ypsilon Moscow, labels, and underground venue history.",
};

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="CV"
      title="Experience"
      description="From corporate law to founding one of Moscow's defining underground venues — a career built at the intersection of culture, sound, and production."
    >
      <div className="space-y-8">
        <SectionBlock title="Education">
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.institution} className="border-l border-white/10 pl-4">
                <p className="font-medium text-zinc-100">{item.institution}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock title="Career">
          <Timeline items={experience} />
        </SectionBlock>

        <SectionBlock title="Ypsilon — Selected Artists">
          <div className="flex flex-wrap gap-2">
            {venueArtists.map((artist) => (
              <span
                key={artist}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300"
              >
                {artist}
              </span>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Labels">
          <Timeline items={labels} />
        </SectionBlock>

        <SectionBlock title="Awards & Recognition">
          <CreditGrid items={awards} />
        </SectionBlock>

        <SectionBlock title="Other">
          <CreditGrid items={otherWork} />
        </SectionBlock>
      </div>
    </PageShell>
  );
}
