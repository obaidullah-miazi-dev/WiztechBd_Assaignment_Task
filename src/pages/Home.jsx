
import { useState } from "react";
import SidebarFilters from "../components/SidebarFilters";
import properties from "../data/properties.json";
import Properties from "../components/Properties";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "../components/TrustedBySection";
import RevenueStreamsSection from "../components/RevenueStreamsSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  const [filteredProperties] = useState(properties);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="h-fit">
              <SidebarFilters />
            </aside>
            <main className="flex-1">
              <Properties properties={filteredProperties} />
            </main>
          </div>
        </div>
      </div>

      <HeroSection />
      <TrustedBySection />
      <RevenueStreamsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;