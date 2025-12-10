import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { TeamSection } from './components/TeamSection';
import { EventSection } from './components/EventSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Parallax background color transitions
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      '#fdf8f3',
      '#ffffff',
      '#fdf8f3',
      '#ffffff',
      '#fdf8f3',
      '#2d2d2d'
    ]
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // <MenuSection />
        // <GallerySection />

  return (
    <motion.div 
      className="min-h-screen"
      style={{ backgroundColor }}
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8c42] via-[#2d9cca] to-[#ff6b6b] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main content */}
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <EventSection />
      <ContactSection />
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#ff8c42] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#ff7a2e] hover:scale-110 active:scale-95 transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}
