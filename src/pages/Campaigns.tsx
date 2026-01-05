import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

// Political campaign data
const allCampaigns = [
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
    title: "City Council Reform Initiative",
    description: "Supporting candidates committed to transparency, accountability, and community-first policies.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    category: "Political",
    raised: 45000,
    goal: 75000,
    donors: 1256,
    daysLeft: 90,
    location: "California",
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
  },
  {
    id: "4",
    title: "Local School Board Candidates",
    description: "Supporting candidates committed to improving public education for all children.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    category: "Political",
    raised: 67000,
    goal: 100000,
    donors: 892,
    daysLeft: 60,
    location: "Georgia",
  },
  {
    id: "5",
    title: "County Sheriff Reform Campaign",
    description: "Advancing law enforcement accountability and community safety initiatives.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "Political",
    raised: 23000,
    goal: 50000,
    donors: 456,
    daysLeft: 45,
    location: "Michigan",
  },
  {
    id: "6",
    title: "Grassroots Organizing Fund",
    description: "Building political power from the ground up with community-driven campaigns.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    category: "Political",
    raised: 112000,
    goal: 200000,
    donors: 2156,
    daysLeft: 180,
    location: "Florida",
    featured: true,
  },
];

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaigns = allCampaigns.filter((campaign) => {
    return (
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Campaigns
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover and support campaigns that align with your values. Every donation makes a difference.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search */}
        <div className="max-w-md mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search political campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredCampaigns.length}</span> campaigns
          </p>
        </div>

        {/* Campaign Grid */}
        {filteredCampaigns.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No campaigns found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Campaigns;
