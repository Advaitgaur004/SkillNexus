import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mic } from "lucide-react";

const SkillSearch = () => {
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (skill.trim()) {
      navigate(`/roadmap/${skill.toLowerCase()}`);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background to-light-bg">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
          Chart Your Career Path
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your guide to government-backed skill development and employment opportunities.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center bg-background rounded-lg border-2 border-border p-2 shadow-lg">
            <div className="flex items-center flex-1 w-full">
              <Search className="h-5 w-5 text-muted-foreground ml-2" />
              <Input
                type="text"
                placeholder="Type a skill (e.g., Tailoring, Welding, Data Entry)"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="border-0 focus-visible:ring-0 text-base"
              />
              <button type="button" className="p-2 hover:bg-muted rounded-md transition-colors">
                <Mic className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <Button 
              type="submit"
              className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto px-8"
              size="lg"
            >
              Search
            </Button>
          </div>
        </form>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span>1,240 people searched for skills today</span>
        </div>
      </div>
    </section>
  );
};

export default SkillSearch;
