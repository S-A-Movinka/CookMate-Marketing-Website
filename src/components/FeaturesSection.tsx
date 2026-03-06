import { motion } from "framer-motion";
import { Sparkles, Globe, ShieldCheck, ListChecks, Bell, Thermometer } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Recipe Generator", desc: "Get personalised recipes instantly based on your ingredients and preferences." },
  { icon: Globe, title: "Sri Lankan & Global Recipe Support", desc: "Authentic Sri Lankan recipes plus a wide range of global dishes, curated for your preferences." },
  { icon: ShieldCheck, title: "Allergy-Aware Cooking", desc: "Set your allergies once and every recipe is filtered for your safety." },
  { icon: ListChecks, title: "Step-by-Step Guidance", desc: "Follow clear instructions with timers and smart alerts at every step." },
  { icon: Bell, title: "Smart Cooking Alerts", desc: "Get notified when it's time to stir, flip, or remove from heat." },
  { icon: Thermometer, title: "IoT Temperature Monitoring", desc: "The smart device tracks your stove temperature and warns you in real-time." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Everything you need for smarter, safer, and tastier cooking.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-card border border-border p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
              <f.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
