import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionBlock } from "@/components/cv/section-block";
import { CreditGrid } from "@/components/cv/credit-grid";
import { compositionCredits } from "@/data/cv";

export const metadata: Metadata = {
  title: "Composer",
  description: "Film, documentary, and commercial composition credits.",
};

export default function ComposerPage() {
  return (
    <PageShell
      eyebrow="CV"
      title="Composer"
      description="Original music for documentaries, branded films, and advertising — from underground cinema to major commercial campaigns."
    >
      <SectionBlock title="Selected Works">
        <CreditGrid items={compositionCredits} />
      </SectionBlock>
    </PageShell>
  );
}
