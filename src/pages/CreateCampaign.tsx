import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
  DollarSign,
  Building2,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, title: "Basic Info", icon: CheckCircle2 },
  { number: 2, title: "Details", icon: ImageIcon },
  { number: 3, title: "Financials", icon: DollarSign },
  { number: 4, title: "Review", icon: Eye },
];

const categories = [
  "Political",
  "Environment",
  "Healthcare",
  "Education",
  "Civic",
  "Community",
  "Non-Profit",
];

const CreateCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    goal: "",
    duration: "30",
    description: "",
    story: "",
    externalLinks: "",
    bankName: "",
    accountHolder: "",
    routingNumber: "",
    accountNumber: "",
  });

  const progress = (currentStep / 4) * 100;

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Submitting campaign:", formData);
    // Handle campaign submission
  };

  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-4rem)] bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Create Campaign</h1>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Steps */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className={cn(
                        "flex items-center gap-4 p-3 rounded-xl transition-all",
                        currentStep === step.number
                          ? "bg-primary/10 text-primary"
                          : currentStep > step.number
                          ? "text-success"
                          : "text-muted-foreground"
                      )}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                          currentStep === step.number
                            ? "gradient-primary text-primary-foreground"
                            : currentStep > step.number
                            ? "bg-success text-success-foreground"
                            : "bg-muted"
                        )}
                      >
                        {currentStep > step.number ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <span className="font-medium">{step.title}</span>
                    </div>
                  ))}
                </div>
                <Progress value={progress} className="mt-6 h-2" />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border p-8">
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Basic Information</h2>
                      <p className="text-muted-foreground">
                        Let's start with the essentials of your campaign.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Campaign Title *</Label>
                        <Input
                          id="title"
                          placeholder="Enter a compelling title for your campaign"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="mt-1.5"
                        />
                      </div>

                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="goal">Fundraising Goal *</Label>
                          <div className="relative mt-1.5">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="goal"
                              type="number"
                              placeholder="10000"
                              value={formData.goal}
                              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="duration">Duration (days)</Label>
                          <Select
                            value={formData.duration}
                            onValueChange={(value) => setFormData({ ...formData, duration: value })}
                          >
                            <SelectTrigger className="mt-1.5">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="14">14 days</SelectItem>
                              <SelectItem value="30">30 days</SelectItem>
                              <SelectItem value="60">60 days</SelectItem>
                              <SelectItem value="90">90 days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Details */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Campaign Details</h2>
                      <p className="text-muted-foreground">
                        Tell your story and add visuals to engage donors.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="description">Short Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="A brief summary of your campaign (max 160 characters)"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="mt-1.5"
                          rows={2}
                          maxLength={160}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {formData.description.length}/160 characters
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="story">Full Story *</Label>
                        <Textarea
                          id="story"
                          placeholder="Tell donors why this campaign matters..."
                          value={formData.story}
                          onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                          className="mt-1.5"
                          rows={8}
                        />
                      </div>

                      <div>
                        <Label>Campaign Image</Label>
                        <div className="mt-1.5 border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground">
                            Drag and drop an image, or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PNG, JPG up to 5MB
                          </p>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="links">External Links (optional)</Label>
                        <Input
                          id="links"
                          placeholder="https://yourwebsite.com"
                          value={formData.externalLinks}
                          onChange={(e) => setFormData({ ...formData, externalLinks: e.target.value })}
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Financials */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Financial Information</h2>
                      <p className="text-muted-foreground">
                        Connect your bank account for secure fund transfers.
                      </p>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-4 flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Secure & Encrypted</p>
                        <p className="text-sm text-muted-foreground">
                          Your banking information is encrypted using bank-level security.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="bankName">Bank Name *</Label>
                        <Input
                          id="bankName"
                          placeholder="Enter your bank name"
                          value={formData.bankName}
                          onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                          className="mt-1.5"
                        />
                      </div>

                      <div>
                        <Label htmlFor="accountHolder">Account Holder Name *</Label>
                        <Input
                          id="accountHolder"
                          placeholder="Name as it appears on the account"
                          value={formData.accountHolder}
                          onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                          className="mt-1.5"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="routing">Routing Number *</Label>
                          <Input
                            id="routing"
                            placeholder="9 digits"
                            value={formData.routingNumber}
                            onChange={(e) => setFormData({ ...formData, routingNumber: e.target.value })}
                            className="mt-1.5"
                          />
                        </div>
                        <div>
                          <Label htmlFor="account">Account Number *</Label>
                          <Input
                            id="account"
                            placeholder="Account number"
                            value={formData.accountNumber}
                            onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                            className="mt-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Review & Submit</h2>
                      <p className="text-muted-foreground">
                        Review your campaign details before submitting for approval.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-muted/50 rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-4">Campaign Summary</h3>
                        <dl className="space-y-3">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Title</dt>
                            <dd className="font-medium text-foreground">{formData.title || "—"}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Category</dt>
                            <dd className="font-medium text-foreground">{formData.category || "—"}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Goal</dt>
                            <dd className="font-medium text-foreground">
                              {formData.goal ? `$${Number(formData.goal).toLocaleString()}` : "—"}
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Duration</dt>
                            <dd className="font-medium text-foreground">{formData.duration} days</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                        <p className="text-sm text-foreground">
                          <strong>What happens next?</strong> Your campaign will be reviewed by our team within 24-48 hours. 
                          You'll receive an email notification once it's approved.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>

                  {currentStep < 4 ? (
                    <Button variant="hero" onClick={handleNext} className="gap-2">
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button variant="hero" onClick={handleSubmit} className="gap-2">
                      Submit Campaign
                      <CheckCircle2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCampaign;
