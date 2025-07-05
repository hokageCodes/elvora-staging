import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import OurRecipeSection from "./sections/HowWeWork";
import ProjectsSection from "./sections/ProjectsSection";
import OfferingsSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ParallaxAboutSection from "./sections/WelcomeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ParallaxAboutSection />
      <AboutSection />
      <OfferingsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <OurRecipeSection />
    </>
  );
}
