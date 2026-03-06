import { motion } from "framer-motion";
import mascot from "@/assets/mascot.png";
import mascot2 from "@/assets/mascot2.png";
import mascot3 from "@/assets/mascot3.png";

const MascotSection = () => (
  <section className="section-padding bg-warm-cream">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
        <div className="flex items-end justify-center w-full max-w-md md:max-w-xl">
          <img
            src={mascot2}
            alt="CookMate cooking buddy companion left"
            className="w-32 md:w-40 animate-float opacity-90"
          />
          <img
            src={mascot}
            alt="CookMate cooking buddy character"
            className="w-48 md:w-64 animate-float z-10 -mx-4 md:-mx-6"
          />
          <img
            src={mascot3}
            alt="CookMate cooking buddy companion right"
            className="w-32 md:w-40 animate-float opacity-90"
          />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Cooking Buddy</h2>
        <p className="text-muted-foreground mb-4">
          Your friendly cooking buddy is with you every step of the way — offering tips, encouragement, and gentle reminders throughout your cooking session.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>✨ Guides you through each recipe step</li>
          <li>🔔 Alerts you when timers go off</li>
          <li>💡 Shares helpful cooking tips</li>
          <li>😊 Makes cooking fun and stress-free</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default MascotSection;
