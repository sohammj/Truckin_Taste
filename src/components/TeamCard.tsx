import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface TeamCardProps {
  name: string;
  image: string;
  index: number;
}

export function TeamCard({ name, role, image, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="relative mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-[#ff8c42] shadow-xl group-hover:border-[#2d9cca] transition-all duration-300 group-hover:scale-110">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-xl text-[#2d2d2d] mb-1">{name}</h4>
      <p className="text-[#ff8c42]">{role}</p>
    </motion.div>
  );
}
