import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const schemes = [
  {
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    category: "Skill Development",
    description: "A flagship scheme to enable Indian youth to take up industry-relevant skill training. Offers free training and certification in various trades.",
    eligibility: "Youth between 15-45 years",
    benefits: ["Free skill training", "Government certification", "Placement assistance"],
    link: "#",
  },
  {
    title: "National Apprenticeship Promotion Scheme (NAPS)",
    category: "Apprenticeship",
    description: "Promotes apprenticeship training and increases engagement of enterprises in promoting apprentices.",
    eligibility: "Youth with ITI/diploma or higher qualifications",
    benefits: ["Stipend support", "On-the-job training", "Industry exposure"],
    link: "#",
  },
  {
    title: "Stand Up India",
    category: "Entrepreneurship",
    description: "Facilitates bank loans for setting up greenfield enterprises in manufacturing, services, or trading sector.",
    eligibility: "SC/ST and women entrepreneurs",
    benefits: ["₹10 lakh to ₹1 crore loans", "Business support", "Mentorship"],
    link: "#",
  },
  {
    title: "Skill India Digital Platform",
    category: "Digital Training",
    description: "Free online courses across various domains including IT, manufacturing, healthcare, and more.",
    eligibility: "All Indian citizens",
    benefits: ["Online learning", "Free certification", "Self-paced courses"],
    link: "#",
  },
];

const Schemes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Government Schemes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore skill development and employment schemes available across India
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-6">
              {schemes.map((scheme, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <Badge className="mb-2 bg-accent/10 text-accent hover:bg-accent/20">
                          {scheme.category}
                        </Badge>
                        <CardTitle className="text-2xl mb-2">{scheme.title}</CardTitle>
                        <p className="text-muted-foreground">{scheme.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Eligibility:</h4>
                        <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {scheme.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-success">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-secondary hover:bg-secondary/90">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schemes;
