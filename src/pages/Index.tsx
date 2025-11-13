import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillSearch from "@/components/SkillSearch";
import HowItWorks from "@/components/HowItWorks";
import FeaturedSkills from "@/components/FeaturedSkills";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SkillSearch />
        <HowItWorks />
        <FeaturedSkills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
