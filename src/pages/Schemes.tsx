import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import schemeVishwakarma from "@/assets/scheme-vishwakarma.jpg";
import schemeSkillIndia from "@/assets/scheme-skill-india.jpg";
import schemeMudra from "@/assets/scheme-mudra.jpg";

const schemes = [
  {
    title: "PM-Vishwakarma Yojana",
    description: "Supporting traditional artisans and craftspeople with financial assistance, skill training, and modern tools.",
    image: schemeVishwakarma,
  },
  {
    title: "Skill India",
    description: "A nationwide program to train youth in industry-relevant skills and connect them with employment opportunities.",
    image: schemeSkillIndia,
  },
  {
    title: "Mudra Loan",
    description: "Providing micro-financing to small businesses and entrepreneurs to help them grow and create jobs.",
    image: schemeMudra,
  },
];

const Schemes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Explore Government Schemes
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {schemes.map((scheme, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={scheme.image} 
                      alt={scheme.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{scheme.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {scheme.description}
                    </p>
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
