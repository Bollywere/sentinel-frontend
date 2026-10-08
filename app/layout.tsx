import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Stellar Sentinel | Stellar risk intelligence",
  description:
    "Stellar Sentinel is an early-stage project exploring explainable activity signals and Soroban workflows for understanding risk across Stellar.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
