import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "LeetCode", href: "#leetcode" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // Offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-background/70 backdrop-blur-md border-white/10 shadow-lg" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, "#hero")}
          className="text-xl font-bold text-white flex items-center gap-2 group"
        >
          <span className="text-primary group-hover:animate-pulse">&lt;</span>
          {PORTFOLIO_DATA.hero.name.split(" ")[0]}
          <span className="text-primary group-hover:animate-pulse">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2",
                activeSection === link.href.substring(1) 
                  ? "text-white" 
                  : "text-muted-foreground"
              )}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all font-medium text-sm ml-2"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-white hover:bg-white/10 rounded-md transition-colors" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] bg-card/95 backdrop-blur-xl border-l-white/10 p-0 flex flex-col">
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <span className="font-bold text-lg text-white">Menu</span>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-lg font-medium transition-colors flex items-center",
                      activeSection === link.href.substring(1)
                        ? "bg-primary/10 text-primary"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="p-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, "#contact")}
                  className="flex w-full items-center justify-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:bg-primary/90"
                >
                  Hire Me
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
