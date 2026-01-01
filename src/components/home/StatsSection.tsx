import { DollarSign, Users, Globe, HeartHandshake } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$125M+",
    label: "Total Raised",
    description: "Funds raised for causes nationwide",
  },
  {
    icon: Users,
    value: "500K+",
    label: "Active Donors",
    description: "Supporters making a difference",
  },
  {
    icon: Globe,
    value: "50",
    label: "States Covered",
    description: "Campaigns in every state",
  },
  {
    icon: HeartHandshake,
    value: "10,000+",
    label: "Campaigns Funded",
    description: "Successful grassroots initiatives",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-primary-foreground"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
