import { LoginForm } from "@/components/auth/login-form";
import { LoginHeroPanel } from "@/components/auth/login-hero-panel";

export function LoginPageLayout() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-2">
      <LoginHeroPanel />
      <LoginForm />
    </main>
  );
}
