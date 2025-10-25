import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCarousel from '@/components/FeatureCarousel';
import KnowledgeBase from '@/components/KnowledgeBase';
import Recommendations from '@/components/Recommendations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-secondary">
      <Navbar />
      <Hero />
      <FeatureCarousel />
      <KnowledgeBase />
      <Recommendations />
      <Footer />
    </main>
  );
}
