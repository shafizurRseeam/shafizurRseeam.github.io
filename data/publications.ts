// ─────────────────────────────────────────────────────────────────────────────
//  PUBLICATIONS  ·  Newest first within each year.
//  Your name is bolded automatically via profile.authorVariants.
// ─────────────────────────────────────────────────────────────────────────────

export interface PubLink {
  label: string
  href:  string
}

export interface Publication {
  title:      string
  note?:      string        // e.g. "(Under Review)"
  authors:    string[]
  venue:      string        // short bold tag, e.g. "PETs '26"
  venueFull?: string        // full venue name in italic
  year:       number
  links?:     PubLink[]
  abstract?:  string
  award?:     string        // e.g. "Best Paper Award Candidate"
}

export const publications: Publication[] = [

  // ══════════════════════════════════════════════════════════════ 2026 ══════

  {
    title: "PrivScope: Task-scoped Disclosure Control for Hybrid Agentic Systems",
    authors: ["Shafizur Rahman Seeam", "Zhengxiong Li", "Zhiyuan Yu", "Yidan Hu"],
    venue:     "arXiv",
    venueFull: "arXiv preprint arXiv:2605.16630",
    year: 2026,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2605.16630" }],
    abstract: "We propose PrivScope, a framework for task-scoped disclosure control in hybrid agentic systems, ensuring that LLM-based agents reveal only information necessary for the current task while preserving user privacy across multi-step interactions.",
  },

  {
    title: "Frequency Estimation of Correlated Multi-attribute Data under Local Differential Privacy",
    authors: ["Shafizur Rahman Seeam", "Ye Zheng", "Yidan Hu"],
    venue:     "PETs '26",
    venueFull: "Privacy Enhancing Technologies Symposium, Canada, July 2026",
    year: 2026,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2507.17516" }],
    abstract: "We study frequency estimation of correlated multi-attribute data under local differential privacy (LDP), proposing mechanisms that exploit attribute correlations to improve utility while maintaining rigorous LDP guarantees.",
  },

  // ══════════════════════════════════════════════════════════════ 2025 ══════

  {
    title: "PrivAR: Real-Time Privacy Protection for Location-Based Augmented Reality Applications",
    note:  "(Under Review)",
    authors: ["Shafizur Rahman Seeam", "Ye Zheng", "Zhengxiong Li", "Yidan Hu"],
    venue:     "arXiv",
    venueFull: "arXiv preprint arXiv:2508.02551",
    year: 2025,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2508.02551" }],
    abstract: "PrivAR provides real-time, location-privacy protection for augmented reality applications, allowing AR services to deliver immersive experiences without exposing precise user location traces.",
  },

  {
    title: "Locally Differentially Private Frequency Estimation via Joint Randomized Response",
    authors: ["Ye Zheng", "Shafizur Rahman Seeam", "Yidan Hu", "Rui Zhang", "Yanchao Zhang"],
    venue:     "PETs '25",
    venueFull: "Privacy Enhancing Technologies Symposium, Washington DC & Online, July 2025",
    year: 2025,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2505.10349" }],
    abstract: "A joint randomized response scheme for locally differentially private frequency estimation that improves accuracy over existing baselines.",
  },

  // ══════════════════════════════════════════════════════════════ 2024 ══════

  {
    title: "A Black-Box Approach for Quantifying Leakage of Trace-Based Correlated Data",
    authors: ["Shafizur Rahman Seeam", "Zhengxiong Li", "Yidan Hu"],
    venue:     "MobiCom '24",
    venueFull: "7th International Workshop on Physics Embedded AI Solutions in Mobile Computing (Picasso Workshop, MobiCom 2024)",
    year: 2024,
    links: [],
    abstract: "We introduce a black-box methodology for quantifying privacy leakage in trace-based correlated data, enabling practitioners to audit privacy mechanisms without access to internal model details.",
  },

  // ══════════════════════════════════════════════════════════════ 2019 ══════

  {
    title: "Ensuring Cybersecure Telemetry and Telecommand in Small Satellites: Recent Trends and Empirical Propositions",
    authors: ["Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Mosabber Uddin Ahmed", "Subrata Kumar Aditya"],
    venue:     "IEEE AESM '19",
    venueFull: "IEEE Aerospace and Electronic Systems Magazine, vol. 34, no. 8, pp. 34–49",
    year: 2019,
    links: [],
  },

  {
    title: "Position Independent Activity Recognition Using Shallow Neural Architecture and Empirical Modeling",
    authors: [
      "Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Zarin Rezwana Ridita Haque",
      "Tahera Hossain", "Sozo Inoue", "Md Atiqur Rahman Ahad",
    ],
    venue:     "UbiComp '19",
    venueFull: "ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp/ISWC '19)",
    year: 2019,
    links: [],
  },

  // ══════════════════════════════════════════════════════════════ 2018 ══════

  {
    title: "Supervised and Neural Classifiers for Locomotion Analysis",
    authors: [
      "Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Miftahul Jannat Rasna",
      "Tahera Hossain", "Sozo Inoue", "Md Atiqur Rahman Ahad",
    ],
    venue:     "UbiComp '18",
    venueFull: "ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp '18), pp. 1563–1570",
    year: 2018,
    links: [],
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
    links: [],
  },

  {
    title: "DU-MD: An Open-Source Human Action Dataset for Ubiquitous Wearable Sensors",
    authors: [
      "Swapnil Sayan Saha", "Shafizur Rahman Seeam", "Miftahul Jannat Rasna",
      "AKM Mahfuzul Islam", "Md Atiqur Rahman Ahad",
    ],
    venue:     "ICIEV '18",
    venueFull: "7th International Conference on Informatics, Electronics & Vision (ICIEV), Kitakyushu, Japan, pp. 567–572",
    year: 2018,
    links: [],
    award: "Best Paper Award Candidate",
  },
]
