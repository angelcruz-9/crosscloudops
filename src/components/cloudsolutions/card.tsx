import React, { useState } from "react";
import { FaCheck } from 'react-icons/fa';

interface CardProps {
  cardImg?: React.ReactNode;
  cardTitle: string;
  cardDesc: React.ReactNode;
  cardSubItems?: { text: string }[];
}

const CardContent: React.FC<CardProps> = ({ cardImg, cardTitle, cardDesc, cardSubItems }) => {
  return (
    <div className="p-6">
      <div className="flex flex-col mb-4">
        <div className="w-12 mb-4">{cardImg}</div>
        <h3 className="text-2xl font-bold text-white">{cardTitle}</h3>
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
    </div>
  );
};

interface Card {
  id: number;
  cardImg?: React.ReactNode;
  cardTitle: string;
  cardDesc: React.ReactNode;
  cardSubItems?: { text: string }[];
}

interface TabsProps {
  cards: Card[];
}

const Tabs: React.FC<TabsProps> = ({ cards }) => {
  const [activeTab, setActiveTab] = useState(cards[0].id);

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`cursor-pointer p-4 mb-2 rounded-lg hover:bg-gray-600 ${activeTab === card.id ? 'bg-gray-600' : 'bg-gray-700'}`}
            onClick={() => setActiveTab(card.id)}
          >
            <h3 className="text-xl font-bold text-white">{card.cardTitle}</h3>
          </div>
        ))}
      </div>
      <div className="w-2/3 bg-gray-900 p-4 rounded-lg mt-4">
        {cards.map((card) => activeTab === card.id && <CardContent key={card.id} {...card} />)}
      </div>
    </div>
  );
};

export default Tabs;
