import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

interface SubItem {
  text: string;
}

interface CardData {
  title: string;
  description: string;
  description1?: string;
  subItems: SubItem[];
}

const SalesCard: React.FC<{ card: CardData }> = ({ card }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg mb-6 w-full max-w-4xl"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.7)" }}
      transition={{ duration: 0.3 }}
      role="region"
      aria-labelledby={`card-title-${card.title}`}
    >
      <h2 id={`card-title-${card.title}`} className="text-2xl font-bold text-white mb-4">
        {card.title}
      </h2>
      <p className="text-lg text-white mb-4">{card.description}</p>
      {card.description1 && <p className="text-lg text-white mb-4">{card.description1}</p>}
      <ul className="list-none space-y-2">
        {card.subItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center text-lg text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index + 1) * 0.2 }}
          >
            <FiCheckCircle className="text-green-500 mr-2" aria-hidden="true" />
            <span>{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SalesCard;
