import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MousePointerClick } from 'lucide-react';

const marketingSpecialties = [
  {
    name: 'TikTok Ads',
    description: 'Leveraging viral trends and targeted campaigns to capture new audiences and drive massive traffic.',
    icon: '🎵',
    bgColor: 'bg-rose-500'
  },
  {
    name: 'Facebook/Meta Ads',
    description: 'Utilizing advanced targeting and retargeting strategies to convert visitors into loyal customers.',
    icon: '👍',
    bgColor: 'bg-blue-600'
  }
];

const Marketing = () => {
  return (
    <section id="marketing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Marketing & Growth</h2>
          <p className="text-gray-600 text-lg">Driving sales and making your store profitable with expert ad strategies.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {marketingSpecialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-4xl text-white ${specialty.bgColor}`}>
                  {specialty.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{specialty.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="mt-16 bg-black text-white rounded-2xl p-10 text-center"
        >
            <div className="flex justify-center items-center gap-4 mb-4">
                <TrendingUp className="h-8 w-8 text-green-400" />
                <MousePointerClick className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold mb-3">Turn Clicks into Customers</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A great store is just the beginning. My marketing expertise ensures your products reach the right people, maximizing your return on investment and boosting your bottom line.
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Marketing;