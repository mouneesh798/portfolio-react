import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingIconsProps {
  icons: React.ElementType[];
  className?: string;
}

export function FloatingIcons({ icons, className }: FloatingIconsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {icons.map((Icon, idx) => {
        // Random starting positions
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDuration = 15 + Math.random() * 20;
        const randomDelay = Math.random() * -20;
        
        return (
          <motion.div
            key={idx}
            className="absolute text-muted-foreground/20 text-4xl"
            initial={{ x: `${randomX}vw`, y: `${randomY}vh`, rotate: 0 }}
            animate={{
              x: [`${randomX}vw`, `${randomX + (Math.random() * 10 - 5)}vw`, `${randomX}vw`],
              y: [`${randomY}vh`, `${randomY + (Math.random() * 10 - 5)}vh`, `${randomY}vh`],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
}
