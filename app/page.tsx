export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-bg-app">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 py-24">
        <p className="font-mono text-xs font-semibold tracking-[0.14em] text-text-muted uppercase">
          Stock Screener with Luo in Class 4
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          Ready when you are
        </h1>
        <p className="text-lg leading-8 text-text-secondary">
          颜色系统和目录结构已就绪。从{" "}
          <code className="rounded bg-bg-surface px-1.5 py-0.5 font-mono text-sm text-text-primary ring-1 ring-border">
            app/page.tsx
          </code>{" "}
          开始构建功能。
        </p>
      </div>
    </main>
  );
}
