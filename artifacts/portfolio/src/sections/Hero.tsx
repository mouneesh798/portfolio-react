import { useRef, useState } from "react";
import { AuroraBackground } from "@/animations/AuroraBackground";
import { WordRotate } from "@/animations/WordRotate";
import { Meteors } from "@/animations/Meteors";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

function MagneticLink({
  href,
  children,
  className,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (left + width / 2)) * 0.4,
      y: (e.clientY - (top + height / 2)) * 0.4,
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <AuroraBackground className="absolute inset-0 z-0">
        <Meteors number={15} />
      </AuroraBackground>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Available for new opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
        >
          {PORTFOLIO_DATA.hero.name}
        </motion.h1>

        {/* Rotating title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl text-white/70 font-medium h-[44px] flex items-center justify-center"
        >
          <span>I&apos;m a&nbsp;</span>
          <WordRotate
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold"
            words={PORTFOLIO_DATA.hero.titles}
          />
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <MagneticLink
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 text-black font-semibold shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            Let&apos;s Talk <Mail className="ml-2 h-4 w-4 inline" />
          </MagneticLink>

          <div className="flex items-center gap-3">
            <MagneticLink
              href={PORTFOLIO_DATA.hero.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <SiGithub className="h-5 w-5" />
            </MagneticLink>
            <MagneticLink
              href={PORTFOLIO_DATA.hero.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <FaLinkedin className="h-5 w-5" />
            </MagneticLink>
          </div>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-2"
        >
          {["Java", "Spring Boot", "REST APIs", "MySQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 border border-white/10 text-white/60"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <a
          href="#about"
          className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
