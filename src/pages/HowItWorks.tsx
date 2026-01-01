import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Megaphone,
  CreditCard,
  TrendingUp,
  BadgeCheck,
  Shield,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Megaphone,
    title: "Create Your Campaign",
    description: "Use our intuitive 4-step wizard to set up your fundraising campaign in minutes.",
    details: [
      "Add your campaign story and goals",
      "Upload compelling images and videos",
      "Set your fundraising target and timeline",
      "Connect your verified bank account",
    ],
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Accept Secure Donations",
    description: "Start receiving donations immediately with our PCI DSS compliant payment system.",
    details: [
      "Credit card, ACH, and PayPal support",
      "Recurring donation options",
      "Instant email receipts for donors",
      "Real-time fraud detection",
    ],
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Monitor your campaign performance with powerful real-time analytics.",
    details: [
      "Live donation tracking",
      "Donor demographics and trends",
      "Geographic heat maps",
      "Engagement metrics and insights",
    ],
  },
  {
    step: "04",
    icon: BadgeCheck,
    title: "Receive Your Funds",
    description: "Automatic payouts with complete audit trails and tax-ready documentation.",
    details: [
      "Weekly or monthly payout options",
      "Complete transaction history",
      "1099-K tax document generation",
      "FEC compliance reporting",
    ],
  },
];

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "PCI DSS compliant infrastructure protects every transaction with industry-leading encryption.",
  },
  {
    icon: FileText,
    title: "Compliance Built-In",
    description: "Automatic audit trails, tax reporting, and regulatory compliance features save you time and headaches.",
  },
  {
    icon: Users,
    title: "Donor Management",
    description: "Build relationships with your supporters through integrated CRM and communication tools.",
  },
];

const HowItWorksPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How BlueRoots Works
            </h1>
            <p className="text-xl text-muted-foreground">
              From campaign creation to fund distribution, we've streamlined every step of political fundraising.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="relative bg-card rounded-3xl border border-border p-8 shadow-card">
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl gradient-primary text-primary-foreground text-2xl font-bold flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                    <div className="pt-8">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <step.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="space-y-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Compliance & Security
            </h2>
            <p className="text-muted-foreground text-lg">
              Every feature is designed with political fundraising regulations in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of successful campaigns and start raising funds today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/campaigns/create">
              <Button size="xl" className="bg-background text-foreground hover:bg-background/90 gap-2">
                Start Your Campaign
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/campaigns">
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Explore Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;
