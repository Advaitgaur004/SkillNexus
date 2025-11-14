import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

import tailor from "@/assets/tailor.jpg";
import welding from "@/assets/welding.avif";
import dataEntry from "@/assets/ds.webp";
import electrician from "@/assets/electrician.avif";
import driving from "@/assets/driver.avif";
import cooking from "@/assets/cook.avif";
import mobileRepair from "@/assets/mobile-repair.jpg";
import computerBasics from "@/assets/cs.avif";
import beautyParlour from "@/assets/beauty.jpg";

const skills = [
  {
    name: "Tailoring",
    description: "Learn the art of garment making and design.",
    image: tailor,
  },
  {
    name: "Welding",
    description: "Master the techniques of metal fabrication.",
    image: welding,
  },
  {
    name: "Data Entry",
    description: "Develop essentials skills for the digital office.",
    image: dataEntry,
  },
  {
    name: "Electrician",
    description: "Become a certified electrical professional.",
    image: electrician,
  },
  {
    name: "Driving",
    description: "Build a path from driver to transport business owner.",
    image: driving,
  },
  {
    name: "Cooking",
    description: "Turn home-style cooking into a professional career.",
    image: cooking,
  },
  {
    name: "Mobile Repair",
    description: "Learn smartphone diagnosis and repair skills.",
    image: mobileRepair,
  },
  {
    name: "Computer Basics",
    description: "Start with typing, internet use, and office tools.",
    image: computerBasics,
  },
  {
    name: "Beauty Parlour",
    description: "Grow from basic grooming to owning a beauty studio.",
    image: beautyParlour,
  },
];

const FeaturedSkills = () => {
  return (
    <section className="py-12 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Skills</h2>
          <p className="text-foreground/80 text-center mb-8 max-w-2xl mx-auto">Explore popular skills and start your learning journey today.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Link key={index} to={`/roadmap/${skill.name.toLowerCase()}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-40 bg-muted relative overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{skill.name}</h3>
                  <p className="text-sm text-foreground/80">{skill.description}</p>
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
