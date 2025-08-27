'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ArrowUp, Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import webAlchemyLogo from '../../assets/8cadedf8e5c9001b503dd30f0f1d0d9515c2b669.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A92020] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <img 
                  src={webAlchemyLogo} 
                  alt="WebAlchemy Logo" 
                  className="h-16 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transforming businesses through expert web development. We create powerful, 
                  scalable solutions that drive growth and exceed expectations.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-white/10 p-2"
                    onClick={() => window.open('mailto:chrisbenoliver207@gmail.com')}
                  >
                    <Mail size={20} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-white/10 p-2"
                    onClick={() => window.open('https://wa.me/2348058315655')}
                  >
                    <MessageCircle size={20} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-white/10 p-2"
                    onClick={() => window.open('tel:+2348058315655')}
                  >
                    <Phone size={20} />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="text-gray-300 hover:text-[#A92020] transition-colors">Event Websites</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-[#A92020] transition-colors">Healthcare Platforms</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-[#A92020] transition-colors">Trading Platforms</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-[#A92020] transition-colors">Custom Solutions</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-[#A92020] transition-colors">API Development</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-[#A92020] transition-colors">Cloud Migration</a></li>
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-gray-300 hover:text-[#A92020] transition-colors">About Us</a></li>
                  <li><a href="#portfolio" className="text-gray-300 hover:text-[#A92020] transition-colors">Portfolio</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-[#A92020] transition-colors">Contact</a></li>
                  <li><a href="#quote" className="text-gray-300 hover:text-[#A92020] transition-colors">Get Quote</a></li>
                  <li><span className="text-gray-300">Privacy Policy</span></li>
                  <li><span className="text-gray-300">Terms of Service</span></li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-[#A92020]" />
                    <a 
                      href="mailto:chrisbenoliver207@gmail.com" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      chrisbenoliver207@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-[#A92020]" />
                    <a 
                      href="tel:+2348058315655" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +234 805 831 5655
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle size={16} className="text-[#A92020]" />
                    <a 
                      href="https://wa.me/2348058315655" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button 
                    className="bg-[#A92020] hover:bg-[#8B1A1A] text-white w-full"
                    onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Your Project
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400"
            >
              © {currentYear} WebAlchemy. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <span>Made with precision and passion</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-white/10 p-2"
              >
                <ArrowUp size={16} />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
