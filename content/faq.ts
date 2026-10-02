import { FAQItem } from "@/lib/types";

export const faqData: FAQItem[] = [
  {
    id: "faq-c1",
    category: "Courses",
    question: "Which courses are offered at Glorious Academy?",
    answer:
      "Glorious Academy offers comprehensive preparation for JEE Main & Advanced (Engineering), NEET UG (Medical), MHT-CET (Maharashtra State Engineering & Pharmacy), and Class 10 & 12 Board examinations (CBSE and Maharashtra State Board).",
    relatedRoute: "/courses",
  },
  {
    id: "faq-c2",
    category: "Courses",
    question: "Can Class 10 students enroll for early competitive foundation?",
    answer:
      "Yes. Our Class 10 Foundation batch strengthens Science and Mathematics fundamentals required for CBSE and State Board examinations while gently introducing analytical aptitude and early Olympiad/competitive problem solving.",
    relatedRoute: "/courses/boards",
  },
  {
    id: "faq-c3",
    category: "Courses",
    question: "Do you have repeaters / dropper batches for NEET and JEE?",
    answer:
      "Yes, we operate 1-Year intensive Target / Repeater programs for Class 12 passed students aiming to improve their scores in NEET UG and JEE Main & Advanced with dedicated full-day classroom coaching and high-frequency testing.",
    relatedRoute: "/courses/jee",
  },
  {
    id: "faq-ct1",
    category: "Centres",
    question: "Where are Glorious Academy's physical centres located?",
    answer:
      "We operate two fully equipped learning centres in Maharashtra: 1) Warora Naka Centre at Dr. Ambedkar College Campus, Opposite Agarzari Restaurant, Chandrapur; and 2) Bhadrawati Centre at the Indoor Stadium premises, Near Bank of India, Bhadrawati.",
    relatedRoute: "/centres",
  },
  {
    id: "faq-ct2",
    category: "Centres",
    question: "Are both centres open for in-person parent and student visits?",
    answer:
      "Yes. Both centres are open Monday through Saturday from 8:00 AM to 8:00 PM and Sundays for scheduled counseling and weekend test reviews. Parents can visit anytime during office hours to meet academic counselors.",
    relatedRoute: "/centres",
  },
  {
    id: "faq-af1",
    category: "Admissions & Fees",
    question: "What is the admissions procedure at Glorious Academy?",
    answer:
      "Students can begin by submitting an admission enquiry online or by visiting either the Chandrapur or Bhadrawati centre. Our academic counselors will schedule a personalized counseling session to understand the student's current academic level, discuss appropriate course options, and guide you through enrollment.",
    relatedRoute: "/admissions",
  },
  {
    id: "faq-af2",
    category: "Admissions & Fees",
    question: "How can I obtain the current fee structure and installment plans?",
    answer:
      "Fee structures vary based on course level, academic duration, and batch mode. Please submit an enquiry form or call our admissions desk (+91 7028766674 or +91 9764297221) for the verified fee schedule, available installment plans, and current batch availability.",
    relatedRoute: "/admissions",
  },
  {
    id: "faq-ls1",
    category: "Learning Support",
    question: "How are individual student doubts addressed?",
    answer:
      "In addition to interactive lectures, dedicated doubt-resolution counters are staffed by subject teachers daily after classes. Students can bring individual questions from homework sheets, DPPs, or mock tests for one-on-one clarification.",
    relatedRoute: "/about",
  },
  {
    id: "faq-ls2",
    category: "Learning Support",
    question: "How regularly are mock tests and evaluations conducted?",
    answer:
      "Students undertake weekly chapter tests and monthly cumulative examinations. Entrance batches (JEE, NEET, MHT-CET) undergo computer-based and OMR mock tests simulating official exam timers and negative-marking rules.",
    relatedRoute: "/about",
  },
  {
    id: "faq-r1",
    category: "Resources",
    question: "Are Previous Year Question Papers (PYQs) free to download?",
    answer:
      "Yes. Previous Year Question papers and official answer keys for JEE Main, JEE Advanced, NEET, and Board examinations are publicly available in our PYQ resource library for student practice without mandatory fees.",
    relatedRoute: "/resources/pyqs",
  },
];
