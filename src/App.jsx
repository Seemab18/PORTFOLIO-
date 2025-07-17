import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Marketing from '@/components/Marketing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Seemab Shafique - Professional Shopify Developer</title>
        <meta name="description" content="Expert Shopify developer with 2+ years of experience creating stunning, high-performance e-commerce stores. Specializing in TikTok & Meta ads to drive sales and profitability." />
      </Helmet>

      <div className="min-h-screen bg-white text-black">
        <Header />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Portfolio />
          <Services />
          <Marketing />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;