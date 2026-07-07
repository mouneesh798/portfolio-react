import { BlurFade } from "@/animations/BlurFade";
import { NumberTicker } from "@/animations/NumberTicker";
import { Ripple } from "@/animations/Ripple";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code2, Target, Trophy, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function LeetCode() {
  const { leetcode } = PORTFOLIO_DATA;
  // Guard against division-by-zero when totalSolved is 0
  const safeTotal = leetcode.totalSolved > 0 ? leetcode.totalSolved : 1;

  return (
    <section id="leetcode" className="relative py-24 lg:py-32 w-full overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-background/50 z-0" />
      <Ripple mainCircleSize={300} numCircles={6} className="z-0 opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <BlurFade>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400 mb-6">
              <Code2 className="mr-2 h-4 w-4" />
              Algorithm Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              LeetCode Stats
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full mx-auto" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Total Solved */}
          <BlurFade delay={0.1} className="lg:col-span-2">
            <div className="relative p-8 rounded-3xl bg-card border border-white/10 overflow-hidden group hover:border-orange-500/30 transition-colors h-full flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Trophy className="h-12 w-12 text-orange-400 mb-6" />
              <div className="flex items-baseline gap-2 mb-2">
                <NumberTicker value={leetcode.totalSolved} className="text-5xl md:text-6xl font-bold text-white" />
                <span className="text-xl text-orange-400 font-bold">+</span>
              </div>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Problems Solved</p>
            </div>
          </BlurFade>

          {/* Difficulty Breakdown */}
          <BlurFade delay={0.2} className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-card border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-white font-medium mb-6 flex items-center">
                <Target className="mr-2 h-5 w-5 text-white/50" />
                Difficulty Breakdown
              </h3>
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-emerald-400 font-medium">Easy</span>
                    <span className="text-white/70">{leetcode.easy}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-emerald-400 h-full rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(leetcode.easy / leetcode.totalSolved) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-amber-400 font-medium">Medium</span>
                    <span className="text-white/70">{leetcode.medium}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-amber-400 h-full rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(leetcode.medium / leetcode.totalSolved) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-rose-500 font-medium">Hard</span>
                    <span className="text-white/70">{leetcode.hard}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-rose-500 h-full rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(leetcode.hard / leetcode.totalSolved) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Profile link (and optionally contest rating) */}
          <BlurFade delay={0.3} className="md:col-span-2 lg:col-span-4">
            <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              {leetcode.rating > 0 && (
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 text-white/70">
                    <Zap className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Contest Rating</p>
                    <div className="text-3xl font-bold text-white flex items-center">
                      <NumberTicker value={leetcode.rating} delay={0.5} className="text-white" />
                    </div>
                  </div>
                </div>
              )}
              {leetcode.rating === 0 && (
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-400">
                    <Zap className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-orange-400 font-semibold text-lg">Actively Practising Daily</p>
                    <p className="text-muted-foreground text-sm">Building problem-solving consistency</p>
                  </div>
                </div>
              )}
              <a
                href={leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-3 text-sm font-medium text-white transition-colors w-full md:w-auto"
              >
                View Profile
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
