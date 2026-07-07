import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-white flex items-center gap-2 mb-2">
              <Code2 className="h-5 w-5 text-primary" />
              {PORTFOLIO_DATA.hero.name}
            </span>
            <p className="text-muted-foreground text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <p className="text-sm text-white/30 font-mono">
            &copy; {currentYear} All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
