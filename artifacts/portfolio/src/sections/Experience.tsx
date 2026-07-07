import { BlurFade } from "@/animations/BlurFade";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 w-full overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <BlurFade>
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
          </div>
        </BlurFade>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12 pb-8">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <BlurFade key={exp.id} delay={0.2 + index * 0.1}>
                <div className="relative pl-8 md:pl-10 group">
                  <div className="absolute -left-[29px] md:-left-[29px] top-1 flex h-14 w-14 items-center justify-center rounded-full bg-background border-4 border-background group-hover:border-primary/50 transition-colors duration-500 z-10">
                    <div className="h-full w-full rounded-full bg-card flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="h-5 w-5 text-white/50 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  
                  <div className="bg-card/40 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(0,212,255,0.15)]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-lg text-white/70 font-medium">{exp.company}</p>
                      </div>
                      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/60 w-fit">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
