import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface MenuCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  index: number;
}

export function MenuCard({ image, name, description, price, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-[#f5e6d3]"
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#f5e6d3] to-[#87ceeb]/20">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-[#ff8c42] text-white px-4 py-2 rounded-full shadow-lg">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl mb-2 text-[#2d2d2d]">{name}</h3>
        <p className="text-[#717182]">{description}</p>
      </div>
    </motion.div>
  );
}
