"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, MotionConfig, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Atom, BookOpen, Check, ChevronDown, Compass, GraduationCap, MapPin, Pause, Play, Plus, Sparkles, Stethoscope, Target, X } from "lucide-react";
import { coursesData } from "@/content/courses";
import { centresData } from "@/content/centres";
import { faqData } from "@/content/faq";

const courseArt = [Atom, Stethoscope, Compass, GraduationCap];
const courseNames = ["JEE", "NEET", "MHT-CET", "Boards & Foundation"];
const courseNotes = ["Your engineering journey starts here.", "Take the first step towards medicine.", "Build your future, closer to home.", "Strong foundations. Limitless possibilities."];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={false} whileInView={{ opacity: [0.6, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65 }}>{children}</motion.div>;
}

function Tilt({ children, className = "", enabled }: { children: ReactNode; className?: string; enabled: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 160, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 160, damping: 24 });
  return <motion.div className={className} style={{ rotateX: enabled ? rotateX : 0, rotateY: enabled ? rotateY : 0, transformPerspective: 1100 }} onPointerMove={event => {
    if (!enabled || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 9);
    y.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 9);
  }} onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}

export function AcademyHome() {
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const animated = !reducedMotion && !paused;
  const [activeCourse, setActiveCourse] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const gallery = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const videoDialog = useRef<HTMLDialogElement>(null);
  const brandVideo = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 95]);
  const course = coursesData[activeCourse];

  useEffect(() => {
    if (videoOpen) videoDialog.current?.showModal();
    else { videoDialog.current?.close(); brandVideo.current?.pause(); }
    if (videoOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previousOverflow; };
    }
  }, [videoOpen]);

  function moveGallery(direction: number) {
    const next = Math.max(0, Math.min(3, photoIndex + direction));
    const rail = gallery.current;
    const item = rail?.children[next] as HTMLElement | undefined;
    if (rail && item) rail.scrollTo({ left: item.offsetLeft - rail.offsetLeft, behavior: animated ? "smooth" : "instant" });
  }

  return <MotionConfig reducedMotion={animated ? "user" : "always"}><div className={`ga-home ${animated ? "" : "motion-paused"}`}>
    <section ref={hero} className="ga-hero">
      <div className="hero-grid site-container">
        <div className="hero-copy">
          <div className="ga-eyebrow"><span className="eyebrow-line" /> A LITTLE GUIDANCE. A BIG TOMORROW.</div>
          <h1>Big dreams.<br />Brighter<br /><span className="hero-word">futures.<svg viewBox="0 0 360 20" aria-hidden="true"><path d="M3 14Q155-3 355 8M55 18Q200 5 330 14" /></svg></span><span className="hero-star" aria-hidden="true">✳</span></h1>
          <p>Find your clarity. Build your confidence. Get ready for JEE, NEET, MHT-CET and Boards—with mentors who are with you all the way.</p>
          <div className="hero-actions"><Link href="#courses" className="ga-button ga-button-orange">Find your course <ArrowUpRight size={19} /></Link><button type="button" className="hero-film-button" onClick={() => setVideoOpen(true)}><span><Play size={15} fill="currentColor" /></span>Meet Glorious</button></div>
          <div className="hero-footnote"><span className="mini-avatar"><Image src="/images/nitish_kumar.png" fill sizes="42px" alt="" /></span><div><strong>Real guidance. Personal attention.</strong><small>Led by Prof. Nitish Kumar & our academic team</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
          <span className="formula formula-one" aria-hidden="true">E = mc²</span><span className="formula formula-two" aria-hidden="true">∞ possibilities</span>
          <motion.div className="hero-photo-move" style={{ y: animated ? photoY : 0 }}><Tilt enabled={animated} className="hero-photo"><Image src="/images/mentorship-doubt-desk.jpg" alt="A teacher helping a student understand a science concept" fill sizes="(max-width: 800px) 90vw, 45vw" preload /><div className="hero-photo-caption"><span><i /> THE NEXT CHAPTER IS YOURS</span><strong>A place to learn.<br />A space to become.</strong></div></Tilt></motion.div>
          <div className="hero-seal"><ArrowUpRight size={32} strokeWidth={1.5} /><span>YOUR FUTURE<br />STARTS HERE</span></div>
          <div className="hero-floating-note"><span className="note-icon"><BookOpen size={23} /></span><div><strong>Understand. Don’t just memorise.</strong><small>Concepts that stay with you.</small></div><Sparkles size={19} /></div>
          <div className="hero-subject-tag"><Atom size={19} /><span>Curiosity is your superpower.</span></div>
        </div>
      </div>
      <div className="hero-bottom site-container"><a href="#courses"><span className="scroll-arrow"><ArrowDown size={16} /></span>SCROLL TO FIND YOUR PATH</a><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="motion-toggle">{animated ? <Pause size={13} /> : <Play size={13} />}{reducedMotion ? "Reduced motion enabled" : paused ? "Play motion" : "Pause motion"}</button><span>ROOTED IN CHANDRAPUR. READY FOR THE WORLD.</span></div>
    </section>

    <div className="ga-subject-strip" aria-label="JEE Main and Advanced, NEET UG, MHT-CET, Boards and Foundation"><div>{["JEE MAIN & ADVANCED", "NEET UG", "MHT-CET", "BOARDS & FOUNDATION"].map(label => <span key={label}><span aria-hidden="true">✳</span>{label}</span>)}</div></div>

    <section id="courses" className="ga-section ga-courses site-container">
      <Reveal className="ga-section-heading"><div><div className="ga-eyebrow">01 / FIND YOUR DIRECTION</div><h2>Your ambition.<br /><span>The right preparation.</span></h2></div><p>Different dreams need different paths.<br />Let’s find the one that’s right for you.</p></Reveal>
      <div className="course-tabs" role="tablist" aria-label="Choose an exam"><span className="course-tabs-label">I’M PREPARING FOR</span>{courseNames.map((name, index) => <button key={name} id={`course-tab-${index}`} type="button" role="tab" aria-selected={activeCourse === index} aria-controls="course-panel" tabIndex={activeCourse === index ? 0 : -1} onClick={() => setActiveCourse(index)} onKeyDown={event => { let next = index; if (event.key === "ArrowRight") next = (index + 1) % 4; else if (event.key === "ArrowLeft") next = (index + 3) % 4; else if (event.key === "Home") next = 0; else if (event.key === "End") next = 3; else return; event.preventDefault(); setActiveCourse(next); document.getElementById(`course-tab-${next}`)?.focus(); }}>{name}<ArrowUpRight size={16} /></button>)}</div>
      <div className="course-feature" id="course-panel" role="tabpanel" aria-labelledby={`course-tab-${activeCourse}`} tabIndex={0}>
        <div className={`course-illustration course-art-${activeCourse}`} aria-hidden="true"><div className="science-orbit" /><div className="science-orbit second" /><div className="science-orbit third" /><div className="science-core">{(() => { const Icon = courseArt[activeCourse]; return <Icon size={92} strokeWidth={1} />; })()}</div><span className="science-label">{["THINK. SOLVE. ENGINEER.", "EXPLORE. LEARN. HEAL.", "FOCUS. PRACTISE. ACHIEVE.", "LEARN. GROW. DISCOVER."][activeCourse]}</span><span className="science-dot dot-one" /><span className="science-dot dot-two" /><span className="science-symbol">{["∑", "DNA", "ƒ(x)", "a²+b²"][activeCourse]}</span></div>
        <div className="course-detail"><span className="ga-eyebrow">{course.badge}</span><h3>{course.shortTitle}</h3><p className="course-note">{courseNotes[activeCourse]}</p><p>{course.summary}</p><div className="course-subjects">{course.subjects.map(subject => <span key={subject}><Check size={14} />{subject}</span>)}</div><div className="course-links"><Link href={`/courses/${course.slug}`} className="ga-button ga-button-dark">Explore this course <ArrowUpRight size={18} /></Link><Link href={`/admissions?course=${course.slug}`} className="ga-text-link">Enquire now <ArrowRight size={17} /></Link></div></div>
      </div>
      <div className="course-help"><span>Not sure where to begin? That’s what we’re here for.</span><Link href="/admissions">Talk to an academic counsellor <ArrowUpRight size={17} /></Link></div>
    </section>

    <section className="ga-method ga-section"><div className="site-container"><Reveal className="ga-section-heading"><div><div className="ga-eyebrow">02 / THE GLORIOUS WAY</div><h2>More than a classroom.<br /><span>A team in your corner.</span></h2></div><p>Good teaching opens a chapter.<br />Great mentorship opens possibilities.</p></Reveal><div className="method-grid">{[{ icon: BookOpen, title: "Clarity before complexity.", text: "Build a real understanding of every concept, then learn to apply it with confidence." }, { icon: Target, title: "Small steps. Real progress.", text: "Practice, test, reflect, repeat. Know where you stand and what to work on next." }, { icon: Sparkles, title: "Your doubts belong here.", text: "Ask again. Try again. Get personal guidance from mentors who make time for you." }].map((item, i) => <Reveal key={item.title}><Tilt enabled={animated} className="method-card"><div className="method-card-top"><item.icon size={30} strokeWidth={1.5} /><span>0{i + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p></Tilt></Reveal>)}</div></div></section>

    <section className="ga-section ga-life"><div className="site-container"><Reveal className="ga-section-heading"><div><div className="ga-eyebrow">03 / SPACE TO GROW</div><h2>Little moments.<br /><span>Big breakthroughs.</span></h2></div><div className="gallery-controls"><button type="button" aria-label="Previous photo" disabled={photoIndex === 0} onClick={() => moveGallery(-1)}><ArrowLeft size={20} /></button><button type="button" aria-label="Next photo" disabled={photoIndex === 3} onClick={() => moveGallery(1)}><ArrowRight size={20} /></button></div></Reveal></div>
      <div ref={gallery} className="photo-rail" aria-label="Learning spaces photo gallery" tabIndex={0} onScroll={() => { const rail = gallery.current; if (!rail) return; const item = rail.children[0] as HTMLElement; const step = item.offsetWidth + 24; setPhotoIndex(Math.max(0, Math.min(3, Math.round(rail.scrollLeft / step)))); }}>
        {[{ src: "hero-students.jpg", title: "Better, together.", caption: "Learning through shared curiosity" }, { src: "mentorship-doubt-desk.jpg", title: "Every question matters.", caption: "A little guidance goes a long way" }, { src: "centre-chandrapur.jpg", title: "Room for your ambition.", caption: "Explore our learning environments" }, { src: "centre-bhadrawati.jpg", title: "Your next chapter.", caption: "Find your nearest academy centre" }].map((photo, i) => <figure className="gallery-photo" key={photo.src}><Image src={`/images/${photo.src}`} alt={photo.caption} fill sizes="(max-width: 600px) 85vw, 520px" /><figcaption><span>0{i + 1} / GLORIOUS PERSPECTIVES</span><h3>{photo.title}</h3><p>{photo.caption}</p></figcaption></figure>)}
      </div><div className="site-container gallery-caption"><span>SCROLL, SWIPE, OR USE THE ARROWS TO EXPLORE</span><span>0{photoIndex + 1} <span className="muted">/ 04</span></span></div>
    </section>

    <section className="ga-founder ga-section"><div className="site-container founder-grid"><Reveal className="founder-image-wrap"><div className="founder-outline" /><div className="founder-image"><Image src="/images/nitish_kumar.png" alt="Prof. Nitish Kumar, Founder and Managing Director of Glorious Academy" fill sizes="(max-width: 800px) 90vw, 440px" /></div><div className="founder-caption"><strong>Prof. Nitish Kumar</strong><span>FOUNDER & MANAGING DIRECTOR</span><ArrowUpRight size={26} /></div></Reveal><Reveal className="founder-copy"><div className="ga-eyebrow">04 / A PERSONAL COMMITMENT</div><h2>Behind every dream,<br /><span>someone who believes.</span></h2><p>Glorious Academy began with a simple purpose: to bring focused academic preparation and personal mentorship closer to students in Chandrapur and Bhadrawati.</p><p>Under the leadership of Prof. Nitish Kumar, our approach puts understanding first—helping students build the knowledge, discipline, and confidence to take their next step.</p><Link href="/about" className="ga-text-link">Get to know our story <ArrowUpRight size={20} /></Link><button type="button" className="brand-film-card" onClick={() => setVideoOpen(true)}><span className="brand-film-logo"><Image src="/images/galogo.png" alt="" width={72} height={44} /></span><span><strong>One identity. Endless possibilities.</strong><small>Watch the Glorious Academy logo film</small></span><span className="film-play"><Play size={18} /></span></button></Reveal></div></section>

    <section className="ga-section site-container ga-next"><Reveal className="ga-section-heading"><div><div className="ga-eyebrow">05 / KEEP MOVING FORWARD</div><h2>A little more prepared.<br /><span>Every single day.</span></h2></div></Reveal><div className="resource-grid"><Link href="/resources/pyqs" className="resource-card"><BookOpen size={29} /><span>THE PRACTICE CORNER</span><h3>Your next breakthrough<br />starts with a question.</h3><p>Explore previous year papers and prepare with purpose.</p><strong>Explore question papers <ArrowUpRight size={22} /></strong></Link><Link href="/results" className="resource-card resource-blue"><Target size={29} /><span>PROGRESS THAT MATTERS</span><h3>Every journey forward<br />deserves a moment.</h3><p>Explore results, student journeys, and academic milestones.</p><strong>Explore student achievements <ArrowUpRight size={22} /></strong></Link></div></section>

    <section className="ga-centres ga-section"><div className="site-container"><Reveal className="ga-section-heading"><div><div className="ga-eyebrow">06 / CLOSER TO YOUR DREAM</div><h2>Big possibilities.<br /><span>Right here at home.</span></h2></div><Link href="/centres" className="ga-text-link">Discover our centres <ArrowUpRight size={20} /></Link></Reveal><div className="centre-grid">{centresData.map((centre, i) => <Link href={`/centres/${centre.slug}`} key={centre.slug} className="centre-row"><span className="centre-number">0{i + 1}</span><div><span className="ga-eyebrow">MAHARASHTRA</span><h3>{centre.city}</h3><p><MapPin size={15} />{centre.landmark}</p></div><span className="centre-arrow"><ArrowUpRight size={24} /></span></Link>)}</div></div></section>

    <section className="ga-section site-container faq-grid"><Reveal><div className="ga-eyebrow">A LITTLE MORE CLARITY</div><h2>Good questions.<br /><span>Clear answers.</span></h2><p>Still have something on your mind?</p><Link href="/contact" className="ga-text-link">We’re happy to help <ArrowUpRight size={18} /></Link></Reveal><div className="home-faq">{[faqData[0], faqData[2], faqData[5], faqData[6]].map(faq => <div className="home-faq-item" key={faq.id}><h3><button type="button" aria-expanded={openFaq === faq.id} aria-controls={`answer-${faq.id}`} onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>{faq.question}{openFaq === faq.id ? <ChevronDown size={20} /> : <Plus size={20} />}</button></h3><div id={`answer-${faq.id}`} hidden={openFaq !== faq.id}><p>{faq.answer}</p></div></div>)}</div></section>

    <section className="ga-final-cta"><div className="site-container"><div><span className="ga-eyebrow">YOUR NEXT CHAPTER STARTS WITH A CONVERSATION.</span><h2>Let’s make your<br /><span>future glorious.</span></h2></div><div><Link href="/admissions" className="ga-button ga-button-orange">Let’s find your path <ArrowUpRight size={21} /></Link><p>JEE · NEET · MHT-CET · Boards<br />Chandrapur & Bhadrawati</p></div><span className="cta-asterisk" aria-hidden="true">✳</span></div></section>
    <dialog ref={videoDialog} className="brand-video-dialog" onCancel={() => setVideoOpen(false)} onClick={event => { if (event.target === event.currentTarget) setVideoOpen(false); }} aria-labelledby="brand-video-title"><div className="video-dialog-heading"><h2 id="brand-video-title">The Glorious identity</h2><button type="button" aria-label="Close logo film" onClick={() => setVideoOpen(false)}><X size={24} /></button></div>{videoOpen && <video ref={brandVideo} src="/images/galogo_animated.mp4" controls autoPlay={!reducedMotion} muted playsInline preload="metadata" poster="/images/galogo.png" aria-label="Glorious Academy animated logo" />}<p>Clear learning. Confident futures.</p></dialog>
  </div></MotionConfig>;
}


