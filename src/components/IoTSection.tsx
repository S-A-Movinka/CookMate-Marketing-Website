import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Thermometer, Bell, ShieldCheck } from "lucide-react";
import iotDevice from "@/assets/iot-device.png";

const perks = [
  { icon: Thermometer, text: "Real-time temperature detection" },
  { icon: Bell, text: "Smart alerts for overcooking" },
  { icon: ShieldCheck, text: "Safer, more accurate cooking" },
];

const IoTSection = () => (
  <section id="iot-device" className="section-padding bg-gradient-to-br from-warm-peach via-background to-warm-cream">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">IoT Device</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">CookMate Smart Sensor</h2>
        <p className="text-muted-foreground mb-6">
          Take your cooking to the next level with our smart sensor. It clips to your cooking pot, measures temperature in real-time, and sends instant alerts through the app so you never overcook or burn a dish again.
        </p>
        <ul className="space-y-3 mb-8">
          {perks.map((p) => (
            <li key={p.text} className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <p.icon className="text-accent" size={16} />
              </div>
              {p.text}
            </li>
          ))}
        </ul>
        <Button size="lg" className="gap-2" asChild>
          <a href="#contact"><ShoppingCart size={18} /> Order IoT Device</a>
        </Button>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
        <img src={iotDevice} alt="CookMate IoT smart cooking device" className="w-48 md:w-64 drop-shadow-xl" />
      </motion.div>
    </div>
  </section>
);

export default IoTSection;
