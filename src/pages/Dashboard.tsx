import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Megaphone,
  Heart,
  Settings,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  Plus,
  MoreHorizontal,
  Bell,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard", active: true },
  { icon: Megaphone, label: "My Campaigns", href: "/dashboard/campaigns" },
  { icon: Heart, label: "My Donations", href: "/dashboard/donations" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

const stats = [
  { label: "Total Raised", value: "$12,450", change: "+12%", icon: DollarSign, color: "text-success" },
  { label: "Total Donors", value: "247", change: "+8%", icon: Users, color: "text-primary" },
  { label: "Active Campaigns", value: "3", change: "0", icon: Megaphone, color: "text-secondary" },
  { label: "Avg. Donation", value: "$50.40", change: "+5%", icon: TrendingUp, color: "text-accent" },
];

const myCampaigns = [
  {
    id: "1",
    title: "Clean Energy for Rural Iowa",
    status: "Active",
    raised: 12450,
    goal: 25000,
    donors: 247,
  },
  {
    id: "2",
    title: "Community Garden Project",
    status: "Draft",
    raised: 0,
    goal: 5000,
    donors: 0,
  },
];

const recentDonations = [
  { donor: "Sarah M.", amount: 100, campaign: "Clean Energy for Rural Iowa", time: "2 hours ago" },
  { donor: "Anonymous", amount: 50, campaign: "Clean Energy for Rural Iowa", time: "5 hours ago" },
  { donor: "Michael C.", amount: 250, campaign: "Clean Energy for Rural Iowa", time: "1 day ago" },
];

const Dashboard = () => {
  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-4rem)] bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-card rounded-2xl border border-border p-4 sticky top-24">
                <nav className="space-y-1">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        item.active
                          ? "gradient-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back! Here's your campaign overview.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon">
                    <Bell className="w-5 h-5" />
                  </Button>
                  <Link to="/campaigns/create">
                    <Button variant="hero" className="gap-2">
                      <Plus className="w-4 h-4" />
                      New Campaign
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border p-5 hover:shadow-card transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                      {stat.change !== "0" && (
                        <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                          {stat.change}
                        </Badge>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Campaigns & Donations */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* My Campaigns */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">My Campaigns</h2>
                    <Link to="/dashboard/campaigns" className="text-sm text-primary hover:underline flex items-center gap-1">
                      View All <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {myCampaigns.map((campaign) => (
                      <div key={campaign.id} className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium text-foreground line-clamp-1">{campaign.title}</h3>
                            <Badge
                              variant="secondary"
                              className={cn(
                                "mt-1",
                                campaign.status === "Active" ? "bg-success/10 text-success" : "bg-muted"
                              )}
                            >
                              {campaign.status}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                        <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2 mb-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            ${campaign.raised.toLocaleString()} of ${campaign.goal.toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">{campaign.donors} donors</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Donations */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">Recent Donations</h2>
                    <Link to="/dashboard/donations" className="text-sm text-primary hover:underline flex items-center gap-1">
                      View All <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {recentDonations.map((donation, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Heart className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{donation.donor}</p>
                            <p className="text-sm text-muted-foreground line-clamp-1">{donation.campaign}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-success">+${donation.amount}</p>
                          <p className="text-xs text-muted-foreground">{donation.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
