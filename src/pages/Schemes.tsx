import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink } from "lucide-react";
import schemeVishwakarma from "@/assets/scheme-vishwakarma.jpg";
import schemeSkillIndia from "@/assets/scheme-skill-india.jpg";
import schemeMudra from "@/assets/scheme-mudra.jpg";

const schemes = [
  {
    id: 1,
    title: "PM-Vishwakarma Yojana",
    description: "Support for traditional artisans and craftspeople with training and financial assistance.",
    image: schemeVishwakarma,
    category: "Skill Development",
    eligibility: "Traditional artisans",
    benefits: "Training, Tools, Credit Support"
  },
  {
    id: 2,
    title: "Skill India Mission",
    description: "Comprehensive program for skill training across multiple sectors and trades.",
    image: schemeSkillIndia,
    category: "Training",
    eligibility: "Youth aged 15-45",
    benefits: "Free Training, Certification"
  },
  {
    id: 3,
    title: "Mudra Loan Scheme",
    description: "Financial support for micro-enterprises and small businesses to grow.",
    image: schemeMudra,
    category: "Finance",
    eligibility: "Small business owners",
    benefits: "Loans up to ₹10 lakhs"
  },
];

const categories = ["All", "Skill Development", "Training", "Finance"];

const Schemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch = 
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.benefits.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || scheme.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
              Explore Government Schemes
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Discover opportunities for skill development, training, and financial support
            </p>

            <div className="max-w-2xl mx-auto mb-6">
              <div className="flex items-center bg-background rounded-lg border-2 border-border p-2 shadow-sm">
                <Search className="h-5 w-5 text-muted-foreground ml-2" />
                <Input
                  type="text"
                  placeholder="Search schemes by name, benefits, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-6 text-center text-muted-foreground">
            Showing {filteredSchemes.length} scheme{filteredSchemes.length !== 1 ? 's' : ''}
          </div>
          
          {filteredSchemes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No schemes found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={scheme.image}
                      alt={scheme.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{scheme.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{scheme.title}</CardTitle>
                    <CardDescription className="text-sm">{scheme.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">Eligibility:</span>
                        <p className="text-muted-foreground">{scheme.eligibility}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Benefits:</span>
                        <p className="text-muted-foreground">{scheme.benefits}</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schemes;
