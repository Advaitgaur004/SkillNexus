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
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Mission
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
              Connecting India's Skills to its Future
            </h2>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. SkillSaarthi was created with the 
                vision of empowering rural youth across India by bridging the gap between traditional 
                skills and modern employment opportunities. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. We believe 
                that every young person, regardless of their location or background, deserves access 
                to quality skill development programs and meaningful career guidance.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Through our platform, we connect rural youth with government-backed 
                skill development schemes, training programs, and employment opportunities. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum. Our goal is to help transform lives by turning skills into sustainable 
                livelihoods, creating a pathway from learning to earning for millions of young Indians 
                who aspire to build a better future for themselves and their communities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
