import { MapPin, Phone, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickInfo() {
  const infoItems = [
    {
      icon: MapPin,
      title: "Address",
      content: "112 Broadway, Suite 1302, NY",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (212) 555-0196",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Open · Closes 4 PM",
    },
  ];

  return (
    <div className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 py-4 md:py-0 md:px-4 first:pl-0">
              <div className="bg-white/10 p-3 rounded-full">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-white/60 font-medium uppercase tracking-wider mb-1">{item.title}</p>
                <p className="font-medium text-sm md:text-base">{item.content}</p>
              </div>
            </div>
          ))}
          <div className="py-4 md:py-0 md:pl-6 flex items-center justify-center md:justify-end">
            <Button className="w-full md:w-auto bg-white text-primary hover:bg-white/90 font-bold rounded-full">
              Book Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
