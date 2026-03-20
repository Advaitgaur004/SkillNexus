import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SkillSearch = () => {
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (skill.trim()) {
      navigate(`/roadmap/${skill.toLowerCase()}`);
    }
  };

  const popularSkills = [
    "Tailoring",
    "Welding",
    "Data Entry",
    "Plumbing",
    "Carpentry",
    "Driving",
    "Cooking",
    "Excel",
    "Beauty Parlour",
    "Mobile Repair",
    "Electrician",
    "AC Repair",
    "Spoken English",
    "Computer Basics",
    "Digital Marketing",
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background via-light-bg to-background text-foreground">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="mb-4">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-foreground rounded-full text-sm font-semibold mb-4">
            Trusted by 50,000+ Users
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Connecting Potential to Performance
        </h1>
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Your guide to government-backed skill development and employment opportunities.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-center bg-background rounded-xl border-2 border-border p-2 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center flex-1 w-full">
              <Search className="h-5 w-5 text-foreground/70" />
              <Input
                type="text"
                placeholder="Type a skill (e.g., Tailoring, Welding, Data Entry)"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="border-0 focus-visible:ring-0 text-base"
              />
            </div>
            <Button 
              type="submit"
              className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto px-8 shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              Search
            </Button>
          </div>
        </form>

        {/* Popular Skills */}
        <div className="mb-8">
          <p className="text-sm text-foreground/60 mt-8 mb-4">Popular searches:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularSkills.map((popularSkill) => (
              <button
                key={popularSkill}
                onClick={() => {
                  setSkill(popularSkill);
                  navigate(`/roadmap/${popularSkill.toLowerCase()}`);
                }}
                className="px-4 py-2 bg-muted/50 text-foreground rounded-full text-sm font-medium transition-all hover:bg-muted transition-colors cursor-pointer"
              >
                {popularSkill}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span>1,240 people searched for skills today</span>
        </div>
      </div>
    </section>
  );
};

export default SkillSearch;
