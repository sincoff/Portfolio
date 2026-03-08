# Ian Sincoff — Portfolio

Personal developer portfolio built with Next.js (App Router), shadcn/ui, and Tailwind CSS. Dark-themed, minimal, and professional.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS, shadcn/ui
- **3D:** Spline (via @splinetool/react-spline)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Deploy on Netlify

1. Push this repo to GitHub.
2. In [Netlify](https://app.netlify.com), create a **New site from Git** and connect the repository.
3. Build settings (auto-detected via `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (or leave blank; the Next.js plugin handles it)
4. Deploy.

The site uses [@netlify/plugin-nextjs](https://github.com/netlify/netlify-plugin-nextjs) for Next.js support on Netlify.
