import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";

interface SubItem {
  icon: IconType;
  text: string;
}

interface CardData {
  title: string;
  description: string;
  description1?: string;
  image: string;
  subItems?: SubItem[];
}

interface CarouselCardProps {
  cards: CardData[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex w-full items-center">
      <button
        className="bg-gray-400 text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        onClick={goToPrevious}
      >
        {"<"}
      </button>
      <div className="relative bg-white w-full flex justify-start items-center rounded-lg shadow-lg overflow-hidden mx-6 h-[650px] bg-amber-100	">
        <div className="relative w-full p-4">
          <img
            src={`${process.env.PUBLIC_URL}/${cards[currentIndex].image}`}
            alt={cards[currentIndex].title}
            className=""
          />
        </div>
        <div className="flex items-center justify-between w-full h-full">
          <div className="px-8 py-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {cards[currentIndex].title}
            </h2>
            <p className="text-gray-600 mt-2">
              {cards[currentIndex].description}
            </p>
            {cards[currentIndex].subItems && (
              <div className="mt-4 flex flex-col">
                {cards[currentIndex].subItems?.map((item, index) => (
                  <div key={index} className="flex py-2">
                    <item.icon size={24} color="blue" />{" "}
                    <p className="ml-2">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        className="bg-gray-400 text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        onClick={goToNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default CarouselCard;
