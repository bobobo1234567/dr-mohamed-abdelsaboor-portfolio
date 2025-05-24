import { useEffect } from 'react';
import PageTransition from '../components/shared/PageTransition';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import Specializations from '../components/home/Specializations';
import FeaturedPublications from '../components/home/FeaturedPublications';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Dr. Mohamed Abdelsaboor | Pediatric Cardiology Consultant';
  }, []);

  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <Specializations />
      <FeaturedPublications />
    </PageTransition>
  );
};

export default HomePage;