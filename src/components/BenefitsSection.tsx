import { motion } from "framer-motion";
import { Clock, CheckCircle, Heart, BookOpen, Zap } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Saves Time", desc: "No more recipe hunting — AI generates meals from what you have." },
  { icon: CheckCircle, title: "Fewer Mistakes", desc: "Step-by-step guidance and smart alerts prevent cooking errors." },
  { icon: Heart, title: "Personalised Recipes", desc: "Tailored to your allergies, preferences, and available ingredients." },
  { icon: BookOpen, title: "Beginner Friendly", desc: "Clear instructions and a helpful cooking buddy make cooking easy for anyone." },
  { icon: Zap, title: "Smart Cooking", desc: "IoT temperature monitoring keeps every dish at the perfect heat for safer cooking." },
];

const BenefitsSection = () => (
  <section className="section-padding bg-background">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why CookMate?</h2>
      </motion.div>
      <div className="space-y-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-sm transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <b.icon className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
