import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";

const categories = [
  "All",
  "Political",
  "Environment",
  "Healthcare",
  "Education",
  "Civic",
  "Community",
  "Non-Profit",
];

// Mock campaign data
const allCampaigns = [
  {
    id: "1",
    title: "Clean Energy Initiative for Rural Communities",
    description: "Bringing sustainable solar power to underserved rural communities across the Midwest.",
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
    description: "Empowering young voters through education, registration assistance, and civic engagement.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    category: "Civic",
    raised: 45000,
    goal: 75000,
    donors: 1256,
    daysLeft: 32,
    location: "National",
  },
  {
    id: "3",
    title: "Healthcare Access for Veterans",
    description: "Providing mental health resources and medical support for veterans.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    category: "Healthcare",
    raised: 89000,
    goal: 150000,
    donors: 1834,
    daysLeft: 45,
    location: "Texas",
  },
  {
    id: "4",
    title: "STEM Education for Underserved Schools",
    description: "Bringing robotics labs and coding programs to schools that need them most.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    category: "Education",
    raised: 67000,
    goal: 100000,
    donors: 892,
    daysLeft: 21,
    location: "Georgia",
  },
  {
    id: "5",
    title: "Community Garden Network",
    description: "Creating urban gardens to address food insecurity in downtown neighborhoods.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    category: "Community",
    raised: 23000,
    goal: 40000,
    donors: 456,
    daysLeft: 60,
    location: "Michigan",
  },
  {
    id: "6",
    title: "Local Democracy Action Fund",
    description: "Supporting grassroots candidates in local elections across swing districts.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    category: "Political",
    raised: 156000,
    goal: 250000,
    donors: 3421,
    daysLeft: 14,
    location: "Pennsylvania",
    featured: true,
  },
];

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCampaigns = allCampaigns.filter((campaign) => {
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="gradient-hero">
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
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
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

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "gradient-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
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
