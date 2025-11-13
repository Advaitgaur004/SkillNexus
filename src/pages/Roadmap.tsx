import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Briefcase, Store, Users } from "lucide-react";

interface RoadmapStep {
  stage: string;
  title: string;
  salary: string;
  description: string;
  skills: string[];
  icon: any;
  color: string;
}

const mockRoadmaps: Record<string, RoadmapStep[]> = {
  tailoring: [
    {
      stage: "Stage 1: Beginner",
      title: "Stitching Helper (₹8k/month)",
      salary: "₹8,000 - ₹12,000/month",
      description: "Learn foundational skills like basic stitching, machine operation, and fabric handling.",
      skills: ["Stitching", "Machine Operation", "Fabric Handling"],
      icon: BookOpen,
      color: "text-secondary",
    },
    {
      stage: "Stage 2: Intermediate",
      title: "Master Cutter (₹15k/month)",
      salary: "₹15,000 - ₹25,000/month",
      description: "Master pattern making, precision cutting, and complex garment construction techniques.",
      skills: ["Pattern Making", "Precision Cutting", "Garment Construction"],
      icon: Briefcase,
      color: "text-accent",
    },
    {
      stage: "Stage 3: Advanced",
      title: "Boutique Owner",
      salary: "₹30,000+ /month (potential)",
      description: "Focus on entrepreneurial skills like business management, client relations, and brand building.",
      skills: ["Business Management", "Client Relations", "Brand Building"],
      icon: Store,
      color: "text-primary",
    },
  ],
  welding: [
    {
      stage: "Stage 1: Beginner",
      title: "Welding Assistant (₹10k/month)",
      salary: "₹10,000 - ₹15,000/month",
      description: "Learn basic welding techniques, safety protocols, and equipment handling.",
      skills: ["Arc Welding", "Safety Protocols", "Equipment Handling"],
      icon: BookOpen,
      color: "text-secondary",
    },
    {
      stage: "Stage 2: Intermediate",
      title: "Certified Welder (₹20k/month)",
      salary: "₹20,000 - ₹35,000/month",
      description: "Master advanced welding techniques including TIG, MIG, and structural welding.",
      skills: ["TIG Welding", "MIG Welding", "Structural Welding"],
      icon: Briefcase,
      color: "text-accent",
    },
    {
      stage: "Stage 3: Advanced",
      title: "Welding Contractor",
      salary: "₹50,000+ /month (potential)",
      description: "Start your own welding business with project management and client acquisition skills.",
      skills: ["Project Management", "Client Acquisition", "Team Leadership"],
      icon: Store,
      color: "text-primary",
    },
  ],
};

const Roadmap = () => {
  const { skill } = useParams<{ skill: string }>();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const roadmapData = skill ? mockRoadmaps[skill] || [] : [];
  const skillName = skill ? skill.charAt(0).toUpperCase() + skill.slice(1) : "";

  useEffect(() => {
    // Simulate AI processing
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        return prev + 20;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [skill]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-light-bg">
          <div className="text-center max-w-md px-4">
            <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              Analyzing Market Trends...
            </h2>
            <p className="text-muted-foreground mb-6">
              Creating your personalized career roadmap for {skillName}
            </p>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>
    );
  }

  if (roadmapData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Skill not found
            </h2>
            <p className="text-muted-foreground">
              We don't have data for "{skillName}" yet. Try searching for another skill.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">
              Your Career Path: {skillName}
            </h1>
            <p className="text-lg text-success font-medium">
              Follow the path from beginner to expert and achieve your career goals.
            </p>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="py-6 px-4 bg-light-bg border-y">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">3,847 learners</span> are currently on this path
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Steps */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {roadmapData.map((step, index) => (
                  <Card key={index} className="relative md:ml-20 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Icon circle */}
                    <div className="absolute -left-12 top-8 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-secondary shadow-lg">
                      <step.icon className="h-8 w-8 text-secondary-foreground" />
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-2 bg-success/10 text-success hover:bg-success/20">
                            {step.stage}
                          </Badge>
                          <CardTitle className="text-2xl mb-1">{step.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                        <div className="md:hidden">
                          <step.icon className={`h-10 w-10 ${step.color}`} />
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                            Key Skills Required:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill, i) => (
                              <Badge key={i} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-3">
                          <Button className="bg-secondary hover:bg-secondary/90 flex-1">
                            {index === 0 ? "Explore Beginner Skills" : 
                             index === 1 ? "View Intermediate Path" : 
                             "Learn About Ownership"}
                          </Button>
                          {index < roadmapData.length - 1 && (
                            <Button variant="outline" className="flex-1">
                              View Course Details
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Explore government schemes and training programs available for {skillName}
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Browse Training Programs
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap;
