import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { ArrowRight } from "lucide-react";

// Featured political campaigns
const featuredCampaigns = [
  {
    id: "1",
    title: "Progressive Senate Campaign 2026",
    description: "Electing a voice for working families, healthcare reform, and climate action.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    category: "Political",
    raised: 156000,
    goal: 250000,
    donors: 3421,
    daysLeft: 120,
    location: "Pennsylvania",
    featured: true,
  },
  {
    id: "2",
    title: "Grassroots Organizing Fund",
    description: "Building political power from the ground up with community-driven campaigns across swing districts.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    category: "Political",
    raised: 112000,
    goal: 200000,
    donors: 2156,
    daysLeft: 180,
    location: "Florida",
    featured: true,
  },
  {
    id: "3",
    title: "State Assembly Election Fund",
    description: "Electing representatives for affordable housing, public education, and environmental protection.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80",
    category: "Political",
    raised: 89000,
    goal: 150000,
    donors: 1834,
    daysLeft: 105,
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
