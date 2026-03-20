import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users } from "lucide-react";

interface GeminiRoadmapStep {
  level: string;
  role: string;
  income: string;
  action: string;
  resource: string;
}

interface GeminiRoadmap {
  career_path_title: string;
  steps: GeminiRoadmapStep[];
  motivation_quote: string;
}

const Roadmap = () => {
  const { skill } = useParams<{ skill: string }>();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [roadmap, setRoadmap] = useState<GeminiRoadmap | null>(null);
  const [error, setError] = useState<string | null>(null);

  const skillName = skill ? skill.charAt(0).toUpperCase() + skill.slice(1) : "";

  useEffect(() => {
    if (!skill) return;

    setLoading(true);
    setProgress(0);
    setError(null);
    setRoadmap(null);

    const fetchRoadmap = async () => {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY as string | undefined;

      if (!apiKey) {
        setError("OpenRouter API key is missing. Please set VITE_OPENROUTER_API_KEY in your .env.");
        setLoading(false);
        setProgress(100);
        return;
      }

      try {
        const systemPrompt =
          "You are \"SkillNexus,\" an expert career counselor for the Indian rural economy. " +
          "The user will provide a raw skill (e.g., \"Driving\", \"Cooking\", \"Excel\"). You must output a structured JSON response. " +
          "The user is likely from a Tier-2/3 city in India. Do not suggest expensive degrees. Suggest practical, vocational steps. " +
          "Required JSON Output Format: { \"career_path_title\": \"e.g., Commercial Driver to Fleet Owner\", \"steps\": [ { \"level\": \"Entry Level\", \"role\": \"e.g., Taxi Driver / Delivery Partner\", \"income\": \"₹15,000 - ₹20,000\", \"action\": \"Get Commercial License\", \"resource\": \"Link to Parivahan Sewa\" }, { \"level\": \"Mid Level\", \"role\": \"e.g., Heavy Vehicle Driver\", \"income\": \"₹30,000+\", \"action\": \"Apply to Logistics Companies\", \"resource\": \"Search 'Trucking Jobs' on Indeed\" }, { \"level\": \"Dream Level\", \"role\": \"e.g., Transport Agency Owner\", \"income\": \"Variable\", \"action\": \"Register MSME\", \"resource\": \"PM-Vishwakarma Scheme details\" } ], \"motivation_quote\": \"A short, encouraging quote in Hinglish.\" }";

        const userSkill = skillName || skill;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin, 
            "X-OpenRouter-Title": "SkillNexus", 
          },
          body: JSON.stringify({
            model: "openrouter/free", 
            messages: [
              {
                role: "system",
                content: systemPrompt
              },
              {
                role: "user",
                content: `User skill: ${userSkill}`
              }
            ],
            response_format: { type: "json_object" }
          }),
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        
        // OpenRouter (OpenAI-style) uses a different response structure than Gemini
        const rawText: string = data.choices?.[0]?.message?.content || "";

        const parsed: GeminiRoadmap = JSON.parse(rawText);
        setRoadmap(parsed);
      } catch (err) {
        console.error("OpenRouter API error:", err);
        setError("Unable to generate roadmap right now. Please try again.");
      } finally {
        setLoading(false);
        setProgress(100);
      }
    };

    fetchRoadmap();
  }, [skill, skillName]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-background">
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

  if (!loading && error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md px-4">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Unable to generate roadmap
            </h2>
            <p className="text-muted-foreground mb-2">
              {error}
            </p>
            <p className="text-sm text-muted-foreground">
              Please try again in a few moments or with a different skill.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!loading && (!roadmap || roadmap.steps.length === 0)) {
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

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {roadmap?.steps.map((step, index) => (
                  <Card key={index} className="relative md:ml-20 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-2 bg-success/10 text-success hover:bg-success/20">
                            {step.level}
                          </Badge>
                          <CardTitle className="text-2xl mb-1">{step.role}</CardTitle>
                          <p className="text-sm text-muted-foreground mb-1">
                            Estimated income: {step.income}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Next action: {step.action}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-primary font-medium break-words">
                          Resource: {step.resource}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {roadmap?.motivation_quote && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <p className="text-lg italic text-muted-foreground">
                {roadmap.motivation_quote}
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
