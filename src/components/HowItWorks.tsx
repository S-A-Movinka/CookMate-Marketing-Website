import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carrot,
  CheckCircle2,
  ChefHat,
  Clock3,
  Download,
  PlayCircle,
  SlidersHorizontal,
  Sparkles,
  Thermometer,
  type LucideIcon,
} from "lucide-react";

type WorkflowStep = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  eta: string;
  outcomes: string[];
};

const workflowSteps: WorkflowStep[] = [
  {
    icon: Download,
    title: "Install CookMate",
    subtitle: "Set up in under a minute",
    description: "Download CookMate and quickly create your kitchen profile so recommendations are tailored from the first session.",
    eta: "1 min",
    outcomes: ["App ready on mobile", "Account linked to your kitchen", "Personal profile saved"],
  },
  {
    icon: Carrot,
    title: "Select Ingredients",
    subtitle: "Pick what you already have",
    description: "Choose available ingredients from your kitchen so CookMate can generate relevant recipe ideas instantly.",
    eta: "30 sec",
    outcomes: ["Ingredient-based matching", "Reduced food waste", "Faster recipe discovery"],
  },
  {
    icon: SlidersHorizontal,
    title: "Set Preferences",
    subtitle: "Allergies and session cooking options",
    description: "Set allergies once during onboarding and update them anytime. Meal type, cuisine type, diet preferences, and number of servings are selected for each cooking session.",
    eta: "1 min",
    outcomes: ["Allergies saved and editable", "Session-based cooking preferences", "Safer personalized suggestions"],
  },
  {
    icon: Sparkles,
    title: "AI Recipes",
    subtitle: "Smart recipe generation",
    description: "CookMate AI generates recipe options based on your ingredients and selected preferences for that session.",
    eta: "Instant",
    outcomes: ["Personalized recipe list", "Session-aware results", "Quick best-match suggestions"],
  },
  {
    icon: ChefHat,
    title: "Choose and Start",
    subtitle: "Begin guided cooking",
    description: "Choose your preferred recipe and start cooking with clear step-by-step guidance in the app.",
    eta: "Live",
    outcomes: ["Guided cooking flow", "Cleaner recipe execution", "Better consistency in results"],
  },
  {
    icon: Thermometer,
    title: "IoT Assist",
    subtitle: "Real-time temperature support",
    description: "During cooking, the IoT module tracks temperature and provides alerts to help maintain safer and accurate heat control.",
    eta: "Continuous",
    outcomes: ["Live temperature tracking", "Safety alerts", "Improved cooking accuracy"],
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = workflowSteps[activeStep];

  return (
    <section id="how-it-works" className="section-padding bg-warm-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary mb-4">
            Product Walkthrough
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How CookMate Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Inspired by modern SaaS marketing flows: select a step, preview what happens, and understand the value before you download.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/70 bg-card/70 backdrop-blur-sm p-4 md:p-6 lg:p-8 shadow-xl"
        >
          <div className="grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-8">
            <div className="space-y-2">
              {workflowSteps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left rounded-2xl border px-4 py-3 transition-all ${isActive ? "border-primary/40 bg-primary/10 shadow-md" : "border-border/70 bg-background/80 hover:border-primary/30 hover:bg-primary/5"}`}
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`Step ${index + 1}: ${step.title}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-10 w-10 rounded-xl flex items-center justify-center ${isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                        <step.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Step {index + 1}</p>
                        <h3 className="font-semibold text-sm md:text-base leading-snug">{step.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">{step.subtitle}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-5 md:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      Step {activeStep + 1} of {workflowSteps.length}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs md:text-sm text-secondary-foreground">
                      <Clock3 size={14} /> {current.eta}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{current.title}</h3>
                  <p className="text-muted-foreground md:text-lg mb-6">{current.description}</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {current.outcomes.map((item) => (
                      <div key={item} className="flex items-start gap-2 rounded-xl border border-border/70 bg-card p-3">
                        <CheckCircle2 className="text-primary mt-0.5" size={18} />
                        <span className="text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <PlayCircle size={16} className="text-primary" /> Select any step on the left to preview the full flow.
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
