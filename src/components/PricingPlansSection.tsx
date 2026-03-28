import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Infinity, Star } from "lucide-react";

const plans = [
  {
    color: "green",
    name: "Free Plan",
    price: "LKR 0 / month",
    bestFor: "Trying out CookMate",
    features: [
      { label: "10 AI recipe generations", included: true },
      { label: "Personalized recipes (allergies, diet, cuisine)", included: true },
      { label: "Step-by-step cooking guidance", included: true },
      { label: "Smart alerts & timers", included: true },
      { label: "Save favorite recipes", included: true },
      { label: "IoT device integration", included: false },
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    color: "blue",
    name: "Pro Plan",
    price: "LKR 5,000 / month",
    bestFor: "Regular home cooks",
    features: [
      { label: "100 AI recipe generations", included: true },
      { label: "Personalized recipes (allergies, diet, cuisine)", included: true },
      { label: "Step-by-step cooking guidance", included: true },
      { label: "Smart alerts & timers", included: true },
      { label: "Save unlimited favorites", included: true },
      { label: "Priority performance & faster responses", included: true },
      { label: "IoT device integration", included: false },
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    color: "purple",
    name: "Premium Plan (Smart Kitchen)",
    price: "LKR 10,000 / month",
    bestFor: "Advanced users & smart kitchens",
    features: [
      { label: "Unlimited AI recipe generations", included: "infinity" },
      { label: "Personalized recipes (allergies, diet, cuisine)", included: true },
      { label: "Step-by-step cooking guidance", included: true },
      { label: "Smart alerts & timers", included: true },
      { label: "Save unlimited favorites", included: true },
      { label: "IoT device integration (real-time cooking support)", included: true },
      { label: "Advanced smart cooking experience", included: true },
    ],
    cta: "Go Premium",
    highlight: false,
  },
];

const highlightText =
  "Choose your cooking journey — from simple recipes to a fully smart kitchen experience.";

const PricingPlansSection = () => (
  <section id="pricing" className="section-padding bg-background">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary mb-4">
          CookMate Pricing Plans
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing for smarter cooking</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6 font-medium text-base md:text-lg">
          {highlightText}
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              className={`relative h-full border-2 ${
                plan.highlight
                  ? "border-blue-500 shadow-xl shadow-blue-100/30"
                  : "border-border shadow-md"
              } bg-card/90 backdrop-blur-sm`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold shadow-md">
                    <Star size={16} className="mr-1" /> Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className={`text-2xl font-bold mb-1 text-${plan.color}-600`}>{plan.name}</CardTitle>
                <CardDescription className="text-base font-medium mb-2 text-muted-foreground">
                  Best for: {plan.bestFor}
                </CardDescription>
                <div className="text-3xl font-extrabold mb-2 text-foreground">{plan.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  {plan.features.map((f, i) => (
                    <li key={f.label} className="flex items-center gap-2 text-base">
                      {f.included === true && (
                        <CheckCircle className="text-green-500" size={18} />
                      )}
                      {f.included === false && (
                        <XCircle className="text-red-400" size={18} />
                      )}
                      {f.included === "infinity" && (
                        <Infinity className="text-purple-500" size={20} />
                      )}
                      <span className={f.included ? "" : "line-through text-muted-foreground/70"}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pt-4">
                <Button
                  size="lg"
                  variant={plan.highlight ? "default" : "outline"}
                  className={`w-full font-semibold ${plan.highlight ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`}
                  asChild
                >
                  <Link to="/coming-soon">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPlansSection;