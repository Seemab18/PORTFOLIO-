import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Professional
              <span className="block gradient-text">Shopify Developer</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transforming ideas into high-performance e-commerce stores with 2+ years of expertise and 50+ successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#portfolio">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg w-full sm:w-auto">
                  View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://wa.me/923368834738" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg w-full sm:w-auto">
                  WhatsApp Me <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="flex space-x-8 text-center">
              <div>
                <p className="text-4xl font-bold gradient-text">50+</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">2+</p>
                <p className="text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">100%</p>
                <p className="text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-black rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <img  alt="Professional Shopify store design showcase" className="w-full rounded-lg" src="https://images.unsplash.com/photo-1677693972403-db681288b5da" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;