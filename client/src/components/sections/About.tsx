import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Dental Experience That Feels Different</h2>
            <div className="space-y-6 text-lg md:text-xl text-blue-100 leading-relaxed font-light">
              <p>
                At Broadway Smile Studio, we believe visiting the dentist shouldn't be a source of stress. 
                Our warm, inclusive approach puts your comfort first, blending transparency with modern dentistry to ensure you feel heard and cared for at every step.
              </p>
              <p>
                From our cozy waiting area to our gentle treatment rooms, every detail is designed to help you relax. 
                Whether it's your first visit in years or a routine check-up, we treat you like family—not just a patient.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2,300+</div>
              <p className="text-blue-200">Happy Patients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.9★</div>
              <p className="text-blue-200">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">Same-week</div>
              <p className="text-blue-200">Appointments Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
