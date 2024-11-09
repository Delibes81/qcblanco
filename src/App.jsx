import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section id='home' className="relative h-screen">
        <div className="absolute inset-0">
        <video
      src="https://www.w3schools.com/html/mov_bbb.mp4" // URL del video de ejemplo
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 font-serif">Capture Moments</h1>
            <p className="text-xl md:text-2xl">Creating timeless memories through our lens</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[600px]"
              src="https://www.youtube.com/embed/lCh8G8bbYpI?vq=hd1080&si=O3T9VRa9DVDZLkCYdQw4w9WgXcQ"
              title="Time Lapse"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;