import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: "Starter",
    price: "$200",
    features: [
      "Basic Shopify theme setup",
      "Mobile responsive design",
      "5 product pages",
      "Contact form integration",
      "Basic SEO optimization",
      "1 week delivery"
    ]
  },
  {
    name: "Professional",
    price: "$500",
    features: [
      "Custom Shopify theme design",
      "Advanced mobile optimization",
      "Unlimited product pages",
      "Payment gateway integration",
      "Advanced SEO & analytics",
      "Social media integration",
      "2 weeks delivery",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1000+",
    features: [
      "Fully custom Shopify Plus setup",
      "Advanced functionality",
      "Multi-language support",
      "Custom app development",
      "Performance optimization",
      "Advanced integrations",
      "Priority support",
      "Ongoing maintenance"
    ]
  }
];

const Services = () => {
  const handleGetStartedClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Service Packages</h2>
          <p className="text-gray-600 text-lg">Choose the perfect package for your business</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 hover-lift flex flex-col ${
                pkg.popular 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-black mb-4">{pkg.price}</div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={handleGetStartedClick} className="w-full mt-auto">
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;