import { BlurFade } from "@/animations/BlurFade";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <BlurFade>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <BlurFade key={cert.id} delay={0.2 + index * 0.1} className="h-full">
              <div className="group relative h-full p-[1px] rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors">
                {/* Shimmer line effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                
                <div className="bg-card h-full rounded-2xl p-6 md:p-8 flex flex-col relative z-10 border border-transparent group-hover:border-primary/20 transition-colors">
                  <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white/70">{cert.issuer}</p>
                      <p className="text-xs text-white/40 mt-1">{cert.date}</p>
                    </div>
                    
                    {cert.url && cert.url !== "#" && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-white/50 hover:text-primary transition-colors"
                        aria-label="View Certificate"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
