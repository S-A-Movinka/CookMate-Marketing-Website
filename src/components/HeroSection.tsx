import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import heroBg2 from "@/assets/hero-bg-2.png";
import heroBg4 from "@/assets/hero-bg-4.png";

const HERO_SLIDES = [heroBg, heroBg2, heroBg4];
const SLIDE_DURATION_MS = 3500;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [currentSlide]);

  return (
  <section
    className="relative min-h-screen flex items-center section-padding pt-24 md:pt-32 overflow-hidden"
  >
    <div className="absolute inset-0" aria-hidden="true">
      {HERO_SLIDES.map((slide, index) => (
        <img
          key={slide}
          src={slide}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-center md:object-[center_42%] transition-all duration-1000 dark:[filter:brightness(0.84)_contrast(1.08)] ${index === currentSlide ? "opacity-90 dark:opacity-100 scale-105" : "opacity-0 scale-100"}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
    <div className="absolute inset-0 hidden dark:block bg-black/28" aria-hidden="true" />
    <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-black/72 via-black/56 to-black/30" aria-hidden="true" />
    <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-black/40 via-black/10 to-transparent" aria-hidden="true" />
    <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-warm-gold/20 blur-3xl" aria-hidden="true" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden max-w-2xl text-left bg-white/30 backdrop-blur-sm border border-white/55 rounded-3xl p-6 md:p-10 shadow-2xl dark:rounded-2xl dark:bg-card/70 dark:border-border/70"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/25 to-white/15 dark:from-background/40 dark:via-card/25 dark:to-background/35" aria-hidden="true" />
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-black/36 via-black/24 to-black/18" aria-hidden="true" />

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs md:text-sm font-semibold mb-6 dark:bg-white/12 dark:text-white dark:border dark:border-white/25">
          AI-Powered Cooking Assistant
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-foreground dark:text-white">
            Your AI Cooking
            <br />
            Assistant for{" "}
            <span className="text-gradient">Perfect Meals</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-xl mb-8 dark:text-white/85">
            Unlock smart recipe ideas based on what’s already in your kitchen. CookMate combines AI recipe generation with a smart IoT device to guide you step-by-step through every meal — from Sri Lankan classics to global favourites.
          </p>
          <div className="flex flex-wrap gap-4" id="download">
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/20 dark:shadow-xl dark:shadow-black/30">
              <Download size={18} /> Download App
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/60 border-white/70 text-foreground hover:bg-white/80 hover:text-foreground dark:bg-white/10 dark:border-white/50 dark:text-white dark:hover:bg-white/20 dark:hover:text-white">
              <a href="#how-it-works" className="gap-2 inline-flex items-center">
                Learn More <ArrowDown size={16} />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm">
      {HERO_SLIDES.map((_, index) => {
        const isActive = index === currentSlide;
        return (
          <button
            key={`slide-indicator-${index}`}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${isActive ? "w-8 bg-white" : "w-3 bg-white/55 hover:bg-white/80"}`}
            aria-label={`Show hero background ${index + 1}`}
            aria-pressed={isActive}
          />
        );
      })}
    </div>
  </section>
);
};

export default HeroSection;
