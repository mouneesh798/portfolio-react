import { BlurFade } from "@/animations/BlurFade";
import { MagneticButton } from "@/animations/MagneticButton";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Send, Mail, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      const form = e.target as HTMLFormElement;
      form.reset();
      toast.success("Message sent! I'll get back to you soon.", {
        position: "bottom-right",
        className: "bg-card border-primary/20 text-white",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 w-full overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)_0%,transparent_50%)] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <BlurFade>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <BlurFade delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <a href={PORTFOLIO_DATA.hero.socials.email} className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    mouneeshb123@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Location</h4>
                  <p className="text-muted-foreground text-lg">
                    Dharmapuri, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href={PORTFOLIO_DATA.hero.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                    <SiGithub className="h-5 w-5" />
                  </a>
                  <a href={PORTFOLIO_DATA.hero.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="p-8 md:p-10 rounded-3xl bg-card/40 backdrop-blur-md border border-white/10 shadow-2xl relative group overflow-hidden">
              {/* Subtle animated border top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Your Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  />
                </div>
                
                <MagneticButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 text-primary-foreground font-bold transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </MagneticButton>
              </form>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
