import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Emily R.",
    text: "Super friendly staff and barely any waiting. My cleaning was quick, gentle, and professional.",
    role: "Patient since 2021"
  },
  {
    name: "Jason M.",
    text: "Loved the comfort touches—Netflix and a calm environment. The dentist explained everything clearly.",
    role: "Patient since 2023"
  },
  {
    name: "Sophia K.",
    text: "Brought my 3-year-old for her first visit. The team was patient and made her feel safe.",
    role: "Mother of patient"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What NYC Patients Are Saying</h2>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
          </div>
          <p className="mt-2 text-muted-foreground">Rated 4.9★ from 2,300+ reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 flex flex-col relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current w-4 h-4" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 flex-grow italic">"{review.text}"</p>
              <div>
                <p className="font-bold text-primary">{review.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5">
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
