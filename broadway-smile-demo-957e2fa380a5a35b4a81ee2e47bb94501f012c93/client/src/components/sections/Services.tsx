import { motion } from "framer-motion";
import { 
  Sparkles, 
  Syringe, // For fillings? or Drill? Syringe is generic medical. Let's use Sparkles for cleaning
  Stethoscope, // Emergency
  Smile, // Cosmetic
  Zap, // Whitening
  Crown, // Crowns
  Moon, // Night guards
  Baby, // Kids
  Activity // Fillings/General
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Gentle, thorough preventive care." },
  { icon: Activity, title: "Fillings", desc: "Tooth-colored composite fillings." },
  { icon: Stethoscope, title: "Emergency Dentistry", desc: "Same-day appointments available." },
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Veneers, bonding, and makeovers." },
  { icon: Zap, title: "Teeth Whitening", desc: "Professional in-office brightening." },
  { icon: Crown, title: "Dental Crowns", desc: "Durable, natural-looking restorations." },
  { icon: Moon, title: "Night Guards", desc: "Custom protection for grinding." },
  { icon: Baby, title: "Kids Dentistry", desc: "Fun, safe visits for little ones." },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dental Services Designed for Comfort</h2>
          <p className="text-lg text-muted-foreground">
            From routine cleanings to cosmetic dentistry, we provide modern care with a gentle approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-primary/5 group"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
