'use client';

import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Zap, Shield, Users, Award, Globe } from 'lucide-react';
import webAlchemyLogo from 'figma:asset/8cadedf8e5c9001b503dd30f0f1d0d9515c2b669.png';

const values = [
  {
    icon: Code2,
    title: 'Technical Excellence',
    description: 'We stay at the forefront of web technologies, ensuring every project leverages the best tools and practices.',
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'Fast delivery without compromising quality. We optimize every aspect for maximum performance.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security measures protect your data and ensure compliance with industry standards.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, providing ongoing support and strategic guidance.',
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs',
  'WebSocket', 'Redis', 'Elasticsearch', 'Microservices'
];

const achievements = [
  { icon: Award, metric: '50+', label: 'Projects Delivered' },
  { icon: Users, metric: '30+', label: 'Happy Clients' },
  { icon: Globe, metric: '15+', label: 'Countries Served' },
  { icon: Zap, metric: '99.9%', label: 'Uptime Guarantee' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            About WebAlchemy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of expert developers dedicated to transforming your ideas into 
            powerful web applications that drive business growth and exceed user expectations.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to bridge the gap between complex business requirements 
                and elegant digital solutions, WebAlchemy has become a trusted partner for 
                organizations seeking to innovate and scale their digital presence.
              </p>
              <p>
                Our expertise spans across various industries, from healthcare and finance 
                to events and e-commerce. We understand that every business is unique, 
                which is why we craft custom solutions tailored to your specific needs.
              </p>
              <p>
                With a focus on performance, security, and user experience, we deliver 
                web applications that not only meet today's requirements but are built 
                to scale with your future growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="bg-gray-50 rounded-2xl p-12 shadow-lg">
              <img 
                src={webAlchemyLogo} 
                alt="WebAlchemy Logo" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-black text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-black/10 hover:border-[#A92020]/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#A92020]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-[#A92020]" size={24} />
                    </div>
                    <h4 className="font-bold text-black mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#A92020] rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{achievement.metric}</div>
                <div className="text-gray-600 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-8">Our Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm border-black/20 hover:border-[#A92020] hover:text-[#A92020] transition-colors duration-200">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}