'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    price: '$150 - $250',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Contact Forms',
      'Basic SEO',
      'Mobile Optimized',
      '30 Days Support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$285 - $350',
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      'Everything in Basic',
      'Custom Development',
      'CMS Integration',
      'Payment Processing',
      'Analytics Setup',
      '90 Days Support',
      'Performance Optimization',
      'Security Hardening',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    description: 'For large organizations with complex requirements',
    features: [
      'Everything in Professional',
      'Advanced Integrations',
      'Custom Backend',
      'Scalable Architecture',
      'Multi-language Support',
      '1 Year Support',
      'Dedicated Account Manager',
      'Priority Development',
    ],
    popular: false,
  },
];

export function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with form service (Netlify Forms, Formspree, or custom API)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-12 shadow-lg"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-black mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-8">
              We've received your project details and will get back to you within 24 hours 
              with a detailed proposal and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#A92020] hover:bg-[#8B1A1A] text-white"
                onClick={() => window.open('https://wa.me/2348058315655', '_blank')}
              >
                <MessageCircle className="mr-2" size={16} />
                Chat on WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get Your Project Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a package that fits your needs or request a custom quote for your specific requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pricing Packages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Pricing Packages</h3>
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`relative ${pkg.popular ? 'border-[#A92020] border-2' : 'border-black/10'}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-6 bg-[#A92020] text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-xl font-bold text-black">{pkg.name}</span>
                      <span className="text-lg font-bold text-[#A92020]">{pkg.price}</span>
                    </CardTitle>
                    <p className="text-gray-600">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="text-[#A92020] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-black/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">Request Custom Quote</CardTitle>
                <p className="text-gray-600">
                  Tell us about your project and we'll provide a detailed proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-black/20 focus:border-[#A92020]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="border-black/20 focus:border-[#A92020]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-black/20 focus:border-[#A92020]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-black/20 focus:border-[#A92020]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger className="border-black/20 focus:border-[#A92020]">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="events">Event Website</SelectItem>
                          <SelectItem value="healthcare">Healthcare Platform</SelectItem>
                          <SelectItem value="trading">Trading Platform</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="border-black/20 focus:border-[#A92020]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-260">Under $260</SelectItem>
                          <SelectItem value="260-350">$260 - $350</SelectItem>
                          <SelectItem value="360-500">$360 - $500</SelectItem>
                          <SelectItem value="550-plus">$550+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      required
                      rows={4}
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="border-black/20 focus:border-[#A92020]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#A92020] hover:bg-[#8B1A1A] text-white py-3"
                    size="lg"
                  >
                    Get Your Quote
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}