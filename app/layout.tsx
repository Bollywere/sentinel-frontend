import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "SoroSentinel",
  description: "AI-agent risk monitoring for Soroban contracts",
};

// TODO(#issue): no shared nav/header component yet, no dark mode toggle.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
