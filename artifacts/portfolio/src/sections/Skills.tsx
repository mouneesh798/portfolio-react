import { BlurFade } from "@/animations/BlurFade";
import { Marquee } from "@/animations/Marquee";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-sm font-medium text-white/50">{level}%</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-2 border border-white/10 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 + delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const allSkillIcons = PORTFOLIO_DATA.skills.flatMap((cat) => cat.items);

  return (
    <section id="skills" className="relative py-24 lg:py-32 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <BlurFade>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Technical Arsenal
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Tools, frameworks, and technologies I use to build robust and scalable applications.
            </p>
          </div>
        </BlurFade>

        {/* Marquee row for visual flair */}
        <BlurFade delay={0.2} className="mb-20 -mx-4 md:-mx-6">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee pauseOnHover className="[--duration:30s]">
              {allSkillIcons.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-white/5 mx-2 hover:border-primary/50 transition-colors group">
                  <skill.icon className="h-6 w-6 text-white/50 group-hover:text-primary transition-colors" />
                  <span className="font-mono text-sm font-medium text-white/70 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PORTFOLIO_DATA.skills.map((category, catIdx) => (
            <BlurFade key={category.category} delay={0.3 + catIdx * 0.1}>
              <div className="p-6 rounded-2xl bg-card/30 border border-white/5 backdrop-blur-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.items.map((skill, itemIdx) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      delay={itemIdx * 0.1} 
                    />
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
