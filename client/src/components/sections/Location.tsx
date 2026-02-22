import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Visit Us in Downtown Manhattan</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-full text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">112 Broadway, Suite 1302<br />New York, NY 10006</p>
                  <p className="text-sm text-accent mt-2 font-medium">Located near Trinity Place</p>
                </div>
              </div>

              <div className="pl-16">
                <h4 className="font-semibold text-foreground mb-2">Parking & Transit</h4>
                <p className="text-muted-foreground text-sm">
                  Easy access via subway (R, W, 4, 5 lines) and nearby parking garages on Thames St.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                Get Directions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="rounded-full">
                Call Clinic
              </Button>
            </div>
          </div>

          <div className="h-[400px] bg-secondary rounded-2xl overflow-hidden shadow-inner relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.545367617933!2d-74.0135804240751!3d40.70725357139433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1727cc3621%3A0x62913e9a444855c9!2s112%20Broadway%2C%20New%20York%2C%20NY%2010006!5e0!3m2!1sen!2sus!4v1709665555431!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
