import { BlurFade } from "@/animations/BlurFade";
import { Marquee } from "@/animations/Marquee";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  const allSkillIcons = PORTFOLIO_DATA.skills.flatMap((cat) => cat.items);

  return (
    <section id="skills" className="relative py-24 lg:py-32 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
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

        {/* Marquee strip */}
        <BlurFade delay={0.15} className="mb-20 -mx-4 md:-mx-6">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee pauseOnHover className="[--duration:30s]">
              {allSkillIcons.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-white/5 mx-2 hover:border-primary/50 transition-colors group"
                >
                  <skill.icon className="h-6 w-6 text-white/50 group-hover:text-primary transition-colors" />
                  <span className="font-mono text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Category cards — icon pill grid, no bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PORTFOLIO_DATA.skills.map((category, catIdx) => (
            <BlurFade key={category.category} delay={0.2 + catIdx * 0.1}>
              <div className="p-6 rounded-2xl bg-card/30 border border-white/5 backdrop-blur-sm h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>

                {/* Skill pills — icon + name, staggered entrance */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, itemIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: itemIdx * 0.06 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/40 transition-colors group cursor-default"
                    >
                      <skill.icon className="h-4 w-4 text-white/50 group-hover:text-primary transition-colors shrink-0" />
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
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
