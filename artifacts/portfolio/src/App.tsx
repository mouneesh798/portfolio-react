import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Suspense, lazy, useEffect, Component, ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { AnimatedCursor } from '@/animations/AnimatedCursor';
import { ScrollProgress } from '@/animations/ScrollProgress';

// ── Error Boundary ────────────────────────────────────────────────────────────
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; message: string }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white gap-4 p-8 text-center">
          <p className="text-2xl font-bold text-primary">Something went wrong</p>
          <p className="text-muted-foreground max-w-md text-sm font-mono">{this.state.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, message: '' })}
            className="mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy load sections for better performance
const Hero = lazy(() => import('@/sections/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('@/sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('@/sections/Skills').then(m => ({ default: m.Skills })));
const Experience = lazy(() => import('@/sections/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('@/sections/Projects').then(m => ({ default: m.Projects })));
const LeetCode = lazy(() => import('@/sections/LeetCode').then(m => ({ default: m.LeetCode })));
const Certifications = lazy(() => import('@/sections/Certifications').then(m => ({ default: m.Certifications })));
const Contact = lazy(() => import('@/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('@/sections/Footer').then(m => ({ default: m.Footer })));

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <AnimatedCursor />
      <ScrollProgress />
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-background"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <LeetCode />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
