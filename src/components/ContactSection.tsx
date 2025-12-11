import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { motion } from 'motion/react';
import { Instagram, Mail, MessageCircle, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#fdf8f3] to-[#f5e6d3] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pattern-diagonal opacity-20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#ff8c42]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#2d9cca]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Reach Out to Us" 
          subtitle="Let's connect and chat about food!"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#f5e6d3]">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Social links */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#ff8c42]/10 to-[#ff6b6b]/10 rounded-2xl p-6 border-2 border-[#ff8c42]/30"
              >
                <Instagram className="w-12 h-12 text-[#ff8c42] mb-4" />
                <h3 className="text-2xl text-[#2d2d2d] mb-2">Follow Us</h3>
                <p className="text-[#717182] mb-4">
                  Stay updated with our daily specials and behind-the-scenes content
                </p>
                <p className="text-xl text-[#ff8c42] mb-4">@truckin_taste</p>
                <a 
                  href="https://instagram.com/truckin_taste" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="md" className="w-full">
                    <Instagram className="w-5 h-5" />
                    Follow on Instagram
                  </Button>
                </a>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#2d9cca]/10 to-[#87ceeb]/10 rounded-2xl p-6 border-2 border-[#2d9cca]/30"
              >
                <MessageCircle className="w-12 h-12 text-[#2d9cca] mb-4" />
                <h3 className="text-2xl text-[#2d2d2d] mb-2">WhatsApp</h3>
                <p className="text-[#717182] mb-4">
                  Quick enquiries and orders made easy
                </p>
                <p className="text-xl text-[#2d9cca] mb-4">+91 98201 69543</p>

                <a 
                  href="https://wa.me/919820169543" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="md" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#f5e6d3] to-[#fdf8f3] rounded-2xl p-6 border-2 border-[#ff8c42]/20 text-center"
            >
              <Mail className="w-12 h-12 text-[#ff6b6b] mx-auto mb-4" />
              <h3 className="text-2xl text-[#2d2d2d] mb-2">Email Us</h3>
              <p className="text-[#717182] mb-4">
                For collaborations, catering enquiries, and more
              </p>
              <p className="text-xl text-[#2d2d2d] mb-4">truckintaste@gmail.com</p>

              <a 
                href="mailto:truckintaste@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  <Send className="w-5 h-5" />
                  Send an Email
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-script text-4xl text-[#ff8c42] mb-4">
            See you at Epicuria&apos;25!
          </p>
          <p className="text-xl text-[#2d2d2d]">
            12th – 14th December | Stall No. 10
          </p>
        </motion.div>
      </div>
    </section>
  );
}
