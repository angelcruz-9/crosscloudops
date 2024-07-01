import React from "react";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card, index) => {
        const imageUrl = `${process.env.PUBLIC_URL}${card.image}`;
        return (
          <div
            key={index}
            className="bg-white hover:bg-neutral-100 rounded-lg shadow-lg overflow-hidden p-8 flex flex-col cursor-pointer justify-start transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className="flex justify-center items-center bg-orange-400 w-16 h-16 p-4 rounded-full mx-auto">
              <img src={imageUrl} alt={card.title} className="w-10 h-10" />
            </div>
            <div className="py-8">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
