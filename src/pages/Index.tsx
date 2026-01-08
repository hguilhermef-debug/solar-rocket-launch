import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SavingsSection from "@/components/SavingsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import EnvironmentSection from "@/components/EnvironmentSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <ResultsSection />
      <ServicesSection />
      <HowItWorksSection />
      <SavingsSection />
      <WhyChooseSection />
      <EnvironmentSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
