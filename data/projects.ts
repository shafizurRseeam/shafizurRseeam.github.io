// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS DATA  ·  Add / edit your projects here
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  title: string
  description: string
  tags: string[]              // Technology / topic tags shown as badges
  image?: string              // Path relative to public/ e.g. "/projects/my-project.png"
  github?: string             // GitHub repo URL
  demo?: string               // Live demo URL
  paper?: string              // Link to related paper
  status?: "active" | "completed" | "archived"
}

export const projects: Project[] = [
  {
    title: "[Project Name — edit me]",
    description:
      "[Describe what this project does, what problem it solves, and what makes it interesting. Keep it to 2–3 sentences.]",
    tags: ["Python", "PyTorch", "Machine Learning"],
    github: "https://github.com/shafizurRseeam/your-project",
    status: "active",
  },
  {
    title: "[Another Project — edit me]",
    description:
      "[Brief description of your second project. You can mention the tech stack, dataset, or research goal.]",
    tags: ["NLP", "Transformers", "HuggingFace"],
    github: "https://github.com/shafizurRseeam/another-project",
    paper:  "https://arxiv.org/abs/XXXX.XXXXX",
    status: "completed",
  },
]
