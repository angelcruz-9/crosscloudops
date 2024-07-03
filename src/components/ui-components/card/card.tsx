import React from "react";
import { motion } from "framer-motion";

interface CardData {
  image: string; // This will hold the relative path
  title: string;
  description: string;
}

interface CardProps {
  cards: CardData[];
}

const Card: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const imageUrl = `${process.env.PUBLIC_URL}${card.image}`;
        return (
          <motion.div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer justify-start transition-transform duration-300 ease-in-out transform hover:-translate-y-2 p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)", // Adjusted box shadow for glow effect
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex justify-center items-center bg-orange-400 w-16 h-16 p-4 rounded-full mx-auto">
              <motion.img
                src={imageUrl}
                alt={card.title}
                className="w-10 h-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 15, -15, 0], transition: { duration: 1.5, repeat: Infinity } }}
              />
            </div>
            <div className="py-8">
              <h3 className="text-xl font-semibold text-center text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white text-center">{card.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Card;
