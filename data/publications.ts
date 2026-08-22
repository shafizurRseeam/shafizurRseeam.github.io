// ─────────────────────────────────────────────────────────────────────────────
//  PUBLICATIONS  ·  Newest first within each year.
//  Your name is bolded automatically via profile.authorVariants.
//  The title links to `href` (paper/arXiv/DOI). `code` / `slides` render as
//  separate buttons and only show up once you fill them in.
// ─────────────────────────────────────────────────────────────────────────────

export interface Publication {
  title:      string
  note?:      string        // e.g. "(Under Review)"
  authors:    string[]
  venue?:     string        // short bold tag, e.g. "PETs '26" — omit if unpublished
  venueFull?: string        // full venue name + location, shown in grey
  year:       number
  href?:      string        // primary link — clicking the title goes here
  code?:      string        // code repository
  slides?:    string        // slides / talk deck
  award?:     string        // e.g. "Best Paper Award Candidate"
}

export const publications: Publication[] = [

  // ══════════════════════════════════════════════════════════════ 2026 ══════

  {
    title: "PrivScope: Task-scoped Disclosure Control for Information-seeking Hybrid Agentic Systems",
    note:  "(Under Review)",
    authors: ["Shafizur Rahman Seeam", "Zhengxiong Li", "Zhiyuan Yu", "Yimin Chen", "Yidan Hu"],
    year: 2026,
    href: "https://arxiv.org/abs/2605.16630",
  },

  {
    title: "PrivAR: Client-Side Privacy Framework for Real-Time Location-Based Augmented Reality",
    authors: ["Shafizur Rahman Seeam", "Ye Zheng", "Zhengxiong Li", "Yidan Hu"],
    venue:     "ICDCS '26",
    venueFull: "46th IEEE International Conference on Distributed Computing Systems, Seoul, South Korea",
    year: 2026,
    href: "https://ieeexplore.ieee.org/document/11619161",
  },

  {
    title: "Frequency Estimation of Correlated Multi-attribute Data under Local Differential Privacy",
    authors: ["Shafizur Rahman Seeam", "Ye Zheng", "Yidan Hu"],
    venue:     "PoPETs '26",
    venueFull: "Proceedings on Privacy Enhancing Technologies — presented at PETS 2026, Calgary, Canada",
    year: 2026,
    href: "https://petsymposium.org/popets/2026/popets-2026-0034.php",
  },

  // ══════════════════════════════════════════════════════════════ 2025 ══════

  {
    title: "Locally Differentially Private Frequency Estimation via Joint Randomized Response",
    authors: ["Ye Zheng", "Shafizur Rahman Seeam", "Yidan Hu", "Rui Zhang", "Yanchao Zhang"],
    venue:     "PoPETs '25",
    venueFull: "Proceedings on Privacy Enhancing Technologies — presented at PETS 2025, Washington, DC",
    year: 2025,
    href: "https://petsymposium.org/popets/2025/popets-2025-0097.php",
  },

  // ══════════════════════════════════════════════════════════════ 2024 ══════

  {
    title: "A Black-Box Approach for Quantifying Leakage of Trace-Based Correlated Data",
    authors: ["Shafizur Rahman Seeam", "Zhengxiong Li", "Yidan Hu"],
    venue:     "PICASSO @ MobiCom '24",
    venueFull: "7th International Workshop on Physics Embedded AI Solutions in Mobile Computing, ACM MobiCom 2024",
    year: 2024,
    href:"https://dl.acm.org/doi/10.1145/3636534.3694722",
  },

  // ══════════════════════════════════════════════════════════════ 2019 ══════

  {
    title: "Ensuring Cybersecure Telemetry and Telecommand in Small Satellites: Recent Trends and Empirical Propositions",
    authors: ["Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Mosabber Uddin Ahmed", "Subrata Kumar Aditya"],
    venue:     "IEEE AESM '19",
    venueFull: "IEEE Aerospace and Electronic Systems Magazine, vol. 34, no. 8, pp. 34–49",
    year: 2019,
    href:"https://ieeexplore.ieee.org/abstract/document/8799064",
  },

  {
    title: "Position Independent Activity Recognition Using Shallow Neural Architecture and Empirical Modeling",
    authors: [
      "Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Zarin Rezwana Ridita Haque",
      "Tahera Hossain", "Sozo Inoue", "Md Atiqur Rahman Ahad",
    ],
    venue:     "UbiComp/ISWC '19",
    venueFull: "ACM International Joint Conference on Pervasive and Ubiquitous Computing",
    year: 2019,
    href:"https://dl.acm.org/doi/abs/10.1145/3341162.3345572",
  },

  // ══════════════════════════════════════════════════════════════ 2018 ══════

  {
    title: "Supervised and Neural Classifiers for Locomotion Analysis",
    authors: [
      "Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Miftahul Jannat Rasna",
      "Tahera Hossain", "Sozo Inoue", "Md Atiqur Rahman Ahad",
    ],
    venue:     "UbiComp '18",
    venueFull: "ACM International Joint Conference on Pervasive and Ubiquitous Computing, pp. 1563–1570",
    year: 2018,
    href:"https://dl.acm.org/doi/10.1145/3267305.3267524",
  },

  {
    title: "Feature Extraction, Performance Analysis and System Design Using the DU Mobility Dataset",
    authors: [
      "Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Miftahul Jannat Rasna",
      "Tarek Bin Zahid", "AKM Mahfuzul Islam", "Md Atiqur Rahman Ahad",
    ],
    venue:     "IEEE Access '18",
    venueFull: "IEEE Access, vol. 6, pp. 44776–44786",
    year: 2018,
    href:"https://ieeexplore.ieee.org/document/8434226",
  },

  {
    title: "DU-MD: An Open-Source Human Action Dataset for Ubiquitous Wearable Sensors",
    authors: [
      "Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Miftahul Jannat Rasna",
      "AKM Mahfuzul Islam", "Md Atiqur Rahman Ahad",
    ],
    venue:     "ICIEV '18",
    venueFull: "7th International Conference on Informatics, Electronics & Vision, Kitakyushu, Japan, pp. 567–572",
    year: 2018,
    href:"https://ieeexplore.ieee.org/document/8641051",
    award: "Best Paper Award Candidate",
  },
]
