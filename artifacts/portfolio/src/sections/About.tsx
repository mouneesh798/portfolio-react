import { BlurFade } from "@/animations/BlurFade";
import { GridPattern } from "@/animations/GridPattern";
import { SpotlightEffect } from "@/animations/SpotlightEffect";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code, Coffee, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 w-full overflow-hidden border-t border-white/5">
      <GridPattern />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <BlurFade yOffset={20}>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <BlurFade delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <SpotlightEffect className="rounded-2xl p-1 w-full max-w-md">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 flex items-center justify-center group">
                {/* Fallback avatar image styling if no actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20 z-0" />
                
                <div className="relative z-10 text-center p-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <Code className="h-16 w-16 mx-auto mb-4 text-white/50" />
                  <p className="font-mono text-sm text-white/50">&lt;Developer /&gt;</p>
                </div>
                
                {/* Optional: Put an actual image here if provided */}
                {/* <img src="/avatar.jpg" alt="Profile" className="absolute inset-0 w-full h-full object-cover z-10 opacity-90 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-500" /> */}
              </div>
            </SpotlightEffect>
          </BlurFade>

          <BlurFade delay={0.4} className="lg:col-span-7">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                {PORTFOLIO_DATA.about.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Remote Work</h4>
                    <p className="text-sm text-white/50">Available anywhere</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                    <Coffee className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Fueled by Coffee</h4>
                    <p className="text-sm text-white/50">& Passion for code</p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
