import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding bg-gradient-to-r from-primary to-warm-gold">
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Cook Smarter?</h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
          Download CookMate today and transform the way you cook — one perfect meal at a time.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <Link to="/coming-soon">
              <Download size={18} /> Download App
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/40 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground" asChild>
            <a href="#features">
              Explore Features <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
