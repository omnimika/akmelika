import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionBlock } from "@/components/cv/section-block";
import { CreditGrid } from "@/components/cv/credit-grid";
import { productionCredits, recordingCredits } from "@/data/cv";

export const metadata: Metadata = {
  title: "Studio",
  description: "Recording engineer and sound producer credits.",
};

export default function StudioPage() {
  return (
    <PageShell
      eyebrow="CV"
      title="Studio"
      description="Selected recording and production work across independent bands, live projects, and experimental releases."
    >
      <div className="space-y-8">
        <SectionBlock title="Recording Engineer">
          <CreditGrid items={recordingCredits} />
        </SectionBlock>

        <SectionBlock title="Sound Producer">
          <CreditGrid items={productionCredits} />
        </SectionBlock>
      </div>
    </PageShell>
  );
}
