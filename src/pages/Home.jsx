import React from "react";
import Hero from "../components/sections/Hero";
import Feature from "../components/sections/Feuture";
import CTASection from "../components/sections/CTASection";
import TeamSection from "../components/sections/TeamSection";
import LogoSection from "../components/sections/LogoSection";
import StatSection from "../components/sections/StatSection";
import BlogSection from "../components/sections/BlogSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <LogoSection />
      <Feature />
      <StatSection />
      <TeamSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default Home;
