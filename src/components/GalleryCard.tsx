import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface GalleryCardProps {
  image: string;
  caption: string;
  index: number;
}

export function GalleryCard({ image, caption, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ rotate: 2, scale: 1.05 }}
      className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform rotate-1 hover:rotate-0"
      style={{
        transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
      }}
    >
      <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-br from-[#f5e6d3] to-[#87ceeb]/20">
        <ImageWithFallback
          src={image}
          alt={caption}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center mt-3 font-script text-xl text-[#2d2d2d]">{caption}</p>
    </motion.div>
  );
}
