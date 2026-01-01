import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  location: string;
  featured?: boolean;
}

const CampaignCard = ({
  id,
  title,
  description,
  image,
  category,
  raised,
  goal,
  donors,
  daysLeft,
  location,
  featured = false,
}: CampaignCardProps) => {
  const progress = Math.min((raised / goal) * 100, 100);
  const formattedRaised = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(raised);
  const formattedGoal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(goal);

  return (
    <Link to={`/campaigns/${id}`} className="group block">
      <div
        className={cn(
          "bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
          featured && "ring-2 ring-primary/20"
        )}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <Badge
            className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground border-0"
          >
            {category}
          </Badge>

          {featured && (
            <Badge className="absolute top-3 right-3 gradient-primary text-primary-foreground border-0">
              Featured
            </Badge>
          )}

          {/* Quick Stats Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 text-primary-foreground text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {daysLeft} days left
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>

          {/* Progress */}
          <div className="space-y-2 mb-4">
            <Progress value={progress} className="h-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-foreground">{formattedRaised}</span>
              <span className="text-muted-foreground">of {formattedGoal}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{donors.toLocaleString()} donors</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-success">
              <Heart className="w-4 h-4" />
              <span>{Math.round(progress)}% funded</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
