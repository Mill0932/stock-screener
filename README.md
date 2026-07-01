# Next.js Start Template

A minimal starter template for building Next.js apps. Clone it, install dependencies, and start building.

## What's included

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [mise](https://mise.jdx.dev) for Node and pnpm version management
- [pnpm](https://pnpm.io) as the package manager

## Prerequisites

Install [mise](https://mise.jdx.dev/getting-started.html) and enable the shell hook:

```bash
# macOS (Homebrew)
brew install mise

# Add to ~/.zshrc (or your shell config)
eval "$(mise activate zsh)"
```

## Getting started

```bash
# 1. Clone the repo
git clone <your-repo-url> my-app
cd my-app

# 2. Install Node and pnpm (versions pinned in mise.toml)
mise install

# 3. Install dependencies
pnpm install

# 4. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. Edit `app/page.tsx` to get started — changes hot-reload automatically.

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `pnpm dev`          | Start development server           |
| `pnpm build`        | Build for production               |
| `pnpm start`        | Run production build               |
| `pnpm lint`         | Run ESLint                         |
| `pnpm format`       | Format code with Prettier          |
| `pnpm format:check` | Check formatting without writing   |
| `pnpm check`        | Run format check and lint together |

## Project structure

```
app/
  layout.tsx    # Root layout
  page.tsx      # Home page
  globals.css   # Global styles (Tailwind)
public/         # Static assets
```

## Deploy

This template works well with [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
