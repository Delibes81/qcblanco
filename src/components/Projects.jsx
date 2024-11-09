import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
  'https://images.unsplash.com/photo-1554080353-a576cf803bda',
  'https://images.unsplash.com/photo-1509281373149-e957c6296406',
  'https://images.unsplash.com/photo-1569124589354-615739ae007b',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  'https://images.unsplash.com/photo-1534445538923-ab38438550d2'
];

export const Projects = () => {
  const [shuffledImages, setShuffledImages] = useState(images);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setShuffledImages(prev => {
          const newImages = [...prev];
          for (let i = newImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
          }
          return newImages;
        });
        setFade(false);
      }, 500); // Duration of the fade transition
    }, 5000); // Increased duration for displaying images

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='projects' className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-gray-800">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shuffledImages.slice(0, 3).map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group aspect-w-3 aspect-h-4 rounded-lg shadow-lg transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
              <img
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                alt={`Project ${index + 1}`}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};