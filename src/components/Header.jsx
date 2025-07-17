import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold gradient-text"
        >
          SEEMAB SHAFIQUE
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          <a href="https://wa.me/923368834738" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;