import { Course } from "@/lib/types";

export const coursesData: Course[] = [
  {
    slug: "jee",
    title: "JEE (Main & Advanced) Preparation",
    shortTitle: "JEE Main & Advanced",
    badge: "Engineering Stream",
    tagline: "Rigorous concept mastery and problem-solving techniques for IIT-JEE aspirants.",
    summary:
      "A structured 1-year and 2-year preparation program focused on deep conceptual understanding in Physics, Chemistry, and Mathematics, supplemented by regular test series and individual mentorship.",
    academicCue: "engineering",
    colorTheme: {
      primary: "#1E40AF",
      bgSubtle: "#EFF6FF",
      border: "#BFDBFE",
    },
    targetAudience: "Students moving into Class 11, Class 12, or Target/Dropper batches aiming for top engineering institutions (IITs, NITs, IIITs, and BITS).",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    availableModes: ["Classroom Offline (Chandrapur & Bhadrawati)", "Self-Study Hybrid with Recorded Lectures", "Live Online Mentorship"],
    keySupportFeatures: [
      "Rigorous concept-driven classroom teaching",
      "Chapter-wise graded practice problem sheets (DPPs)",
      "CBT-format periodic test series simulating JEE Main & Advanced",
      "Direct teacher doubt-clearing and individual progress tracking",
    ],
    detailedInclusions: [
      {
        title: "Comprehensive Study Modules",
        description:
          "Curated theory books, formula guides, and multi-tier problem sets categorized into fundamental, intermediate, and advanced levels.",
      },
      {
        title: "Extensive Question Bank",
        description:
          "Thousands of graded questions including previous 15+ years of JEE Main and JEE Advanced papers with verified analytical solutions.",
      },
      {
        title: "Simulated Test Series",
        description:
          "Weekly unit tests, monthly cumulative reviews, and full-length exam simulations with detailed performance analytics.",
      },
      {
        title: "Personalized Doubt Resolution",
        description:
          "One-on-one sessions with subject teachers to resolve homework difficulties and clarify complex physical or mathematical concepts.",
      },
    ],
    learningProcess: [
      {
        step: 1,
        title: "Conceptual Clarity",
        description: "Engaging classroom instruction focusing on the first principles of each topic before introducing shortcut methods.",
      },
      {
        step: 2,
        title: "Guided Problem Practice",
        description: "Solving progressive problems in class to build numerical fluency, multi-concept synthesis, and time management.",
      },
      {
        step: 3,
        title: "Regular Testing & Error Analysis",
        description: "Continuous testing under strict time limits, followed by in-depth review sessions to eliminate recurring mistakes.",
      },
      {
        step: 4,
        title: "Mentorship & Final Revision",
        description: "Strategic revision cycles, formula consolidation, and mental preparation for high-stakes exam conditions.",
      },
    ],
    variants: [
      {
        id: "jee-2yr",
        name: "2-Year Integrated Classroom Program",
        duration: "2 Academic Years",
        mode: "Classroom Offline",
        targetClass: "Class 10 to 11 Moving",
        batchStatus: "Enrolling for New Session",
        keyInclusions: ["Classroom lectures", "Study modules", "45+ test series", "Weekly doubt clearing", "Personal mentorship"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
      {
        id: "jee-1yr",
        name: "1-Year Target / Dropper Batch",
        duration: "1 Academic Year",
        mode: "Classroom Offline",
        targetClass: "Class 12 Passed / Repeater",
        batchStatus: "Admissions Open",
        keyInclusions: ["Intensive daily schedule", "Target question bank", "Comprehensive test series", "Exam strategy workshops"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
      {
        id: "jee-hybrid",
        name: "Self-Study Hybrid Support",
        duration: "1 or 2 Years",
        mode: "Self-Study Hybrid",
        targetClass: "Class 11 & 12 Students",
        batchStatus: "Continuous Registration",
        keyInclusions: ["Digital study modules", "Access to recorded core concept lectures", "Online test series", "Weekend doubt forum"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
    ],
    faqs: [
      {
        question: "How does Glorious Academy balance Board syllabus with JEE preparation?",
        answer:
          "Our curriculum is synchronized so that foundational concepts required for Maharashtra State Board / CBSE are mastered first, followed immediately by JEE-level applications, ensuring students excel in both.",
      },
      {
        question: "What is the schedule for doubt-solving sessions?",
        answer:
          "Faculty members are available daily after lecture hours at both our Chandrapur and Bhadrawati centres for one-on-one doubt clarification.",
      },
      {
        question: "Are tests conducted online or offline?",
        answer:
          "We conduct both: OMR and computer-based tests matching the exact interface and timer of JEE Main to train students under realistic conditions.",
      },
    ],
    centresAvailable: ["chandrapur", "bhadrawati"],
  },
  {
    slug: "neet",
    title: "NEET (UG) Medical Entrance Preparation",
    shortTitle: "NEET Medical",
    badge: "Medical Stream",
    tagline: "In-depth NCERT mastery and high-precision speed training for aspiring doctors.",
    summary:
      "A focused preparation framework for NEET UG aspirants, uniting NCERT-oriented Biology, analytical Chemistry, and mathematical Physics with regular OMR test drills.",
    academicCue: "medical",
    colorTheme: {
      primary: "#0F766E",
      bgSubtle: "#F0FDFA",
      border: "#99F6E4",
    },
    targetAudience: "Students moving into Class 11, Class 12, or Target/Dropper batches aiming for MBBS, BDS, and allied healthcare careers.",
    subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
    availableModes: ["Classroom Offline (Chandrapur & Bhadrawati)", "Hybrid Self-Study", "Dedicated Test Series Batch"],
    keySupportFeatures: [
      "Exhaustive line-by-line NCERT Biology decoding",
      "Conceptual Physics instruction built for medical exam patterns",
      "Regular OMR-sheet mock testing with negative marking drills",
      "Specialized mnemonic sheets, diagrams, and revision handbooks",
    ],
    detailedInclusions: [
      {
        title: "NCERT-Centric Study Kits",
        description:
          "Concise chapter notes highlighting critical diagrams, tables, and past exam question triggers directly from NCERT textbooks.",
      },
      {
        title: "40,000+ Practice Question Library",
        description:
          "Comprehensive question sets covering statement-based, assertion-reasoning, and diagrammatic questions typical of current NEET trends.",
      },
      {
        title: "High-Frequency OMR Test Drills",
        description:
          "Simulated 3-hour 20-minute mock examinations that build rapid decision-making, speed, and endurance.",
      },
      {
        title: "Bio-Booster Revision Sessions",
        description:
          "High-yield revision marathons reviewing full syllabus botanical and zoological taxonomies before national exams.",
      },
    ],
    learningProcess: [
      {
        step: 1,
        title: "NCERT Grounding",
        description: "Establishing foundational grasp over every definition, diagram, and concept across Biology and Chemistry.",
      },
      {
        step: 2,
        title: "Physics Problem Fluency",
        description: "Overcoming fear of calculation through step-by-step formula derivations and targeted numerical workshops.",
      },
      {
        step: 3,
        title: "OMR Time Management",
        description: "Practicing fast question selection, negative mark prevention, and 180-minute pacing strategies.",
      },
      {
        step: 4,
        title: "Full-Syllabus Rank Acceleration",
        description: "Intensive grand tests simulating actual NEET exam atmosphere with rank benchmark analysis.",
      },
    ],
    variants: [
      {
        id: "neet-2yr",
        name: "2-Year Medical Classroom Program",
        duration: "2 Academic Years",
        mode: "Classroom Offline",
        targetClass: "Class 10 to 11 Moving",
        batchStatus: "Enrolling for New Session",
        keyInclusions: ["Classroom lectures", "Printed modules", "45+ OMR tests", "Biology diagram sessions", "Faculty mentorship"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
      {
        id: "neet-1yr",
        name: "1-Year Medical Target / Repeater Program",
        duration: "1 Academic Year",
        mode: "Classroom Offline",
        targetClass: "Class 12 Passed / Dropper",
        batchStatus: "Admissions Open",
        keyInclusions: ["Daily 6-hour intensive coaching", "Full syllabus review", "High-frequency test series", "One-on-one doubt desk"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
    ],
    faqs: [
      {
        question: "Is NCERT alone sufficient for NEET at Glorious Academy?",
        answer:
          "While NCERT forms 85-90% of NEET, our modules provide the conceptual bridges and challenging physics/physical chemistry numericals required to secure top government medical college ranks.",
      },
      {
        question: "How do you help students overcome weakness in Physics?",
        answer:
          "We offer foundational math bridge modules (calculus, vectors, trigonometry basics) and dedicated problem-solving workshops specifically designed for medical aspirants.",
      },
    ],
    centresAvailable: ["chandrapur", "bhadrawati"],
  },
  {
    slug: "mht-cet",
    title: "MHT-CET (PCM / PCB) Entrance Preparation",
    shortTitle: "MHT-CET",
    badge: "State Entrance",
    tagline: "Speed, accuracy, and Maharashtra State Board mastery for premier state engineering and pharmacy institutes.",
    summary:
      "A result-oriented program specifically tailored to Maharashtra State Board syllabus, focusing on high-speed mental calculations and comprehensive state CET mock testing.",
    academicCue: "state-entrance",
    colorTheme: {
      primary: "#2563EB",
      bgSubtle: "#EFF6FF",
      border: "#BFDBFE",
    },
    targetAudience: "Class 11 & 12 students targeting top engineering institutions in Maharashtra (COEP, VJTI, SPIT, PICT) and premier pharmacy colleges.",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    availableModes: ["Classroom Offline", "Integrated Board + CET Batch", "Test Series & Crash Course"],
    keySupportFeatures: [
      "Rigorous alignment with Maharashtra State Board textbooks",
      "Shortcuts and speed optimization techniques for 90-second questions",
      "Full-length CBT mock tests mimicking the exact CET CELL interface",
      "Chapter-wise weightage analysis and past 10 years CET question trends",
    ],
    detailedInclusions: [
      {
        title: "State Board Syllabus Deep Dive",
        description: "Detailed coverage of Class 11 (20% weightage) and Class 12 (80% weightage) state board syllabus.",
      },
      {
        title: "Speed Practice Question Bank",
        description: "15,000+ speed-oriented multiple-choice questions with zero negative marking exam strategies.",
      },
      {
        title: "Computer-Based CET Mock Portal",
        description: "Practice tests matching the official Maharashtra State CET computer screen layout and keyboard shortcuts.",
      },
      {
        title: "College Preference & Cutoff Guidance",
        description: "Expert counselling on college branch cutoffs across COEP, VJTI, and regional government engineering colleges.",
      },
    ],
    learningProcess: [
      {
        step: 1,
        title: "Board Text Alignment",
        description: "Systematic mastery of State Board chapters with thorough derivations and definitions.",
      },
      {
        step: 2,
        title: "Entrance Pattern Transition",
        description: "Applying conceptual knowledge to multiple choice question formats without negative marking penalties.",
      },
      {
        step: 3,
        title: "Speed Training",
        description: "Mental math drills and question skipping algorithms to maximize questions attempted per section.",
      },
      {
        step: 4,
        title: "Full Mock Simulations",
        description: "Timed testing replicating the morning and afternoon slot conditions of actual CET exam dates.",
      },
    ],
    variants: [
      {
        id: "cet-regular",
        name: "Class 12 + MHT-CET Comprehensive",
        duration: "1 Academic Year",
        mode: "Classroom Offline",
        targetClass: "Class 12 Students",
        batchStatus: "Enrolling Now",
        keyInclusions: ["Board + CET unified syllabus", "State board practice sheets", "30+ CBT tests", "Doubt clearing"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
      {
        id: "cet-crash",
        name: "Post-Board Intensive Crash Course",
        duration: "45–60 Days",
        mode: "Classroom Offline",
        targetClass: "Class 12 Board Appeared",
        batchStatus: "Opens Post Board Exams",
        keyInclusions: ["Daily full-syllabus test", "High-yield formula revision", "Previous 5 years paper discussion"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
    ],
    faqs: [
      {
        question: "How different is MHT-CET from JEE Main?",
        answer:
          "MHT-CET is based entirely on Maharashtra State Board textbooks and has no negative marking, placing greater premium on calculation speed and high question coverage.",
      },
      {
        question: "Can students prepare for both JEE and MHT-CET together at Glorious Academy?",
        answer:
          "Yes, our engineering batch curriculum covers JEE-level depth which automatically encompasses the MHT-CET syllabus, supplemented by specific CET speed mock sessions.",
      },
    ],
    centresAvailable: ["chandrapur", "bhadrawati"],
  },
  {
    slug: "boards",
    title: "Class 10 & 12 Board Foundation Program",
    shortTitle: "Class 10 & 12 Boards",
    badge: "School & Board Foundation",
    tagline: "Solid conceptual foundation, structured answer-writing, and academic excellence in Board examinations.",
    summary:
      "A supportive academic environment designed to help secondary and higher-secondary students achieve top marks in CBSE and Maharashtra State Board exams while nurturing competitive aptitude.",
    academicCue: "foundations",
    colorTheme: {
      primary: "#D97706",
      bgSubtle: "#FFFBEB",
      border: "#FDE68A",
    },
    targetAudience: "Students in Class 9, Class 10, Class 11, and Class 12 aiming for 90%+ in Board exams and building an early base for competitive exams.",
    subjects: ["Science (Physics, Chemistry, Biology)", "Mathematics", "English & Foundation Aptitude"],
    availableModes: ["Classroom Offline (Chandrapur & Bhadrawati)", "Weekend Support Batches"],
    keySupportFeatures: [
      "Rigorous adherence to NCERT and Maharashtra State Board curricula",
      "Subjective answer presentation workshops for step-mark scoring",
      "Regular fortnightly tests with detailed teacher feedback on answer sheets",
      "Parent-teacher review meetings to discuss holistic academic growth",
    ],
    detailedInclusions: [
      {
        title: "Standardized Chapter Workbooks",
        description: "Detailed step-by-step textbook solutions, exemplar problems, and concept summary notes.",
      },
      {
        title: "Answer-Writing Evaluation",
        description: "Teachers mark papers line by line to correct step omissions, diagrams, labels, and handwriting presentation.",
      },
      {
        title: "Pre-Board Simulation Exams",
        description: "Three rounds of full-syllabus pre-board examinations identical to official board exam question paper standards.",
      },
      {
        title: "Foundation Competitive Corner",
        description: "Introductory Olympiad and foundation reasoning problems to inspire early competitive readiness.",
      },
    ],
    learningProcess: [
      {
        step: 1,
        title: "Textbook Understanding",
        description: "Thorough classroom reading and explanation of textbook chapters before homework is assigned.",
      },
      {
        step: 2,
        title: "Stepwise Homework",
        description: "Daily homework correcting problem presentation and ensuring clarity in mathematical and scientific explanations.",
      },
      {
        step: 3,
        title: "Periodic Evaluation",
        description: "Writing tests under timed board conditions followed by parent-teacher performance consultations.",
      },
      {
        step: 4,
        title: "Final Pre-Board Drills",
        description: "Solving previous 10 years board question papers with exact marking schemes.",
      },
    ],
    variants: [
      {
        id: "board-10",
        name: "Class 10 Board Excellence Program",
        duration: "1 Academic Year",
        mode: "Classroom Offline",
        targetClass: "Class 10 (CBSE & State Board)",
        batchStatus: "Enrolling for New Session",
        keyInclusions: ["Science & Mathematics mastery", "Weekly answer checking", "3 full pre-board rounds", "Parent updates"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
      {
        id: "board-12",
        name: "Class 12 Board Booster Program",
        duration: "1 Academic Year",
        mode: "Classroom Offline",
        targetClass: "Class 12 (CBSE & State Board)",
        batchStatus: "Admissions Open",
        keyInclusions: ["Physics, Chemistry, Maths/Biology", "Numerical workshops", "Practical exam guidance", "Pre-board tests"],
        feeNotice: "Contact the academy for current fees, installment options, and batch availability.",
      },
    ],
    faqs: [
      {
        question: "Do you teach both CBSE and Maharashtra State Board?",
        answer:
          "Yes, we conduct distinct batches and provide tailored study materials specific to CBSE and Maharashtra State Board syllabi.",
      },
      {
        question: "How frequently are parents updated on student attendance and marks?",
        answer:
          "Parents receive prompt SMS / phone updates following every test, alongside scheduled one-on-one parent-teacher meetings every quarter.",
      },
    ],
    centresAvailable: ["chandrapur", "bhadrawati"],
  },
];
