import Link from "next/link";
import { Brand } from "@/components/ui/Brand";
import { siteConfig } from "@/content/site-config";
import { coursesData } from "@/content/courses";

export function Footer() {
  return (
    <footer className="academy-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-about">
            <Brand light />
            <p>
              Clear concepts. Personal guidance. A brighter tomorrow. Competitive and Board examination preparation in Chandrapur and Bhadrawati.
            </p>
          </div>

          <div className="footer-column">
            <h2>FIND YOUR PATH</h2>
            {coursesData.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`}>
                {course.shortTitle}
              </Link>
            ))}
            <Link href="/admissions">Admissions</Link>
          </div>

          <div className="footer-column">
            <h2>EXPLORE GLORIOUS</h2>
            <Link href="/about">Our story</Link>
            <Link href="/results">Results & achievements</Link>
            <Link href="/testimonials">Student voices</Link>
            <Link href="/resources/pyqs">Previous year papers</Link>
            <Link href="/centres">Our centres</Link>
            <Link href="/faq">FAQs</Link>
          </div>

          <div className="footer-column">
            <h2>LET’S CONNECT</h2>
            <a href={`tel:${siteConfig.primaryPhone.replace(/\s/g, "")}`}>
              {siteConfig.primaryPhone}
            </a>
            {siteConfig.altPhone && (
              <a href={`tel:${siteConfig.altPhone.replace(/\s/g, "")}`}>
                {siteConfig.altPhone}
              </a>
            )}
            <a href={`mailto:${siteConfig.confirmedEmail}`}>
              {siteConfig.confirmedEmail}
            </a>
            <Link href="/contact">Send us a message ↗</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
            <span className="text-white/30">•</span>
            <span>
              Developed by{" "}
              <a
                href="https://netsyc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ffa466] font-semibold underline underline-offset-2 transition-colors"
              >
                NetSyc Technologies
              </a>
            </span>
          </div>

          <div>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
