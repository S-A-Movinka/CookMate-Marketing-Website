import { motion } from "framer-motion";
import { User, Linkedin, Github } from "lucide-react";
import member1Image from "@/assets/1.jpg";
import member2Image from "@/assets/2.png";
import member3Image from "@/assets/3.jpg";
import member4Image from "@/assets/4.jpg";
import member5Image from "@/assets/5.jpg";
import member6Image from "@/assets/6.jpg";

const team = [
  { name: "Januki Liyanapathirana", role: "Project Lead & IoT Engineer", desc: "Leads the project and integrates CookMate's IoT temperature monitoring system.", image: member1Image, linkedin: "https://linkedin.com/in/januki-liyanapathirana-a74780337", github: "https://github.com/JK-19-jjk" },
  { name: "Yeheni Dodanwela", role: "Full-Stack Developer", desc: "Builds end-to-end features across frontend, backend, and API integrations.", image: member2Image, linkedin: "https://lk.linkedin.com/in/yeheni-dodanwela-800808318", github: "https://github.com/yehenidodanwela" },
  { name: "Nethasha Fernando", role: "AI Engineer", desc: "Develops and improves AI models for recipe generation and smart recommendations.", image: member3Image, linkedin: "https://www.linkedin.com/in/nethasha-fernando-/", github: "https://github.com/Nethasha-Fernando" },
  { name: "Dewmi Bandara", role: "Full-Stack Developer", desc: "Designs the database, develops APIs, and implements full-stack platform modules.", image: member4Image, linkedin: "https://linkedin.com/in/dewmi-dilsara-472955332", github: "https://github.com/Dewmi-dilsara" },
  { name: "Yashnendri Senevirathna", role: "Full-Stack Developer", desc: "Implements backend authentication flows and supports core server-side functionality.", image: member5Image, linkedin: "https://www.linkedin.com/in/yashendri-senevirathna-044930305/", github: "https://github.com/yashendrisenevirathna-design" },
  { name: "Amandi Movinka", role: "Full-Stack Developer", desc: "Builds frontend authentication experiences and user-facing product features.", image: member6Image, linkedin: "https://www.linkedin.com/in/s-a-movinka/", github: "https://github.com/S-A-Movinka" },
];

const TeamSection = () => (
  <section id="team" className="section-padding bg-warm-cream">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
        <p className="text-muted-foreground">The people behind CookMate.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl bg-card border border-border p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {m.image ? (
                <img src={m.image} alt={`${m.name} profile`} className="h-full w-full object-cover" />
              ) : (
                <User className="text-primary" size={28} />
              )}
            </div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-primary text-sm font-medium mb-2">{m.role}</p>
            <p className="text-muted-foreground text-sm">{m.desc}</p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${m.name} LinkedIn`}
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={m.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${m.name} GitHub`}
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
