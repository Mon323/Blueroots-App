import { Megaphone, CreditCard, TrendingUp, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: Megaphone,
    title: "Create Your Campaign",
    description: "Set up your fundraising campaign in minutes with our intuitive 4-step wizard. Add your story, set goals, and customize your page.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Accept Donations",
    description: "Securely accept donations from supporters. We handle all payment processing with PCI DSS compliant infrastructure.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your campaign in real-time with powerful analytics. See donor trends, geographic data, and engagement metrics.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BadgeCheck,
    title: "Receive Funds",
    description: "Automatic payouts to your verified bank account. Complete audit trails and tax-ready reporting for full compliance.",
    color: "bg-success/10 text-success",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How BlueRoots Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From campaign creation to fund distribution, we've streamlined every step of the fundraising process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
                </div>
              )}

              <div className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 z-10">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-5`}>
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
