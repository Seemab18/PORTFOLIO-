import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: "Evo Studios 1",
    category: "Custom Shopify Theme",
    link: "https://evostudios1.myshopify.com/",
    image: "A sleek and modern e-commerce storefront for a fashion brand"
  },
  {
    title: "Evo Studios 2",
    category: "Shopify Plus Build",
    link: "https://evostudios2.myshopify.com/",
    image: "A vibrant and colorful online store for a cosmetics company"
  },
  {
    title: "Evo Studios 4",
    category: "Headless Commerce",
    link: "https://evostudios4.myshopify.com/",
    image: "A minimalist and clean website for a high-tech gadget store"
  },
  {
    title: "Evo Studios 7",
    category: "Mobile-First Design",
    link: "https://evostudios7.myshopify.com/",
    image: "An elegant and luxurious online boutique for jewelry"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Portfolio</h2>
          <p className="text-gray-600 text-lg">Successful Shopify stores I've designed. <br/> Store password is: <span className="font-bold text-black">EVO</span></p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block bg-white rounded-xl overflow-hidden shadow-lg hover-lift group"
            >
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <img  alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500 font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                  </div>
                  <ArrowUpRight className="h-8 w-8 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;