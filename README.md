# Personal Academic Webpage

Built from scratch with **Next.js 14** + **Tailwind CSS**, deployed to [shafizurRseeam.github.io](https://shafizurRseeam.github.io).

## 🗂 File structure

```
├── app/
│   ├── layout.tsx           ← Root layout (navbar, footer, theme)
│   ├── page.tsx             ← About / Home page
│   ├── publications/page.tsx
│   └── projects/page.tsx
├── components/              ← Reusable UI components
├── data/
│   ├── profile.ts           ← ✏️ YOUR INFO — edit this first
│   ├── publications.ts      ← ✏️ YOUR PAPERS
│   └── projects.ts          ← ✏️ YOUR PROJECTS
├── public/
│   └── profile.jpg          ← Drop your photo here
└── .github/workflows/deploy.yml  ← Auto-deploy on push to main
```

## ✏️ How to customize

1. **Fill in your info** — open `data/profile.ts` and replace everything inside `[brackets]`
2. **Add publications** — edit `data/publications.ts`
3. **Add projects** — edit `data/projects.ts`
4. **Add your photo** — put `profile.jpg` in `public/`
5. **Add your CV** — put `cv.pdf` in `public/`

## 🚀 Local development

```bash
npm install
npm run dev       # → http://localhost:3000
```

## 🌐 Deployment (GitHub Pages)

1. Create a new GitHub repo named exactly `shafizurRseeam.github.io`
2. Push this code to the `main` branch
3. Go to **Settings → Pages** and set Source to **GitHub Actions**
4. Push any change — the workflow auto-builds and deploys

## 🌙 Dark mode

The site respects the user's OS preference and remembers their toggle choice in `localStorage`.
