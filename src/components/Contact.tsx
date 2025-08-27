'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MessageCircle, Clock, MapPin, Send } from 'lucide-react';
import webAlchemyLogo from 'figma:asset/8cadedf8e5c9001b503dd30f0f1d0d9515c2b669.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with form service (Netlify Forms, Formspree, or custom API)
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation 
            and let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="text-center lg:text-left">
              <img 
                src={webAlchemyLogo} 
                alt="WebAlchemy Logo" 
                className="h-24 w-auto mx-auto lg:mx-0 mb-6"
              />
              <h3 className="text-2xl font-bold text-black mb-2">WebAlchemy</h3>
              <p className="text-gray-600">
                Transforming ideas into exceptional web experiences
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#A92020]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#A92020]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Email</h4>
                  <a 
                    href="mailto:chrisbenoliver207@gmail.com" 
                    className="text-gray-600 hover:text-[#A92020] transition-colors"
                  >
                    chrisbenoliver207@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#A92020]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#A92020]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Phone</h4>
                  <a 
                    href="tel:+2348058315655" 
                    className="text-gray-600 hover:text-[#A92020] transition-colors"
                  >
                    +234 805 831 5655
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#A92020]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-[#A92020]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">WhatsApp</h4>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-600 hover:text-[#A92020]"
                    onClick={() => window.open('https://wa.me/2348058315655', '_blank')}
                  >
                    Chat with us on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#A92020]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#A92020]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Business Hours</h4>
                  <div className="text-gray-600 text-sm">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 10:00 AM - 4:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#A92020]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#A92020]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Location</h4>
                  <div className="text-gray-600 text-sm">
                    Remote-first team<br />
                    Serving clients globally
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <Button 
                className="w-full bg-[#A92020] hover:bg-[#8B1A1A] text-white"
                onClick={() => window.open('https://wa.me/2348058315655', '_blank')}
              >
                <MessageCircle className="mr-2" size={16} />
                Start WhatsApp Chat
              </Button>
              <Button 
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white"
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Project Quote
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-black/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">Message Sent!</h4>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-black/20 focus:border-[#A92020]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-black/20 focus:border-[#A92020]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        required
                        rows={6}
                        placeholder="Tell us about your project or ask any questions..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="border-black/20 focus:border-[#A92020]"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#A92020] hover:bg-[#8B1A1A] text-white py-3"
                      size="lg"
                    >
                      Send Message
                      <Send className="ml-2" size={16} />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}