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
    url:  "https://yidanhu.csec.rit.edu/",
  },

  // ── Bio (used in Biography section) ──────────────────────────────────────
  bio: `Hi! I'm Shafizur Rahman Seeam, a PhD student in the Department of Cybersecurity at the Rochester Institute of Technology, advised by Dr. Yidan Hu.

My research focuses on differential privacy and privacy-preserving agents — building systems that allow useful data analysis and AI assistance without compromising individual user privacy. I'm broadly interested in how rigorous privacy guarantees can be designed into the next generation of intelligent systems, from mobile sensing to LLM-based agents.

Feel free to reach out at ss6365@rit.edu — I'm always happy to chat about research, collaborations, or anything privacy-related.`,

  // ── Research interests ─────────────────────────────────────────────────────
  interests: [
    "Privacy-Enhancing Technologies",
    "Differential Privacy",
    "AI Agent Privacy",
  ],

  // ── Social / contact ──────────────────────────────────────────────────────
  social: {
    email:         "ss6365@rit.edu",
    github:        "https://github.com/shafizurRseeam",
    googleScholar: "https://scholar.google.com/citations?user=8wPqG7cAAAAJ&hl=en",
    linkedin:      "https://www.linkedin.com/in/shafizurrahmanseeam/",
    twitter:       "",
  },

  // ── CV / Resume ───────────────────────────────────────────────────────────
  cv: "/CV_august.pdf",

  // ── News ──────────────────────────────────────────────────────────────────
  news: [
    {
      date: "Jul 2026",
      bold: "PETS 2026:",
      text: "Received the Student Travel Stipend Award.",
      link: { label: "", href: "" },
    },
    {
      date: "Jun 2026",
      bold: "ICDCS '26:",
      text: "PrivAR accepted — a client-side privacy framework for real-time location-based augmented reality.",
      link: { label: "arXiv", href: "https://arxiv.org/abs/2508.02551" },
    },
    {
      date: "May 2026",
      bold: "New preprint:",
      text: "PrivScope: Task-scoped Disclosure Control for Information-seeking Hybrid Agentic Systems.",
      link: { label: "arXiv", href: "https://arxiv.org/abs/2605.16630" },
    },
    {
      date: "Mar 2026",
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
      period:         "Jan 2023 – May 2027 (expected)",
      degree:         "Ph.D. in Computer and Information Sciences",
      advisor:        { label: "Dr. Yidan Hu", href: "https://yidanhu.csec.rit.edu/" },
    },
    {
      institution:    "University of Dhaka",
      institutionUrl: "https://www.du.ac.bd",
      period:         "Jan 2015 – Dec 2019",
      degree:         "B.Sc. in Electrical and Electronic Engineering",
    },
  ],

  // ── Research experience ──────────────────────────────────────────────────
  research: [
    {
      role:        "Graduate Research Assistant",
      institution: "Rochester Institute of Technology",
      period:      "Jan 2023 – Present",
      advisor:     { label: "Dr. Yidan Hu", href: "https://yidanhu.csec.rit.edu/" },
      items: [
        { label: "Privacy-preserving agentic systems", text: "User-side disclosure control for hybrid local–cloud agents." },
        { label: "Differential privacy", text: "Dependence-aware mechanisms for multi-attribute frequency estimation under LDP." },
        { label: "Location privacy", text: "Client-side mechanisms for real-time, latency-sensitive AR location reporting." },
      ],
    },
  ],

  // ── Professional experience ──────────────────────────────────────────────
  professional: [
    {
      role:          "Co-Founder & Director",
      institution:   "Orboroi AB",
      institutionUrl: "https://orboroi.com/",
      location:      "Stockholm, Sweden",
      period:        "Jul 2021 – Present",
      items: [
        "Lead Bangladesh operations, including team coordination, client engagement, and project delivery.",
        "Oversee financial operations, including cash flow, payments, and expense control.",
        "Deploy and maintain the company website, database, CVAT platform, and Linux servers.",
      ],
    },
  ],

  // ── Awards ────────────────────────────────────────────────────────────────
  awards: [
    {
      title:       "PETS 2026 Student Travel Stipend Award",
      venue:       "PETS Award Committee, 2026",
      description: "",
      link: "",
    },
    {
      title:       "Best Paper Award Candidate",
      venue:       "ICIEV 2018, Kitakyushu, Japan",
      description: "",
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
      venue:       "2015 & 2017",
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
  ],

  // ── Teaching ──────────────────────────────────────────────────────────────
  teaching: [
    {
      role:        "Instructor",
      upcoming:    true,
      institution: "Rochester Institute of Technology",
      location:    "Rochester, NY",
      period:      "Spring 2027",
      items: [
        "Authentication and Security Models (CSEC 472) — primary instructor for ~35 students, full responsibility for course design, lectures, labs, project supervision, and assessment.",
      ],
    },
    {
      role:        "Graduate Teaching Assistant",
      institution: "Rochester Institute of Technology",
      location:    "Rochester, NY",
      period:      "Aug 2024 – Present",
      items: [
        "Advanced Data Privacy (CSEC 721) — Spring 2026",
        "Authentication and Security Models (CSEC 472) — Fall 2024, Spring 2025, Fall 2025, Fall 2026",
        "Graduate Seminar in Computing Security (CSEC 759) — Spring 2025",
      ],
    },
  ],

  // ── Misc ──────────────────────────────────────────────────────────────────
  misc: [
    {
      title: "Academic & Professional Service",
      items: [
        "Judge, GENIUS Olympiad international high-school project competition, 2023 and 2024.",
      ],
    },
    {
      title: "Technical Skills",
      items: [
        "Programming & AI: Python, Kotlin, SQL, MATLAB, TensorFlow, LangChain, Ollama",
        "Systems & Tools: Linux, Node.js, MongoDB, Android, CVAT, Git, LaTeX",
      ],
    },
  ],
}
