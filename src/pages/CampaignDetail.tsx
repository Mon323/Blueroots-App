import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Share2,
  Users,
  Clock,
  MapPin,
  Shield,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  TrendingUp,
} from "lucide-react";

// Mock campaign data
const campaignData = {
  id: "1",
  title: "Clean Energy Initiative for Rural Communities",
  description: `Our mission is to bring sustainable, affordable solar energy to underserved rural communities across the Midwest. 

For too many families in rural America, energy costs consume a disproportionate share of their income. Many live in areas where traditional energy infrastructure is unreliable or expensive.

**What We're Doing:**
- Installing community solar panels in 5 rural counties
- Providing free energy audits for 500+ households
- Training local technicians in solar installation and maintenance
- Creating 50+ green jobs in communities that need them most

**Your Impact:**
- $25 powers one home for a month
- $100 sponsors a family energy audit
- $500 funds technician training for one local resident
- $2,500 covers a complete residential installation

Every dollar brings us closer to a cleaner, more equitable energy future.`,
  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
  category: "Environment",
  raised: 127500,
  goal: 200000,
  donors: 2847,
  daysLeft: 18,
  location: "Iowa",
  createdAt: "2025-11-15",
  organizer: {
    name: "Midwest Green Initiative",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
  updates: [
    {
      date: "Dec 28, 2025",
      title: "Milestone Reached!",
      content: "We've officially reached 60% of our goal. Thank you to all 2,800+ donors!",
    },
    {
      date: "Dec 15, 2025",
      title: "First Installation Complete",
      content: "The Johnson family in rural Iowa now has solar panels powering their home.",
    },
  ],
};

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const CampaignDetail = () => {
  const { id } = useParams();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorMessage, setDonorMessage] = useState("");

  const campaign = campaignData;
  const progress = (campaign.raised / campaign.goal) * 100;

  const formattedRaised = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(campaign.raised);

  const formattedGoal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(campaign.goal);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const finalAmount = selectedAmount || Number(customAmount) || 0;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/campaigns"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Campaigns
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-foreground">
                {campaign.category}
              </Badge>
            </div>

            {/* Title & Organizer */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {campaign.title}
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <img
                    src={campaign.organizer.avatar}
                    alt={campaign.organizer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{campaign.organizer.name}</span>
                      {campaign.organizer.verified && (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">Organizer</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {campaign.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Created {new Date(campaign.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">About this Campaign</h2>
              <div className="prose prose-neutral max-w-none text-muted-foreground whitespace-pre-line">
                {campaign.description}
              </div>
            </div>

            {/* Updates */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Campaign Updates</h2>
              <div className="space-y-4">
                {campaign.updates.map((update, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary pl-4 py-2"
                  >
                    <p className="text-sm text-muted-foreground mb-1">{update.date}</p>
                    <h3 className="font-medium text-foreground mb-1">{update.title}</h3>
                    <p className="text-sm text-muted-foreground">{update.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Donation Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Progress Card */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                {/* Progress Stats */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-3xl font-bold text-foreground">{formattedRaised}</span>
                    <span className="text-muted-foreground">raised of {formattedGoal}</span>
                  </div>
                  <Progress value={progress} className="h-3 mb-4" />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xl font-bold text-foreground">{Math.round(progress)}%</p>
                      <p className="text-xs text-muted-foreground">Funded</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-foreground">{campaign.donors.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Donors</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-foreground">{campaign.daysLeft}</p>
                      <p className="text-xs text-muted-foreground">Days Left</p>
                    </div>
                  </div>
                </div>

                {/* Donation Amounts */}
                <div className="mb-6">
                  <p className="font-medium text-foreground mb-3">Select Amount</p>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 rounded-lg font-medium transition-all ${
                          selectedAmount === amount
                            ? "gradient-primary text-primary-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>

                {/* Donor Info */}
                <div className="space-y-3 mb-6">
                  <Input
                    placeholder="Your name (optional)"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                  />
                  <Textarea
                    placeholder="Add a message of support (optional)"
                    value={donorMessage}
                    onChange={(e) => setDonorMessage(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Donate Button */}
                <Button variant="hero" size="xl" className="w-full mb-4" disabled={finalAmount <= 0}>
                  <Heart className="w-5 h-5" />
                  Donate {finalAmount > 0 ? `$${finalAmount}` : "Now"}
                </Button>

                {/* Share */}
                <Button variant="outline" className="w-full gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Campaign
                </Button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Secure, encrypted donations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>100% goes to the campaign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetail;
