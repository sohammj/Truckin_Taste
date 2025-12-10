import { Instagram, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff8c42] via-[#2d9cca] to-[#ff6b6b]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff8c42]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-script text-5xl text-[#ff8c42] mb-3">
              Truckin&apos; Taste
            </h3>
            <p className="text-lg text-[#87ceeb] mb-4">
              Desi vibes, Videshi bites
            </p>
            <p className="text-[#a0a0a0]">
              Bringing fusion flavours to Epicuria&apos;25 with passion, creativity, and a whole lot of love.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="text-xl mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-[#a0a0a0] hover:text-[#ff8c42] transition-colors">
                  View Menu
                </a>
              </li>
              <li>
                <a href="#event" className="text-[#a0a0a0] hover:text-[#ff8c42] transition-colors">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-[#ff8c42] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-[#ff8c42] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff8c42] mt-1 flex-shrink-0" />
                <p className="text-[#a0a0a0]">
                  Stall No. 10, Epicuria&apos;25<br />
                  Bandra East, Mumbai
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#ff8c42]" />
                <a href="#" className="text-[#a0a0a0] hover:text-[#ff8c42] transition-colors">
                  @truckin_taste
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff8c42]" />
                <a href="mailto:truckintaste@gmail.com" className="text-[#a0a0a0] hover:text-[#ff8c42] transition-colors">
                  truckintaste@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#a0a0a0] text-sm text-center md:text-left"
            >
              © 2024 Truckin&apos; Taste. Made with <span className="text-[#ff6b6b]">❤️</span> by culinary students.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm"
            >
              Website designed by{' '}
              <span className="text-[#ff8c42] font-script text-lg">
                SovraTech
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
