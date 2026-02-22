import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-dental.png"; // Assuming we have this, otherwise placeholder

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Modern Dental Care in Downtown Manhattan
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Trusted NYC dentist with 4.9★ rating from 2,300+ patients. Minimal wait times, gentle care, and a comfort-first clinic experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 rounded-full h-12 px-8 text-base">
                Call Now
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-primary/10">
              <div>
                <div className="flex items-center gap-1 text-accent mb-1">
                  <Star className="fill-current w-4 h-4" />
                  <span className="font-bold text-foreground">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
              <div>
                <div className="font-bold text-foreground mb-1">2,300+</div>
                <p className="text-sm text-muted-foreground">Reviews</p>
              </div>
              <div>
                <div className="font-bold text-foreground mb-1">Downtown</div>
                <p className="text-sm text-muted-foreground">NYC</p>
              </div>
              <div>
                <div className="font-bold text-green-600 mb-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Open
                </div>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Modern Dental Clinic" 
              className="relative rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-xl shadow-xl border border-primary/5 flex items-center gap-3 animate-bounce-subtle">
              <div className="bg-green-100 p-2 rounded-full">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Wait Time</p>
                <p className="font-bold text-primary">&lt; 5 Minutes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
