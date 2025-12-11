import { motion } from "motion/react";

export function SovraTechSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fdf8f3] via-white to-[#f5e6d3] relative overflow-hidden">
      
      {/* Soft background accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff8c42]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#2d9cca]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-5xl md:text-6xl text-[#ff8c42] mb-6"
        >
          Crafted by SovraTech
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#717182] leading-relaxed mb-10"
        >
          This website was designed and developed by 
          <span className="text-[#2d9cca] font-semibold"> SovraTech</span> —  
          a modern digital studio crafting fast, aesthetic, and high-performance web experiences.  
          We build custom-coded websites engineered for performance, strong branding,  
          and long-term ownership.
        </motion.p>

        <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://sovratech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2d9cca] text-white px-8 py-3 rounded-full 
            shadow-xl text-lg font-medium hover:scale-105 transition-transform mt-8"
            >
            Visit SovraTech
        </motion.a>


      </div>
    </section>
  );
}
