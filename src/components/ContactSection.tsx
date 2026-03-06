import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const web3FormsAccessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "c67b90d9-af3b-4c2a-ac4a-09c665a1f4f2";

    if (!web3FormsAccessKey) {
      setLoading(false);
      toast({
        title: "Email service is not configured",
        description: "Set VITE_WEB3FORMS_ACCESS_KEY.",
      });
      return;
    }

    try {
      const payload = new FormData();
      payload.append("access_key", web3FormsAccessKey);
      payload.append("to_email", "cookmate.lk@gmail.com");
      payload.append("name", name);
      payload.append("email", email);
      payload.append("subject", subject || "New message from CookMate website");
      payload.append("message", message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        throw new Error("Email send failed");
      }

      toast({ title: "Message sent!", description: "We received your message and will get back to you soon." });
      form.reset();
    } catch {
      toast({ title: "Sending failed", description: "Please try again in a moment." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">Want to order the IoT device or have a question? Reach out!</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <Input name="name" placeholder="Your Name" required />
            <Input name="email" type="email" placeholder="Your Email" required />
            <Input name="subject" placeholder="Subject" required />
            <Textarea name="message" placeholder="Your Message" rows={5} required />
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">cookmate.lk@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+94 77 385 0123</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Colombo, Sri Lanka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
