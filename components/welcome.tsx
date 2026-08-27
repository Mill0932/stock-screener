export function Welcome() {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
        Next.js Start Template
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Ready when you are
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Edit{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          app/page.tsx
        </code>{" "}
        to get started. Add shared UI under{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          components/
        </code>{" "}
        and helpers under{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          lib/
        </code>
        .
      </p>
    </section>
  );
}
