import React from 'react';
import { Navbar } from '../../../widgets/navbar';
import { Hero } from '../../../widgets/hero';
import { FeaturesOverview } from '../../../widgets/features-overview';
import { CoreFeatures } from '../../../widgets/core-features';
import { DashboardCTA } from '../../../widgets/dashboard-cta';
import { Footer } from '../../../widgets/footer';
import './Home.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <FeaturesOverview />
      <CoreFeatures />
      <DashboardCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
