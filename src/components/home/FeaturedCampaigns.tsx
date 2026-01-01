import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { ArrowRight } from "lucide-react";

// Mock data for featured campaigns
const featuredCampaigns = [
  {
    id: "1",
    title: "Clean Energy Initiative for Rural Communities",
    description: "Bringing sustainable solar power to underserved rural communities across the Midwest. Help us light up 500 homes.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    category: "Environment",
    raised: 127500,
    goal: 200000,
    donors: 2847,
    daysLeft: 18,
    location: "Iowa",
    featured: true,
  },
  {
    id: "2",
    title: "Youth Voter Registration Drive 2026",
    description: "Empowering young voters through education, registration assistance, and civic engagement programs.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    category: "Civic",
    raised: 45000,
    goal: 75000,
    donors: 1256,
    daysLeft: 32,
    location: "National",
    featured: true,
  },
  {
    id: "3",
    title: "Healthcare Access for Veterans",
    description: "Providing mental health resources and medical support for veterans transitioning back to civilian life.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    category: "Healthcare",
    raised: 89000,
    goal: 150000,
    donors: 1834,
    daysLeft: 45,
    location: "Texas",
    featured: true,
  },
];

const FeaturedCampaigns = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Featured Campaigns
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Discover campaigns making a real difference in communities across the nation.
            </p>
          </div>
          <Link to="/campaigns">
            <Button variant="outline" className="gap-2">
              View All Campaigns
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Campaign Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
