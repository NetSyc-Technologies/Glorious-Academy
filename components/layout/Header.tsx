"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, MapPin, Phone } from "lucide-react";
import { Brand } from "@/components/ui/Brand";
import { MobileDrawer } from "./MobileDrawer";
import { coursesData } from "@/content/courses";
import { siteConfig } from "@/content/site-config";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!dropdown.current?.contains(event.target as Node)) setCoursesOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setCoursesOpen(false); };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", escape); };
  }, []);
  const navLink = (href: string, title: string) => <Link href={href} aria-current={pathname.startsWith(href) ? "page" : undefined}>{title}</Link>;
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <div className="academy-topbar"><div className="site-container"><span><MapPin size={13} /> Chandrapur & Bhadrawati</span><Link href="/admissions"><i /> Admissions open 2026–27 <ArrowUpRight size={14} /></Link><a href={`tel:${siteConfig.primaryPhone.replace(/\s/g, "")}`}><Phone size={13} /> {siteConfig.primaryPhone}</a></div></div>
    <header className="academy-header"><div className="site-container">
      <Brand />
      <nav className="academy-nav" aria-label="Main navigation">
        {navLink("/about", "Our story")}
        <div ref={dropdown} className="academy-nav-dropdown" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setCoursesOpen(false); }}>
          <button type="button" aria-expanded={coursesOpen} aria-controls="course-menu" onClick={() => setCoursesOpen(!coursesOpen)}>Our courses <ChevronDown size={14} /></button>
          {coursesOpen && <div id="course-menu" className="academy-course-menu"><small>FIND YOUR DIRECTION</small>{coursesData.map(course => <Link key={course.slug} href={`/courses/${course.slug}`} onClick={() => setCoursesOpen(false)}>{course.shortTitle}<ArrowUpRight size={17} /></Link>)}<Link href="/courses" onClick={() => setCoursesOpen(false)}>Compare all courses <ArrowUpRight size={17} /></Link></div>}
        </div>
        {navLink("/results", "Results")}{navLink("/resources", "Resources")}{navLink("/centres", "Our centres")}
      </nav>
      <div className="academy-header-actions"><Link className="ga-button ga-button-dark header-enquire" href="/admissions">Let’s talk <ArrowUpRight size={18} /></Link><button type="button" className="academy-menu-toggle" aria-label="Open navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)}><Menu /></button></div>
    </div></header>
    <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} courses={coursesData} />
  </>;
}
