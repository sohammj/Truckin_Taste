import { Button } from './Button';
import { motion } from 'motion/react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdf8f3] via-[#f5e6d3] to-[#87ceeb]/20 pattern-dots">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#ff6b6b]/20 blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#2d9cca]/20 blur-2xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      {/* String lights decoration */}
      {/* <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 100">
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={i * 100 + 50}
              cy={Math.sin(i * 0.5) * 20 + 30}
              r="8"
              fill={['#ff8c42', '#2d9cca', '#ff6b6b'][i % 3]}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          <path
            d="M 0,40 Q 100,20 200,40 T 400,40 T 600,40 T 800,40 T 1000,40 T 1200,40"
            stroke="#2d2d2d"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div> */}
      {/* Full-width string lights */}
      <div className="absolute top-0 left-0 right-0 w-screen overflow-visible pointer-events-none">
        <svg
          className="w-full h-24"
          viewBox="0 0 1600 100"
          preserveAspectRatio="none"
        >
          {[...Array(18)].map((_, i) => (
            <motion.circle
              key={i}
              cx={i * 90 + 50}
              cy={Math.sin(i * 0.5) * 20 + 30}
              r="8"
              fill={['#ff8c42', '#2d9cca', '#ff6b6b'][i % 3]}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
          
          <path
            d="M 0,40 Q 200,20 400,40 T 800,40 T 1200,40 T 1600,40"
            stroke="#2d2d2d"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>


      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Event badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg mb-6 border-2 border-[#ff8c42]"
            >
              <Calendar className="w-4 h-4 text-[#ff8c42]" />
              <span className="text-sm">12th – 14th December | Stall No. 10</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-script text-7xl md:text-8xl lg:text-9xl text-[#ff8c42] mb-4 leading-tight"
            >
              Truckin&apos; Taste
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <h2 className="text-3xl md:text-4xl text-[#2d9cca]">
                Desi vibes, Videshi bites
              </h2>
              <Sparkles className="w-6 h-6 text-[#ff8c42]" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-[#2d2d2d] mb-8 max-w-xl"
            >
              Serving flavour, fun and global-inspired comfort food at Epicuria&apos;25.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="#menu">
                View Menu
              </Button>
              <Button variant="secondary" size="lg" href="#event">
                <MapPin className="w-5 h-5" />
                Find Us at the Festival
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Food truck illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/truck-logo.png"
                  alt="Truckin' Taste Logo"
                  className="w-full h-auto rounded-3xl shadow-xl"
                />

              </div>
              
              {/* Decorative circles around truck */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#ff6b6b] opacity-80"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#2d9cca] opacity-80"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#2d2d2d] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#ff8c42] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
