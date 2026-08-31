import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <div className="flex min-h-dvh flex-col justify-center bg-bg-surface px-6 py-12 sm:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-8">
        <h1 className="text-2xl font-semibold text-text-primary">登录</h1>

        {/*
          TODO: Wire up Supabase Auth
          - Email/password sign-in
          - Error state below form
        */}
        <form
          className="flex flex-col gap-4"
          action="#"
          method="post"
          noValidate
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">邮箱</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">密码</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="mt-2">
            登录
          </Button>
        </form>
      </div>
    </div>
  );
}
