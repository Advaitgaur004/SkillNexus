import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About SkillSaarthi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering India's workforce, one skill at a time.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                SkillSaarthi is an initiative to empower India's workforce by connecting 
                individuals with government-backed skill development programs and employment 
                opportunities. We believe that every person deserves access to quality training 
                and a clear path to economic prosperity.
              </p>

              <div className="grid gap-6 md:grid-cols-3 my-12 not-prose">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      A skilled and employed India where everyone has the opportunity to thrive.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Our Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Connecting thousands of learners with opportunities across India.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Our Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      AI-powered guidance to create personalized career pathways.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose SkillSaarthi?</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Access to government-backed skill development programs and schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Personalized career roadmaps based on your skills and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Direct connections to employment opportunities and training centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Free to use for all learners across India</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
