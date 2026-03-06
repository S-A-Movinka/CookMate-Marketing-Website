import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Do I need the IoT device to use CookMate?", a: "No! The app works perfectly on its own. The IoT device is an optional add-on for enhanced temperature monitoring." },
  { q: "Can I cook without the device?", a: "Absolutely. CookMate's AI recipes and step-by-step guidance work entirely within the mobile app." },
  { q: "Does it support Sri Lankan recipes?", a: "Yes! CookMate features a curated collection of authentic Sri Lankan recipes alongside global cuisines." },
  { q: "Is the app free?", a: "The core features of CookMate are free to use. Premium features and the IoT device are available for purchase." },
  { q: "How does allergy filtering work?", a: "Set your allergies during onboarding, and you can update them anytime. Every recipe generated will automatically exclude those allergens." },
  { q: "What platforms is the app available on?", a: "CookMate is currently available on Android devices, with iOS support planned for the future." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-warm-cream">
    <div className="container max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4">
            <AccordionTrigger className="text-left font-medium text-sm">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
