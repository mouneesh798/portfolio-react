import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const AuroraBackground = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("relative w-full bg-background overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30 will-change-transform filter blur-[80px] animate-aurora
          bg-[repeating-linear-gradient(100deg,hsl(var(--primary))_10%,hsl(var(--secondary))_20%,hsl(var(--accent))_30%,hsl(var(--primary))_40%)]
          [background-size:300%_300%]
          [background-position:50%_50%]
          mix-blend-screen"
        />
      </div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
