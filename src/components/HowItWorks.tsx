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
  ShoppingCart,
  UserCheck,
  UserPlus,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";


const initialChecks = {
  install: false,
  signup: false,
  buyPremium: false,
  iotProfile: false,
  iotConnect: false,
  iotFollow: false,
  iotConfig: false,
};


const infoSteps = [
  {
    icon: Carrot,
    title: "Select Ingredients",
    subtitle: "Choose available ingredients from your kitchen so CookMate can generate relevant recipe ideas instantly.",
    details: [
      "Ingredient-based matching",
      "Reduce food waste",
      "Faster recipe discovery",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Set Preferences",
    subtitle: "Set allergies, meal type, cuisine, diet, and servings for each session.",
    details: [
      "Allergies saved and editable",
      "Session-based cooking preferences",
      "Safer personalized suggestions",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Recipes",
    subtitle: "CookMate AI generates recipe options based on your ingredients and preferences.",
    details: [
      "Personalized recipe list",
      "Session-aware results",
      "Quick best-match suggestions",
    ],
  },
  {
    icon: ChefHat,
    title: "Choose and Start Cooking",
    subtitle: "Begin guided cooking with clear step-by-step instructions.",
    details: [
      "Guided cooking flow",
      "Cleaner recipe execution",
      "Better consistency in results",
    ],
  },
];


const HowItWorks = () => {
  const [checks, setChecks] = useState(initialChecks);
  const [showSuccess, setShowSuccess] = useState(false);

  // All required steps checked
  const canShowSuccess =
    checks.install &&
    checks.signup &&
    checks.buyPremium &&
    checks.iotProfile &&
    checks.iotConnect &&
    checks.iotFollow &&
    checks.iotConfig;

  // If user unticks any required step, hide success
  if (showSuccess && !canShowSuccess) {
    setShowSuccess(false);
  }

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
            CookMate Guidance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Get Started</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to unlock the full CookMate experience. Tick off each as you go!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/70 bg-card/70 backdrop-blur-sm p-4 md:p-6 lg:p-8 shadow-xl"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              {/* Step 1: Install CookMate */}
              <div className="rounded-2xl border border-primary/20 bg-background/80 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Download className="text-primary" size={22} />
                  <h3 className="font-semibold text-lg">1. Install CookMate</h3>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox checked={checks.install} onCheckedChange={(v) => setChecks((c) => ({ ...c, install: !!v }))} id="install" />
                  <label htmlFor="install" className="text-sm">App ready on mobile</label>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox checked={checks.signup} onCheckedChange={(v) => setChecks((c) => ({ ...c, signup: !!v }))} id="signup" />
                  <label htmlFor="signup" className="text-sm">Sign up or sign in – personal profile saved</label>
                </div>
              </div>

              {/* Step 2: Buy Premium Plan (Optional) */}
              <div className="rounded-2xl border border-primary/20 bg-background/80 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <ShoppingCart className="text-primary" size={22} />
                  <h3 className="font-semibold text-lg">2. Buy Premium Plan <span className="text-xs font-normal text-primary">(Optional)</span></h3>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Checkbox checked={checks.buyPremium} onCheckedChange={(v) => setChecks((c) => ({ ...c, buyPremium: !!v }))} id="buyPremium" />
                  <label htmlFor="buyPremium" className="text-sm">Premium plan activated</label>
                </div>
              </div>

              {/* Step 3: Connect IoT Device (Optional, with sub-steps) */}
              <div className="rounded-2xl border border-primary/20 bg-background/80 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="text-primary" size={22} />
                  <h3 className="font-semibold text-lg">3. Connect IoT Device <span className="text-xs font-normal text-primary">(Optional)</span></h3>
                </div>
                <div className="flex flex-col gap-2 mb-2 ml-2">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={checks.iotProfile} onCheckedChange={(v) => setChecks((c) => ({ ...c, iotProfile: !!v }))} id="iotProfile" />
                    <label htmlFor="iotProfile" className="text-sm">Go to My Profile</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={checks.iotConnect} onCheckedChange={(v) => setChecks((c) => ({ ...c, iotConnect: !!v }))} id="iotConnect" />
                    <label htmlFor="iotConnect" className="text-sm">Connect IoT device</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={checks.iotFollow} onCheckedChange={(v) => setChecks((c) => ({ ...c, iotFollow: !!v }))} id="iotFollow" />
                    <label htmlFor="iotFollow" className="text-sm">Follow the instructions pop up on your phone</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={checks.iotConfig} onCheckedChange={(v) => setChecks((c) => ({ ...c, iotConfig: !!v }))} id="iotConfig" />
                    <label htmlFor="iotConfig" className="text-sm">Configuration successful</label>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">(Optional for Free/Pro plans)</div>
              </div>

              {canShowSuccess && !showSuccess && (
                <Button size="lg" className="mt-4 w-full" onClick={() => setShowSuccess(true)}>
                  Finish Setup
                </Button>
              )}
              {showSuccess && (
                <div className="rounded-xl border border-green-400 bg-green-50 text-green-900 p-4 text-center font-semibold text-lg flex flex-col items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={28} />
                  You have successfully set up CookMate! Happy cooking! 🍳
                </div>
              )}
            </div>

            {/* Info Steps */}
            <div className="space-y-6">
              {infoSteps.map((step, idx) => (
                <div key={step.title} className="rounded-2xl border border-border/70 bg-background/90 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="text-primary" size={22} />
                    <h3 className="font-semibold text-lg">{idx + 4}. {step.title}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{step.subtitle}</div>
                  <ul className="list-disc ml-6 text-sm text-foreground/90">
                    {step.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HowItWorks;
