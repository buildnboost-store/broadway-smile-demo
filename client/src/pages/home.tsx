import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { QuickInfo } from "@/components/sections/QuickInfo";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { ComfortFeatures } from "@/components/sections/ComfortFeatures";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloat(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/20">
      <Navbar />
      <main>
        <Hero />
        <QuickInfo />
        <Services />
        <WhyChooseUs />
        <About />
        <Reviews />
        <ComfortFeatures />
        <BookingCTA />
        <Location />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showFloat && (
          <motion.a
            href="tel:+12125550196"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="md:hidden fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <Phone className="w-6 h-6 fill-current" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
