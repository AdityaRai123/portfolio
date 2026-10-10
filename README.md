# Aditya Rai — The Series

A cinematic, streaming-inspired portfolio for **Aditya Rai**: Full-Stack & AI Developer and B.Tech Information Technology student at VIT Vellore.
Every section is an episode, every project is an Original, and the whole site plays like a series.

**Live site:** https://adityarai123.github.io/portfolio/

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with any streaming service and uses none of their logos.

## Featured projects

| Original | What it is | Links |
| --- | --- | --- |
| **AgentFlow AI** | 6-agent LangGraph + Gemini market intelligence platform with RAG | [Live](https://agent-flow-ten-topaz.vercel.app) · [Code](https://github.com/AdityaRai123/AgentFlow) |
| **QuantPredict** | Multi-model stock direction prediction (ML, LSTM, ViT, ensemble voting) | [Live](https://quantpredict.netlify.app) · [Code](https://github.com/AdityaRai123/Quantpredict) |
| **PolyLearn** | Multi-language learning app with teacher-built, server-graded tests | [Live](https://poly-learn.netlify.app/auth) · [Code](https://github.com/AdityaRai123/polylearn) |
| **Smart Image Enhancer** | Explainable, adaptive image enhancement with optional Real-ESRGAN | [Live](https://smart-image-enhancement.streamlit.app) · [Code](https://github.com/AdityaRai123/smart-image-enhancement) |

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deployment

Every push to `main` builds the site with GitHub Actions and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves at `/portfolio/` (the base path is set in `vite.config.ts`).

## Updating the content

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — profile, projects, education, experience, achievements, certifications, skills, journey seasons and top picks.

**Videos:** `public/assets/intro.mp4` plays when you press ▶ Play Intro, and each project has its own animated explainer episode in `public/assets/videos/` (opened with ▶ Play Episode on the project card or in the project details).

- **Resume:** replace `public/assets/Aditya_Rai_Resume.pdf`.
- **Certificates:** stored in `public/assets/certificates/`.
- **Photo:** replace `pic1.jpeg` (photo) and `pic.png` (background-removed cutout, same framing), then run `npm run images`.

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Contact

- Email: adityarai11112005@gmail.com
- LinkedIn: https://linkedin.com/in/aditya-rai-324b30275
- GitHub: https://github.com/AdityaRai123
