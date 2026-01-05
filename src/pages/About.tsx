import Layout from "@/components/layout/Layout";
import { Shield, Users, Target, Eye, Lock, Award, Globe, Zap, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About BlueRoots
            </h1>
            <p className="text-xl text-muted-foreground">
              Democratizing political fundraising through transparency, security, and accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Democratize political fundraising through an accessible, transparent platform
                that provides powerful analytics and ensures regulatory compliance.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: Eye,
                  title: "Transparency",
                  description: "Complete donation tracking and reporting with real-time visibility for all stakeholders."
                },
                {
                  icon: Shield,
                  title: "Security",
                  description: "PCI DSS compliant payment processing with bank-level encryption and security protocols."
                },
                {
                  icon: Globe,
                  title: "Accessibility",
                  description: "Mobile-first design with WCAG 2.1 AA compliance ensuring everyone can participate."
                },
                {
                  icon: Award,
                  title: "Compliance",
                  description: "Built-in audit trails, FEC/IRS reporting, and regulatory documentation."
                }
              ].map((value, index) => (
                <div key={index} className="bg-background rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive Platform</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to manage political campaigns, donations, and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Political Campaigns",
                  features: ["Fundraising tools", "Compliance reporting", "Donor management", "Real-time analytics"]
                },
                {
                  icon: HeartHandshake,
                  title: "Non-Profits",
                  features: ["Easy donation setup", "Tax receipts", "Recurring donations", "Social sharing"]
                },
                {
                  icon: Users,
                  title: "Grassroots",
                  features: ["Community engagement", "Quick donate flow", "Impact tracking", "Mobile-first"]
                }
              ].map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{platform.title}</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Security & Compliance</h2>
              <p className="text-lg text-muted-foreground">
                Trust is at the core of everything we build.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "PCI DSS Compliant",
                "GDPR Ready",
                "CCPA Compliant",
                "FEC Approved",
                "1099-K Reports",
                "Audit Trails",
                "2FA Security",
                "SOC 2 Type II"
              ].map((cert, index) => (
                <div key={index} className="bg-background rounded-lg p-4 text-center border border-border">
                  <p className="text-sm font-medium text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500K+", label: "Active Donors" },
                { value: "$125M+", label: "Funds Raised" },
                { value: "10,000+", label: "Campaigns" },
                { value: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join the Movement</h2>
            <p className="text-muted-foreground mb-8">
              Start your campaign or make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/campaigns/create" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Start a Campaign
              </a>
              <a href="/campaigns" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent/10 font-medium transition-colors">
                Browse Campaigns
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
