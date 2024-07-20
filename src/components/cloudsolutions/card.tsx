import React, { useState } from "react";
import { FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
  cardImg?: React.ReactNode;
  cardTitle: string;
  cardDesc?: React.ReactNode;
  cardSubItems?: { text: string }[];
}

const CardContent: React.FC<CardProps> = ({ cardImg, cardDesc, cardSubItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="flex flex-col  mb-4">
        {cardImg && <div className="w-12 h-12 mb-4">{cardImg}</div>}
      </div>
      <p className="text-lg text-white mb-4">{cardDesc}</p>
      <ul className="list-none space-y-2">
        {cardSubItems?.map((item, index) => (
          <li key={index} className="flex items-center text-white">
            <FaCheck className="text-green-500 mr-2" />
            {item.text}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

interface Card {
  id: number;
  cardImg?: React.ReactNode;
  cardTitle: string;
  cardDesc?: React.ReactNode;
  cardSubItems?: { text: string }[];
}

interface TabsProps {
  cards: Card[];
}

const Tabs: React.FC<TabsProps> = ({ cards }) => {
  const [activeTab, setActiveTab] = useState(cards[0].id);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col p-4 bg-gray-800 rounded-lg w-full md:w-1/3 mb-4 md:mb-0">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`cursor-pointer p-4 mb-2 rounded-lg hover:bg-gray-600 ${activeTab === card.id ? 'bg-gray-600' : 'bg-gray-700'}`}
            onClick={() => setActiveTab(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: card.id * 0.1 }}
          >
            <h3 className="text-xl font-bold text-white">{card.cardTitle}</h3>
          </motion.div>
        ))}
      </div>
      <div className="w-full md:w-2/3 bg-gray-900 p-4 rounded-lg">
        <AnimatePresence mode="wait">
          {cards.map((card) =>
            activeTab === card.id && (
              <CardContent key={card.id} {...card} />
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
