
import type { Sponsor } from "../types";

interface SponsorBannerProps {
  sponsor: Sponsor;
}

export default function SponsorBanner({
  sponsor,
}: SponsorBannerProps) {
  return (
    <aside
      aria-label="Sponsored business"
      className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-gray-900"
    >
      <p className="font-bold">Sponsored (Demo)</p>

      <p className="mt-2">{sponsor.name}</p>

      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block rounded text-blue-700 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        Visit {sponsor.name} website
      </a>
    </aside>
  );
}
