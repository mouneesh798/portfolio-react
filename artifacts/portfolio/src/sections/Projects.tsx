import { BlurFade } from "@/animations/BlurFade";
import { BorderBeam } from "@/animations/BorderBeam";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <BlurFade>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A selection of my best work, spanning from full-stack applications to intricate front-end interfaces.
            </p>
          </div>
        </BlurFade>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            // Make some cards span multiple columns/rows for bento effect
            const isLarge = index === 0;
            const isMedium = index === 1 || index === 2;
            
            return (
              <BlurFade 
                key={project.id} 
                delay={0.2 + index * 0.1}
                className={`group relative rounded-3xl bg-card border border-white/5 overflow-hidden flex flex-col ${
                  isLarge ? "md:col-span-2 lg:col-span-2 md:row-span-2" : 
                  isMedium ? "lg:col-span-1 md:row-span-2" : "col-span-1"
                }`}
              >
                {/* Border Beam on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                  <BorderBeam size={isLarge ? 400 : 250} duration={12} delay={index} />
                </div>
                
                {/* Project content */}
                <div className="p-6 md:p-8 flex flex-col h-full relative z-10 bg-gradient-to-b from-transparent to-background/80">
                  <div className="flex-1">
                    <h3 className={`font-bold text-white mb-3 group-hover:text-primary transition-colors ${
                      isLarge ? "text-2xl md:text-3xl" : "text-xl"
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-muted-foreground mb-6 ${
                      isLarge ? "text-lg max-w-2xl" : "text-base"
                    }`}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white/70 border-white/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-white/50 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subtle background glow based on index */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full opacity-20 filter blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-40 z-0"
                  style={{
                    background: index % 3 === 0 ? "var(--color-primary)" : 
                                index % 3 === 1 ? "var(--color-secondary)" : 
                                "var(--color-accent)"
                  }}
                />
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
