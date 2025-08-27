'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Code, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#A92020]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-black/5 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2 text-[#A92020]"
              >
                <Code size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">Enterprise Web Development</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-black leading-tight"
              >
                Transform Your Business with 
                <span className="text-[#A92020]"> Expert</span> Web Solutions
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-600 max-w-xl"
              >
                From enterprise-grade websites to complex trading platforms, we deliver high-performance web applications that drive results and exceed expectations.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-[#A92020] hover:bg-[#8B1A1A] text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="flex items-center space-x-2">
                <Shield className="text-[#A92020]" size={20} />
                <span className="text-sm font-medium text-gray-700">Enterprise-grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-[#A92020]" size={20} />
                <span className="text-sm font-medium text-gray-700">Fast delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="text-[#A92020]" size={20} />
                <span className="text-sm font-medium text-gray-700">24/7 support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU2MDI2NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern web development code"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              {/* Floating code snippet */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-black text-white p-4 rounded-lg shadow-lg text-sm font-mono"
              >
                <div className="text-[#A92020]">{'<WebAlchemy>'}</div>
                <div className="text-green-400 ml-2">transform(ideas)</div>
                <div className="text-[#A92020]">{'</WebAlchemy>'}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}