import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-6">Broadway Smile Studio</h3>
            <p className="text-blue-200 leading-relaxed max-w-sm mb-6">
              Modern, comfort-first dentistry in the heart of Downtown Manhattan. We're dedicated to gentle care and transparent pricing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Contact</h4>
            <div className="space-y-4 text-blue-100">
              <p>112 Broadway, Suite 1302<br/>New York, NY 10006</p>
              <p>+1 (212) 555-0196</p>
              <p>hello@broadwaysmilestudio.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Hours</h4>
            <div className="space-y-2 text-blue-100">
              <p className="flex justify-between"><span>Mon - Fri:</span> <span>8am - 6pm</span></p>
              <p className="flex justify-between"><span>Saturday:</span> <span>9am - 4pm</span></p>
              <p className="flex justify-between"><span>Sunday:</span> <span>Closed</span></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
          <div className="flex gap-4">
            <span>LGBTQ+ Friendly</span>
            <span>•</span>
            <span>Women-owned</span>
            <span>•</span>
            <span>Asian-owned</span>
          </div>
          <p>Demo website created by Build N Boost — buildnboost.store</p>
        </div>
      </div>
    </footer>
  );
}
