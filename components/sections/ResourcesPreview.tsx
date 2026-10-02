import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ResourcesPreview() {
  return <section className="ga-section site-container"><div className="ga-eyebrow">THE PRACTICE CORNER</div><h2 className="text-3xl font-semibold">Practise with purpose.</h2><p className="my-5">Explore official question papers, exam archives and practice resources.</p><Link href="/resources/pyqs" className="ga-button ga-button-dark">Explore resources <ArrowUpRight size={18} /></Link></section>;
}
