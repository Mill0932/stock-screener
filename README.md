# Stock Screener

A Next.js starter for building a stock screener app. Includes a Tailwind-based color system, semantic design tokens, and a starter folder structure.

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

1. Click **Use this template** on GitHub to create a new repository.
2. Clone your new repo and open it locally.
3. Install tooling and dependencies:

```bash
# Install Node and pnpm (versions pinned in mise.toml)
mise install

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. Edit `app/page.tsx` to get started — changes hot-reload automatically.

## Scripts

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `pnpm dev`          | Start development server                       |
| `pnpm build`        | Build for production                           |
| `pnpm start`        | Run production build                           |
| `pnpm lint`         | Run ESLint                                     |
| `pnpm typecheck`    | Generate Next types and run `tsc --noEmit`     |
| `pnpm format`       | Format code with Prettier                      |
| `pnpm format:check` | Check formatting without writing               |
| `pnpm check`        | Run format check, lint, and typecheck together |

## Project structure

```
app/                    # Routes, layouts, and global styles
components/
  layout/               # App shell, header, navigation
  screener/             # Stock screener domain components
  ui/                   # Reusable UI primitives
lib/                    # Helpers, colors, market convention
types/                  # Shared TypeScript types
public/                 # Static assets
```

Design tokens live in `app/globals.css`. See `lib/colors.ts` for semantic Tailwind class references.

## Deploy

This template works well with [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
