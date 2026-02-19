import { Button } from "@/components/ui/button";

export function BookingCTA() {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to book your visit?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Call now or request an appointment online in under a minute.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full h-14 px-10 text-lg font-semibold shadow-lg">
            Book Appointment
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full h-14 px-10 text-lg">
            Call Now: +1 (212) 555-0196
          </Button>
        </div>
      </div>
    </section>
  );
}
