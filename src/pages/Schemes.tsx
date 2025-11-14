import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink } from "lucide-react";

/**
 * Image placeholders - replace these imports with your actual image files.
 * If you don't have images for some schemes yet, you can remove the import
 * or point them to a default placeholder image.
 */
import pmkyv from "@/assets/pmkvy.png";
import skillindia from "@/assets/skillindia.png";
import mudra from "@/assets/scheme-mudra.jpg";
import standup from "@/assets/standup.png";
import pmevidya from "@/assets/evidya.png";
import upsdm from "@/assets/upsdm.png";
import pmegp from "@/assets/pmegp.png";
import naps from "@/assets/naps.png";
import esdp from "@/assets/esdp.png";

interface Scheme {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  eligibility: string;
  benefits: string;
  link?: string;
}

const schemes: Scheme[] = [
  {
  id: 1,
  title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
  description:
    "The flagship skill-training scheme under the Ministry of Skill Development & Entrepreneurship (MSDE). It provides short-term training and recognition of prior learning aligned with the National Skills Qualification Framework.",
  image: pmkyv,
  category: "Skill Development",
  eligibility: "Traditional artisans",
  benefits: "Training, Tools, Credit Support",
  link: "https://www.msde.gov.in/offerings/schemes-and-services/details/pradhan-mantri-kaushal-vikas-yojana-4-0-pmkvy-4-0-2021-ITO3ATMtQWa"
},
  {
    id: 2,
    title: "Skill India Mission",
    description:
      "Comprehensive program for skill training across multiple sectors and trades.",
    image: skillindia,
    category: "Training",
    eligibility: "Youth aged 15-45",
    benefits: "Free Training, Certification",
    link: "https://www.skillindiadigital.gov.in/home",
  },
  {
    id: 3,
    title: "Mudra Loan Scheme",
    description:
      "Financial support for micro-enterprises and small businesses to grow.",
    image: mudra,
    category: "Finance",
    eligibility: "Small business owners",
    benefits: "Loans up to ₹10 lakhs",
    link: "https://www.mudra.org.in/",
  },
{
  id: 5,
  title: "Stand-Up India Scheme",
  description:
    "Promotes entrepreneurship among women and SC/ST individuals through facilitated bank loans.",
  image: standup,
  category: "Finance",
  eligibility: "Women, SC/ST entrepreneurs",
  benefits: "Loans from ₹10 lakhs to ₹1 crore",
  link: "https://www.standupmitra.in/Login/Register" // official StandUp portal (registration/login)
},

{
  id: 6,
  title: "PM e-Vidya",
  description:
    "Digital learning initiative to provide online education and skill development resources for all learners.",
  image: pmevidya,
  category: "Training",
  eligibility: "Students and learners of all ages",
  benefits: "Free Digital Courses, Online Learning",
  link: "https://pmevidya.education.gov.in/" // official PM e-VIDYA landing (multi-mode education initiative)
},

{
  id: 7,
  title: "Uttar Pradesh Skill Development Mission (UPSDM)",
  description:
    "NSQF-compliant skill development programmes targeted at youth in Uttar Pradesh.",
  image: upsdm,
  category: "Skill Development",
  eligibility: "Youth residing in Uttar Pradesh",
  benefits: "Free Training, Certification",
  link: "https://www.upsdm.gov.in/" // official UPSDM site
},

{
  id: 8,
  title: "Prime Minister Employment Generation Programme (PMEGP)",
  description:
    "Credit-linked subsidy scheme to support new micro-enterprises in manufacturing and services sectors.",
  image: pmegp,
  category: "Finance",
  eligibility: "Entrepreneurs aged 18+",
  benefits: "Subsidy up to 35%",
  link: "https://www.kviconline.gov.in/pmegpeportal/" // KVIC PMEGP portal (online applications)
},

{
  id: 9,
  title: "National Apprenticeship Promotion Scheme (NAPS)",
  description:
    "Encourages apprenticeship training by offering stipend support and practical job experience.",
  image: naps,
  category: "Training",
  eligibility: "Students, industries, establishments",
  benefits: "Stipend Sharing, Industry Skill Training",
  link: "https://www.apprenticeshipindia.gov.in/" // official Apprenticeship Training Portal
},

{
  id: 10,
  title: "Entrepreneurship Skill Development Programme (ESDP)",
  description:
    "MSME initiative offering intensive entrepreneurship and skill training for future business owners.",
  image: esdp,
  category: "Skill Development",
  eligibility: "Aspiring entrepreneurs",
  benefits: "Technical Training, Entrepreneurship Workshops",
  link: "https://msme.gov.in/entrepreneurship-and-skill-development-programs" // MSME ESDP info page
}
];

const categories = ["All", "Skill Development", "Training", "Finance"];

const Schemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSchemes = schemes.filter((scheme) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      scheme.title.toLowerCase().includes(q) ||
      scheme.description.toLowerCase().includes(q) ||
      scheme.benefits.toLowerCase().includes(q) ||
      scheme.eligibility.toLowerCase().includes(q);
    const matchesCategory =
      selectedCategory === "All" || scheme.category === selectedCategory;

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
            Showing {filteredSchemes.length} scheme{filteredSchemes.length !== 1 ? "s" : ""}
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
                <Card
                  key={scheme.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
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

                    <div className="mt-4">
                      {/* Learn More opens the official link in a new tab */}
                      <Button className="w-full" variant="outline" asChild>
                        <a href={scheme.link ?? "#"} target="_blank" rel="noopener noreferrer">
                          Learn More <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
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
