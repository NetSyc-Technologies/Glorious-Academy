"use client";

import { useState } from "react";
import { ArrowUpRight, FileText, Search } from "lucide-react";
import { resourcesData } from "@/content/resources";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function PyqsLibraryPage() {
  const [query, setQuery] = useState("");
  const [exam, setExam] = useState("all");
  const [year, setYear] = useState("all");
  const exams = [...new Set(resourcesData.map(paper => paper.exam))];
  const years = [...new Set(resourcesData.map(paper => paper.year).filter(value => value !== null))].sort((a, b) => b - a);
  const filtered = resourcesData.filter(paper =>
    (exam === "all" || paper.exam === exam) &&
    (year === "all" || String(paper.year) === year) &&
    `${paper.title} ${paper.exam} ${paper.subjectOrSession}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  const reset = () => { setQuery(""); setExam("all"); setYear("all"); };

  return <div className="ga-home resource-library">
    <section className="ga-section site-container">
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Question papers" }]} />
      <div className="ga-eyebrow mt-10">THE PRACTICE CORNER</div>
      <h1>Build confidence.<br /><span>One question at a time.</span></h1>
      <p className="library-intro">Previous year papers, practice tools, and official exam resources. Open a paper directly or explore the examining body’s own archive.</p>
      <div className="library-filters">
        <label className="library-search"><span>Search resources</span><div><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Try Physics, JEE or 2025" /></div></label>
        <label><span>Examination</span><select value={exam} onChange={event => setExam(event.target.value)}><option value="all">All exams</option>{exams.map(value => <option key={value}>{value}</option>)}</select></label>
        <label><span>Paper year</span><select value={year} onChange={event => setYear(event.target.value)}><option value="all">All years & portals</option>{years.map(value => <option key={value}>{value}</option>)}</select></label>
      </div>
      <div className="library-count"><span role="status">{filtered.length} resources found</span>{(query || exam !== "all" || year !== "all") && <button type="button" onClick={reset}>Clear filters</button>}</div>
      <div className="library-grid">{filtered.map(paper => <article key={paper.id} className="library-card">
        <div className="library-card-top"><FileText size={25} strokeWidth={1.4} /><span>{paper.format}</span></div>
        <div className="ga-eyebrow">{paper.exam}{paper.year ? ` / ${paper.year}` : ""}</div>
        <h2>{paper.title}</h2><p>{paper.subjectOrSession}</p>
        <small>{paper.sourceAttribution}</small>
        <a href={paper.sourceUrl} target="_blank" rel="noopener noreferrer">{paper.format === "PDF" ? "Open official PDF" : "Visit official portal"}<ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
      </article>)}</div>
      {!filtered.length && <div className="library-empty"><h2>No matching resources.</h2><p>Try another exam, year, or search term.</p><button type="button" className="ga-button ga-button-dark" onClick={reset}>Reset filters</button></div>}
      <p className="library-note">Resources open on the official provider’s website in a new tab. Use the PDF viewer’s download control to save a paper. Portals may require you to choose an exam, year, or subject.</p>
    </section>
  </div>;
}
