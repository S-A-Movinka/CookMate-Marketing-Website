import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Clock, Download } from "lucide-react";
const releasesUrl = "https://github.com/yehenidodanwela/CookMate/releases";

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding bg-gradient-to-br from-primary/10 via-warm-gold/10 to-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full bg-white/90 dark:bg-card/95 border border-primary/30 rounded-3xl shadow-2xl p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-warm-gold/20 rounded-full blur-2xl" aria-hidden="true" />
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Sparkles size={20} className="text-warm-gold" /> New Feature
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-primary to-warm-gold bg-clip-text text-transparent">Download CookMate</h1>
        <p className="text-muted-foreground mb-8 text-lg font-medium">Download and install the CookMate APK to use the app on your Android device.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate("/")}>Back to Home</Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href={releasesUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Download size={18} /> Download APK
            </a>
          </Button>
        </div>
        <div className="mt-8 text-left text-sm text-muted-foreground/90 max-w-md mx-auto space-y-2">
          <p className="font-semibold">Download the APK file</p>
          <ol className="list-decimal ml-6">
            <li>Transfer it to your Android device (if downloaded on PC).</li>
            <li>Enable “Install unknown apps” in your phone settings.</li>
            <li>Tap the APK file to install.</li>
            <li>Open CookMate and start cooking 🍳</li>
          </ol>
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
