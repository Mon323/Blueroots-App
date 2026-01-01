import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Get Started Today
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Launch Your Campaign?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of successful campaigns. Our platform provides everything you need to raise funds effectively and compliantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/campaigns/create">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Start Your Campaign
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="gradient-primary p-8 lg:p-12 flex items-center justify-center">
              <div className="text-primary-foreground text-center">
                <p className="text-6xl font-bold mb-2">0%</p>
                <p className="text-xl font-medium mb-4">Platform Fee</p>
                <p className="text-primary-foreground/80 text-sm max-w-xs">
                  We believe in your cause. That's why we charge zero platform fees—100% of donations go to your campaign.*
                </p>
                <p className="text-primary-foreground/60 text-xs mt-4">
                  *Standard payment processing fees apply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
