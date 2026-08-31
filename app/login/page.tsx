import type { Metadata } from "next";

import { LoginPageLayout } from "@/components/auth/login-page-layout";

export const metadata: Metadata = {
  title: "登录 · Stock Screener",
  description: "登录 Stock Screener 账户",
};

export default function LoginPage() {
  return <LoginPageLayout />;
}
