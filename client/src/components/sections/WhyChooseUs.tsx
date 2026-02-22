import { CheckCircle2, Heart, Tv, Coffee, ShieldCheck, Clock, SmilePlus, MapPin } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Minimal wait time" },
  { icon: SmilePlus, title: "Friendly front desk" },
  { icon: Heart, title: "Gentle, patient-first care" },
  { icon: ShieldCheck, title: "Modern technology" },
  { icon: Tv, title: "Netflix during visits" },
  { icon: Coffee, title: "Calm, quiet experience" },
  { icon: CheckCircle2, title: "Great for kids & first-time patients" },
  { icon: MapPin, title: "Downtown Manhattan location" },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Patients Choose Broadway Smile Studio</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 p-4 bg-accent/10 rounded-full text-accent">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-primary">{benefit.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground border-t pt-8 max-w-2xl mx-auto">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> LGBTQ+ friendly
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Women-owned
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Asian-owned
          </span>
        </div>
      </div>
    </section>
  );
}
