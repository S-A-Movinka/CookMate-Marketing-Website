import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductIntro from "@/components/ProductIntro";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import IoTSection from "@/components/IoTSection";
import AppScreenshots from "@/components/AppScreenshots";
import MascotSection from "@/components/MascotSection";
import BenefitsSection from "@/components/BenefitsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProductIntro />
      <HowItWorks />
      <FeaturesSection />
      <IoTSection />
      <AppScreenshots />
      <MascotSection />
      <BenefitsSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
