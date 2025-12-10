import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { Divider } from './Divider';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Navigation } from 'lucide-react';

export function EventSection() {
  const eventDetails = [
    {
      icon: Calendar,
      title: 'Dates',
      value: '12th, 13th & 14th December',
      color: '#ff8c42'
    },
    {
      icon: MapPin,
      title: 'Event',
      value: 'Epicuria\'25 | Stall No. 10',
      color: '#2d9cca'
    },
    {
      icon: Clock,
      title: 'Timing',
      value: 'All Day Festival Hours',
      color: '#ff6b6b'
    }
  ];

  return (
    <section id="event" className="py-20 bg-gradient-to-br from-[#fdf8f3] via-white to-[#f5e6d3] relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Find Us at Epicuria'25" 
          subtitle="Mark your calendars and come say hello!"
        />

        {/* Event details cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
        >
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-4 border-[#f5e6d3] text-center"
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${detail.color}20` }}
              >
                <detail.icon 
                  className="w-8 h-8"
                  style={{ color: detail.color }}
                />
              </div>
              <h4 className="text-lg text-[#717182] mb-2">{detail.title}</h4>
              <p className="text-xl text-[#2d2d2d]">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Location card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f5e6d3]">
            <div className="grid md:grid-cols-2">
              {/* Map placeholder */}
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-[#2d9cca]/20 to-[#ff8c42]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[#ff8c42] mx-auto mb-4" />
                  <p className="text-[#2d2d2d] mb-4">Interactive Map</p>
                  <Button variant="secondary" size="sm">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Location details */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl text-[#2d2d2d] mb-4">Location</h3>
                <p className="text-lg text-[#717182] mb-6 leading-relaxed">
                  Sheila Raheja Institute of Hotel Management<br />
                  <span className="text-[#2d2d2d]">Opp. Colgate Ground, Kherwadi</span><br />
                  Bandra East, Mumbai<br />
                  Maharashtra 400051
                </p>
                
                <div className="bg-[#f5e6d3] rounded-2xl p-4 mb-6">
                  <p className="text-[#2d2d2d]">
                    <span className="text-[#ff8c42]">✨ Pro tip:</span> Come hungry and bring friends!
                  </p>
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  <Navigation className="w-5 h-5" />
                  Open in Maps
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <Divider />
      </div>
    </section>
  );
}
