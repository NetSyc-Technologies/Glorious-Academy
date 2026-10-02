import { ResourcePaper } from "@/lib/types";

// Official destinations checked on 2 October 2026. PDF URLs are actual papers;
// portals are explicitly labelled and do not imply a downloadable local file.
const advancedPapers: ResourcePaper[] = [2025, 2024, 2023].flatMap(year =>
  [1, 2].map(paper => ({
    id: `jee-advanced-${year}-${paper}`,
    title: `JEE Advanced ${year} — Paper ${paper} (English)`,
    exam: "JEE Advanced" as const,
    year,
    subjectOrSession: "Physics, Chemistry & Mathematics",
    type: "Question Paper" as const,
    format: "PDF" as const,
    sourceUrl: `https://jeeadv.ac.in/past_qps/${year}_${paper}_English.pdf`,
    sourceAttribution: "JEE Advanced official archive",
    verificationStatus: "approved" as const,
  }))
);

export const resourcesData: ResourcePaper[] = [
  ...advancedPapers,
  {
    id: "nta-jee-practice", title: "NTA Computer Based Test Practice", exam: "JEE Main", year: null,
    subjectOrSession: "Choose an available exam and paper on the NTA portal. Practice interface, not a specific year’s paper.",
    type: "Practice Portal", format: "Official portal", sourceUrl: "https://www.nta.ac.in/quiz",
    sourceAttribution: "National Testing Agency", verificationStatus: "approved",
  },
  {
    id: "nta-neet-resources", title: "NEET — NTA Examination Resources", exam: "NEET", year: null,
    subjectOrSession: "Find examination notices and published answer-key updates through the official NTA website.",
    type: "Exam Resources", format: "Official portal", sourceUrl: "https://www.nta.ac.in/",
    sourceAttribution: "National Testing Agency", verificationStatus: "approved",
  },
  {
    id: "cet-official", title: "MHT-CET — Official Examination Portal", exam: "MHT-CET", year: null,
    subjectOrSession: "Official syllabus, marking schemes, notices and candidate services. Paper availability is managed by CET Cell.",
    type: "Exam Resources", format: "Official portal", sourceUrl: "https://cetcell.mahacet.org/",
    sourceAttribution: "Maharashtra State CET Cell", verificationStatus: "approved",
  },
  ...(["CBSE Class 10", "CBSE Class 12"] as const).map(exam => ({
    id: exam === "CBSE Class 10" ? "cbse-10-archive" : "cbse-12-archive",
    title: `${exam} — Previous Year Paper Archive`, exam, year: null,
    subjectOrSession: "Select your class, year and subject on the official CBSE archive to download the available papers.",
    type: "Question Paper" as const, format: "Official portal" as const,
    sourceUrl: "https://www.cbse.gov.in/cbsenew/question-paper.html",
    sourceAttribution: "Central Board of Secondary Education", verificationStatus: "approved" as const,
  })),
];
