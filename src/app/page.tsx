import HeroSection from "@/components/modules/home/HeroSection";
import TrustBanner from "@/components/modules/home/TrustBanner";
import ServicesGrid from "@/components/modules/home/ServicesGrid";
import DellPromo from "@/components/modules/home/DellPromo";
import CustomPcCTA from "@/components/modules/home/CustomPcCTA";
import BranchSelector from "@/components/modules/home/BranchSelector";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. First Impression */}
      <HeroSection />
      
      {/* 2. Trust Metrics */}
      <TrustBanner />
      
      {/* 3. General Services Overview */}
      <ServicesGrid />
      
      {/* 4. Interactive PC Builder Lead Gen */}
      <CustomPcCTA />
      
      {/* 5. Dell Franchise Showcase */}
      <DellPromo />
      
      {/* 6. Physical Store Locations */}
      <BranchSelector />
    </div>
  );
}