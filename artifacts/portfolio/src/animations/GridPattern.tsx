import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  size?: number;
}

export function GridPattern({ className, size = 40 }: GridPatternProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none z-[-1] [mask-image:linear-gradient(to_bottom,white,transparent)]", 
        className
      )}
    >
      <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"
        style={{ backgroundSize: `${size}px ${size}px` }}
      />
    </div>
  );
}
