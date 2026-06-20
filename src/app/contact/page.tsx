import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionBlock } from "@/components/cv/section-block";
import { profile } from "@/data/cv";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with AkmelikA.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's connect"
      description="For bookings, studio work, composition, or collaboration — reach out through the channels below."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <SectionBlock title="Primary">
          <div className="space-y-4 text-sm leading-7 text-zinc-300">
            <p>
              <span className="text-zinc-500">Website</span>
              <br />
              <a href={`https://${profile.domain}`} className="text-amber-300 hover:text-amber-200">
                {profile.domain}
              </a>
            </p>
            <p>
              <span className="text-zinc-500">Label</span>
              <br />
              Twilight Lounge Records
            </p>
            <p>
              <span className="text-zinc-500">CV</span>
              <br />
              <a href="/CV.pdf" className="text-amber-300 hover:text-amber-200">
                Download PDF
              </a>
            </p>
          </div>
        </SectionBlock>

        <SectionBlock title="Services">
          <ul className="space-y-3 text-sm leading-7 text-zinc-300">
            <li>Live performance — AkmelikA band</li>
            <li>Recording engineering</li>
            <li>Sound production & mixing</li>
            <li>Film & advertising composition</li>
            <li>Venue / event audio technical direction</li>
          </ul>
        </SectionBlock>
      </div>
    </PageShell>
  );
}
