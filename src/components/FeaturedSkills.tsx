import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const skills = [
  {
    name: "Tailoring",
    description: "Learn the art of garment making and design.",
    image: "tailoring",
  },
  {
    name: "Welding",
    description: "Master the techniques of metal fabrication.",
    image: "welding",
  },
  {
    name: "Data Entry",
    description: "Develop essentials skills for the digital office.",
    image: "data-entry",
  },
  {
    name: "Electrician",
    description: "Become a certified electrical professional.",
    image: "electrician",
  },
];

const FeaturedSkills = () => {
  return (
    <section className="bg-light-bg py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Featured Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore popular skills and start your learning journey today.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Link key={index} to={`/roadmap/${skill.name.toLowerCase()}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-primary mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;
