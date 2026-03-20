import { Search, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Search for a Skill",
    description: "Find the perfect skill you want to learn, from traditional crafts to modern tech.",
  },
  {
    icon: Target,
    title: "Explore Opportunities",
    description: "Discover government schemes and training programs available near you.",
  },
  {
    icon: TrendingUp,
    title: "Apply and Grow",
    description: "Directly apply to courses and begin your path to a brighter future.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-foreground/80 text-lg">
            A simple guide to starting your journey with SkillNexus.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-foreground">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground/80">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
