'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Calendar, Heart, TrendingUp, Cog } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Calendar,
    title: 'Event Websites',
    description: 'Complete event management platforms with ticketing, RSVP systems, and schedule management.',
    features: ['Ticket Sales Integration', 'RSVP Management', 'Event Scheduling', 'Payment Processing'],
    image: 'https://images.unsplash.com/photo-1712903276003-b814091e7770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NTYxMjM2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Heart,
    title: 'Healthcare Platforms',
    description: 'HIPAA-compliant healthcare websites with appointment systems and patient management.',
    features: ['Appointment Booking', 'Patient Portals', 'HIPAA Compliance', 'Medical Records'],
    image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYwODQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: TrendingUp,
    title: 'Trading Platforms',
    description: 'Real-time trading dashboards with advanced analytics and secure transaction processing.',
    features: ['Real-time Data', 'Advanced Charts', 'Secure Trading', 'Portfolio Analytics'],
    image: 'https://images.unsplash.com/photo-1748609700323-483a007ed311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MTIzNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Cog,
    title: 'Custom Solutions',
    description: 'Bespoke web applications tailored to your unique business requirements and workflows.',
    features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Ongoing Support'],
    image: 'https://images.unsplash.com/photo-1739287088635-444554e7ac0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NjExNjYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in creating sophisticated web applications across various industries, 
            delivering solutions that combine cutting-edge technology with exceptional user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-black/10 hover:border-[#A92020]/30 transition-colors duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <service.icon className="text-[#A92020]" size={24} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#A92020] rounded-full" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-black text-black hover:bg-[#A92020] hover:text-white hover:border-[#A92020]"
                      onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Project Estimate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}