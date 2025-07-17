import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold mb-4 block">SEEMAB SHAFIQUE</span>
            <p className="text-gray-400">
              Professional Shopify developer creating exceptional e-commerce experiences.
            </p>
          </div>
          <div>
            <span className="font-semibold mb-4 block">Services</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white">Custom Theme Design</a></li>
              <li><a href="#services" className="hover:text-white">Store Setup</a></li>
              <li><a href="#services" className="hover:text-white">Mobile Optimization</a></li>
              <li><a href="#services" className="hover:text-white">SEO Integration</a></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold mb-4 block">Links</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold mb-4 block">Contact</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:seemabshafique31@gmail.com" className="hover:text-white">seemabshafique31@gmail.com</a></li>
              <li><a href="https://wa.me/923368834738" target="_blank" rel="noopener noreferrer" className="hover:text-white">+92 336 8834738</a></li>
              <li><span className="hover:text-white">Range Road, Rawalpindi</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Seemab Shafique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;