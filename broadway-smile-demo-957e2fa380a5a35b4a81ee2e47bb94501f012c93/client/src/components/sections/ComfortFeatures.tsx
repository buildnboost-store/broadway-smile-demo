import { Check } from "lucide-react";
import comfortImage from "@/assets/comfort-dental.png"; 

export function ComfortFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Comfort-First Dentistry</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We know visiting the dentist isn't everyone's favorite activity. That's why we've designed every aspect of our clinic to put you at ease.
            </p>
            
            <ul className="space-y-4">
              {[
                "Netflix available during treatments",
                "Warm blankets for extra coziness",
                "Quiet appointment options available",
                "Friendly, calming staff trained in anxiety relief",
                "Gentle care for anxious patients"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-accent/20 p-1 rounded-full text-accent">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-primary/5 transform rotate-3 rounded-2xl"></div>
            <img 
              src={comfortImage} 
              alt="Comfortable Treatment Room" 
              className="relative rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
