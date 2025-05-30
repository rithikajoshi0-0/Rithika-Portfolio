import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Notebook from './components/Notebook';
import EnchantedLab from './components/EnchantedLab';
import SoftSystems from './components/SoftSystems';
import Footer from './components/Footer';
import SparkleBackground from './components/ui/SparkleBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SparkleBackground />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Notebook />
          <EnchantedLab />
          <SoftSystems />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;