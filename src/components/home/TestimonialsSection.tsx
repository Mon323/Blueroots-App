import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "BlueRoots transformed our grassroots campaign. We raised over $50,000 in just two weeks with incredible donor engagement.",
    author: "Sarah Mitchell",
    role: "Campaign Manager",
    location: "Colorado",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    quote: "The compliance features alone saved us countless hours. Every donation is tracked, every report is ready for audit.",
    author: "Michael Chen",
    role: "Non-Profit Director",
    location: "California",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
  },
  {
    quote: "Donating is so easy. I can set up recurring contributions and track the impact of my donations in real-time.",
    author: "Emily Rodriguez",
    role: "Regular Donor",
    location: "Texas",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Campaigns Everywhere
          </h2>
          <p className="text-muted-foreground text-lg">
            See what campaign managers and donors are saying about BlueRoots.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
