import Hero from '../components/Hero.jsx';
import FeaturedCollections from '../components/FeaturedCollections.jsx';
import ProjectsCarousel from '../components/ProjectsCarousel.jsx';
import CustomPrint from '../components/CustomPrint.jsx';
import AboutSection from '../components/AboutSection.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <ProjectsCarousel />
      <CustomPrint />
      <AboutSection />
    </>
  );
}
