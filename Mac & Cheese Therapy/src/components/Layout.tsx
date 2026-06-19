import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function Layout({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
