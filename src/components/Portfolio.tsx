'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Clock, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'EventFlow Pro',
    category: 'Events',
    description: 'Complete event management platform with ticketing and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1712903276003-b814091e7770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NTYxMjM2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    metrics: { loadTime: '1.2s', conversionLift: '+45%' },
  },
  {
    id: 2,
    title: 'MediCare Portal',
    category: 'Healthcare',
    description: 'HIPAA-compliant patient portal with appointment scheduling and secure messaging.',
    image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYwODQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'HIPAA'],
    metrics: { loadTime: '0.9s', conversionLift: '+65%' },
  },
  {
    id: 3,
    title: 'TradeMaster Dashboard',
    category: 'Trading',
    description: 'Real-time trading platform with advanced analytics and portfolio management.',
    image: 'https://images.unsplash.com/photo-1748609700323-483a007ed311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MTIzNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'WebSocket', 'Charts.js'],
    metrics: { loadTime: '0.8s', conversionLift: '+80%' },
  },
  {
    id: 4,
    title: 'Corporate Hub',
    category: 'Custom',
    description: 'Enterprise intranet with document management and team collaboration tools.',
    image: 'https://images.unsplash.com/photo-1739287088635-444554e7ac0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NjExNjYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'Auth0'],
    metrics: { loadTime: '1.1s', conversionLift: '+55%' },
  },
  {
    id: 5,
    title: 'FinanceFlow',
    category: 'Trading',
    description: 'Personal finance tracking app with investment portfolio analysis.',
    image: 'https://images.unsplash.com/photo-1748609700323-483a007ed311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MTIzNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Angular', 'Firebase', 'D3.js', 'PWA'],
    metrics: { loadTime: '1.3s', conversionLift: '+40%' },
  },
  {
    id: 6,
    title: 'WellnessConnect',
    category: 'Healthcare',
    description: 'Telemedicine platform with video consultations and prescription management.',
    image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYwODQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'WebRTC', 'Socket.io', 'Redis'],
    metrics: { loadTime: '1.0s', conversionLift: '+70%' },
  },
];

const categories = ['All', 'Events', 'Healthcare', 'Trading', 'Custom'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our recent projects and see how we've helped businesses transform 
            their digital presence with cutting-edge web solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-[#A92020] hover:bg-[#8B1A1A] text-white"
                    : "border-black text-black hover:bg-black hover:text-white"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <Card className="h-full border-black/10 hover:border-[#A92020]/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                      </div>
                      <Badge className="absolute top-3 right-3 bg-[#A92020] text-white">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{project.metrics.loadTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp size={14} />
                          <span>{project.metrics.conversionLift}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}