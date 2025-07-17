import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img  alt="Seemab Shafique, Shopify Developer" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              As a Shopify developer with extensive 2 year experience, I specialize in creating customized, high-performance e-commerce stores that drive sales and enhance user experience. I have a deep understanding of Shopify's Liquid templating language, enabling me to build responsive, visually appealing themes tailored to brand identities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Beyond front-end design, I'm proficient in integrating third-party apps and APIs to extend store functionality, streamline operations, and optimize checkout processes. My expertise also includes developing custom Shopify apps and automating workflows to meet unique business needs. Committed to best practices in SEO and site speed optimization, I ensure every store I build not only looks great but performs flawlessly across all devices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;