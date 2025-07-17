import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "Shopify & Liquid", icon: "🛍️" },
  { name: "JavaScript (ES6+)", icon: "⚡" },
  { name: "React & Next.js", icon: "⚛️" },
  { name: "Headless Commerce", icon: "🔗" },
  { name: "Theme Development", icon: "🎨" },
  { name: "API Integration", icon: "🔌" },
  { name: "Figma & UI/UX", icon: "🎯" },
  { name: "Performance & SEO", icon: "🚀" }
];

const Technologies = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-gray-300 text-lg">Cutting-edge tools for exceptional results</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover-lift"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="font-semibold">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;