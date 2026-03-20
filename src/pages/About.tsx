import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-background py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Mission
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
              Connecting India's Skills to its Future
            </h2>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p> We are <strong>final-year students at IIT Jodhpur</strong> who have witnessed how millions of skilled individuals in India; especially from rural and low-income backgrounds ; struggle to find the right guidance and opportunities to grow. Despite having strong abilities in fields like tailoring, carpentry, welding, data entry, or basic computer skills, many remain under-employed simply because they lack career direction, awareness of opportunities, or access to structured pathways. </p> 
              <p> We created <strong>SkillNexus</strong> to bridge this gap. As engineering students, we have seen how technology and AI can transform lives when used thoughtfully.</p>
              <p> <strong>Our motivation was simple</strong>: to build a platform that understands a person’s existing skills, connects them to relevant jobs or self-employment options, and provides a clear, achievable roadmap for upgrading their livelihood. We believe that skill should never limit someone’s future; only the lack of guidance does.</p> 
              <p> Through SkillNexus, we aim to empower individuals with personalized career pathways, accessible learning plans, and real-world opportunity links;from government schemes to freelancing platforms. Our goal is to help people move confidently from informal work to stable, dignified, and sustainable income sources. As students who strongly believe in human-centered design, SkillNexus reflects our commitment to using technology for social impact and enabling India’s skilled workforce to realize its full potential. </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
