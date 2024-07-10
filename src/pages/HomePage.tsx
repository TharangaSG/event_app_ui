import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/Suggessions';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">

      <HeroSection />
      <EventsSection />
    </div>
  );
};

export default HomePage;

