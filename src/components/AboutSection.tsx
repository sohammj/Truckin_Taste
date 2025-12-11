import { SectionHeader } from './SectionHeader';
import { Divider } from './Divider';
import { motion } from 'motion/react';
import { Heart, Sparkles, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fdf8f3] relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 pattern-diagonal opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Our Story" 
          subtitle="Where passion meets flavour"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#f5e6d3] relative">
            
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#ff8c42] rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#2d9cca] rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#2d9cca] rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#ff8c42] rounded-br-2xl" />
            
            {/* NEW STORY TEXT */}
            <p className="text-xl leading-relaxed text-[#2d2d2d] mb-6">
              <span className="font-script text-3xl text-[#ff8c42]">Truckin&apos; Taste</span> is a vibrant multicuisine stall bringing bold flavours, fun vibes, and a whole lot of food love to Epicuria 2025. From comfort classics to creative fusion bites, we serve dishes that are quick, delicious, and made to impress every palate.
            </p>

            <p className="text-xl leading-relaxed text-[#2d2d2d]">
              With our energetic team and passion for good food, Truckin&apos; Taste promises a taste trail you’ll want to keep coming back to!
            </p>
          </div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Heart,
              title: 'Made with Love',
              description: 'Every dish crafted with passion and care',
              color: '#ff6b6b'
            },
            {
              icon: Sparkles,
              title: 'Creative Fusion',
              description: 'Bold flavours meet global inspirations',
              color: '#ff8c42'
            },
            {
              icon: Users,
              title: 'Team-Powered',
              description: 'Energetic crew serving great food vibes',
              color: '#2d9cca'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon 
                  className="w-8 h-8"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-xl mb-2 text-[#2d2d2d]">{feature.title}</h3>
              <p className="text-[#717182]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <Divider />
      </div>
    </section>
  );
}
