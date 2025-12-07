# 👨‍💻 Dito Hafizh - Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/dito-hafizh/dito-hafizh.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/dito-hafizh/dito-hafizh.github.io/actions/workflows/deploy.yml)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)

Welcome to the source code of my personal website. This project serves as a minimal, single-page portfolio designed to showcase my experience in Mobile Engineering, Web Development, and Cloud Architecture.

**Live Site:** [https://dito-hafizh.github.io](https://dito-hafizh.github.io)

---

## 🚀 Tech Stack

This project uses the modern **Next.js App Router** with a fully static export configuration for GitHub Pages.

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS Variables & Theme)
* **Language:** TypeScript
* **Deployment:** GitHub Actions (CI/CD)

## 📂 Project Structure

A flat architecture where UI components and data are colocated within the `app` directory for easy access.

```bash
.
├── app/
│   ├── data/          # Static content (JSON/Objects)
│   ├── layout/        # Layout-specific components (Navbar, Footer)
│   ├── sections/      # Page sections (Hero, Experience, Projects)
│   ├── types/         # TypeScript interfaces & definitions
│   ├── ui/            # Reusable atomic components (Buttons, Cards)
│   ├── globals.css    # Global styles & Tailwind v4 theme
│   ├── layout.tsx     # Root layout structure
│   └── page.tsx       # The main entry page
├── public/            # Static assets (images, favicon)
├── next.config.ts     # Static export configuration
└── tailwind.config.ts # (Optional if using v4 CSS-only config)