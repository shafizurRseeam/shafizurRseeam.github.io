// ─────────────────────────────────────────────────────────────────────────────
//  PROFILE DATA  ·  Single source of truth — edit here to update the whole site
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {

  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Shafizur Rahman Seeam",

  authorVariants: [
    "Shafizur Rahman Seeam",
    "Seeam, Shafizur Rahman",
    "S. R. Seeam",
  ],

  title:          "PhD Student",
  department:     "Department of Cybersecurity",
  college:        "Golisano College of Computing and Information Sciences",
  affiliation:    "Rochester Institute of Technology",
  affiliationUrl: "https://www.rit.edu",
  location:       "Rochester, NY, USA",

  // ── Advisor ───────────────────────────────────────────────────────────────
  advisor: {
    name: "Dr. Yidan Hu",
    url:  "https://yidanhu.csec.rit.edu/",   // ← add advisor's webpage URL
  },

  // ── Bio (used in Biography section) ──────────────────────────────────────
  bio: `Hi! I'm Shafizur Rahman Seeam, a PhD student in the Department of Cybersecurity at the Rochester Institute of Technology, advised by Dr. Yidan Hu.

My research focuses on differential privacy and privacy-preserving agents — building systems that allow useful data analysis and AI assistance without compromising individual user privacy. I'm broadly interested in how rigorous privacy guarantees can be designed into the next generation of intelligent systems, from mobile sensing to LLM-based agents.

Feel free to reach out at ss6365@rit.edu — I'm always happy to chat about research, collaborations, or anything privacy-related.`,

  // ── Research interests ─────────────────────────────────────────────────────
  interests: [
    "Privacy-preserving Agentic Systems",
    "Differential Privacy",
  ],

  // ── Social / contact ──────────────────────────────────────────────────────
  social: {
    email:         "ss6365@rit.edu",
    github:        "ShafizurRahmanSeeam",
    // To find your Scholar URL: go to scholar.google.com → My Profile → copy the URL
    // It looks like: https://scholar.google.com/citations?user=XXXXXXXXX
    googleScholar: "https://scholar.google.com/citations?user=8wPqG7cAAAAJ&hl=en",   // ← paste your full Scholar URL here
    linkedin:      "https://www.linkedin.com/in/shafizurrahmanseeam/",
    twitter:       "",
  },

  // ── CV / Resume ───────────────────────────────────────────────────────────
  cv: "/cv.pdf",    // drop your PDF into public/ as cv.pdf

  // ── News ──────────────────────────────────────────────────────────────────
  news: [
    {
      date: "May 2026",
      bold: "New preprint:",
      text: "PrivScope: Task-scoped Disclosure Control for Hybrid Agentic Systems.",
      link: { label: "arXiv", href: "https://arxiv.org/abs/2605.16630" },
    },
    {
      date: "Jul 2026",
      bold: "PETs '26:",
      text: "Paper accepted — Frequency Estimation of Correlated Multi-attribute Data under LDP.",
      link: { label: "arXiv", href: "https://arxiv.org/abs/2507.17516" },
    },
    {
      date: "Aug 2025",
      bold: "New preprint:",
      text: "PrivAR: Real-Time Privacy Protection for Location-Based Augmented Reality Applications.",
      link: { label: "arXiv", href: "https://arxiv.org/abs/2508.02551" },
    },
    {
      date: "Jul 2025",
      bold: "PETs '25:",
      text: "Locally Differentially Private Frequency Estimation via Joint Randomized Response.",
      link: { label: "arXiv", href: "https://arxiv.org/abs/2505.10349" },
    },
    {
      date: "Oct 2024",
      bold: "MobiCom '24:",
      text: "A Black-Box Approach for Quantifying Leakage of Trace-Based Correlated Data — Picasso Workshop.",
      link: { label: "", href: "" },
    },
  ],

  // ── Biography (education history) ─────────────────────────────────────────
  biography: [
    {
      institution:    "Rochester Institute of Technology",
      institutionUrl: "https://www.rit.edu",
      period:         "Jan 2023 – Present",
      items: [
        { text: "Ph.D. in Computer and Information Sciences, advised by ", link: { label: "Dr. Yidan Hu", href: "https://yidanhu.csec.rit.edu/" } },
        { text: "Research Interests: Privacy-preserving Agentic System, Prompt Privacy, Differential Privacy" },
        { text: "Coursework: Software Engineering, Random Noise and Signals, Statistical Machine Learning, Cyberinfrastructure Foundations, Quantitative Foundations" },
      ],
    },
    {
      institution:    "University of Dhaka",
      institutionUrl: "https://www.du.ac.bd",
      period:         "Jan 2015 – Dec 2019",
      items: [
        { text: "B.Sc. in Electrical and Electronic Engineering" },
        { text: "Thesis 1: Feature Extraction and Semi-Supervised Learning in a Wrist Mounted Motion Detection System for Elderly Citizens" },
        { text: "Thesis 2: Addressing Security Vulnerabilities of Cyberphysical Remote-Sensing Small Satellite Systems" },
      ],
    },
  ],

  // ── Awards ────────────────────────────────────────────────────────────────
  awards: [
    {
      title:       "Best Paper Award Candidate",
      venue:       "ICIEV 2018, Kitakyushu, Japan",
      description: 'For "DU-MD: An Open-Source Human Action Dataset for Ubiquitous Wearable Sensors".',
      link: "",
    },
    {
      title:       "3rd Place — Digital Khichuri Challenge",
      venue:       "UNDP & ICT Division, Bangladesh, 2017",
      description: "",
      link: "",
    },
    {
      title:       "1st & 2nd Place — Bangladesh Electronics Olympiad Project Competition",
      venue:       "2015 and 2017",
      description: "",
      link: "",
    },
    {
      title:       "Champion in Project Showcasing (Junior)",
      venue:       "EEE Day 2015 & 2016, BUET",
      description: "",
      link: "",
    },
    {
      title:       "Runner Up — Project Showcasing",
      venue:       "Mecceleration 2015, IUT",
      description: "",
      link: "",
    },
    {
      title:       "Junior Scholarship",
      venue:       "2008",
      description: "",
      link: "",
    },
  ],

  // ── Teaching ──────────────────────────────────────────────────────────────
  teaching: [
    {
      role:        "Graduate Teaching Assistant",
      institution: "Rochester Institute of Technology",
      location:    "Rochester, NY",
      period:      "Aug 2024 – Present",
      items: [
        "Teaching Assistant — Authentication and Security Models (Fall 2024, Spring 2025, Fall 2025); assisted in course design, developed lab assignments, and graded student submissions.",
        "Teaching Assistant — Graduate Seminar in Computing and Security (Spring 2025).",
      ],
    },
  ],

  // ── Misc ──────────────────────────────────────────────────────────────────
  misc: [
    {
      title: "Experience",
      items: [
        "Graduate Research Assistant, RIT (Jan 2023 – Present) · Advisor: Dr. Yidan Hu",
        "Operations Manager & Director, Orboroi AB, Stockholm, Sweden (Jul 2021 – Present)",
      ],
    },
    {
      title: "Skills",
      items: [
        "Programming: Python, SQL, Matlab",
        "Tools & Frameworks: TensorFlow, Android Studio",
      ],
    },
    {
      title: "Certificates",
      items: [
        "Deep Learning Specialization — Coursera / DeepLearning.AI (Feb–Jul 2020)",
        "TensorFlow Developer Specialization — Coursera / DeepLearning.AI (Aug–Nov 2020)",
        "Mathematics for Machine Learning: Linear Algebra & Multivariate Calculus — Coursera / Imperial College London (Jan–Feb 2021)",
      ],
    },
    {
      title: "Extracurricular",
      items: [
        "Genius Olympiad Judge (2023, 2024) — International high school environmental project competition, organized by Terra Science and Education, hosted by RIT",
      ],
    },
  ],
}
