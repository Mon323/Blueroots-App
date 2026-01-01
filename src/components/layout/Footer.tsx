import { Link } from "react-router-dom";
import { Heart, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "Browse Campaigns", href: "/campaigns" },
      { name: "Start a Campaign", href: "/campaigns/create" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Pricing", href: "/pricing" },
    ],
    resources: [
      { name: "Help Center", href: "/help" },
      { name: "Campaign Tips", href: "/tips" },
      { name: "Success Stories", href: "/stories" },
      { name: "API Documentation", href: "/api" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Compliance", href: "/compliance" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">BlueRoots</span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Democratizing political fundraising through transparency, security, and accessibility.
            </p>
            <div className="flex gap-3">
              {[Twitter, Facebook, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © 2026 BlueRoots. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              PCI DSS Compliant • GDPR Ready • FEC Approved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
