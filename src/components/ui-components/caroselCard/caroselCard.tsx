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
  image?: string;
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
    <div className="relative">
      <div className="flex w-full items-center">
        <button
          className="bg-gray-400 text-black rounded-full w-10 h-10 hidden xl:flex items-center justify-center cursor-pointer"
          onClick={goToPrevious}
        >
          {"<"}
        </button>
        <div className="relative bg-gray-800 w-full flex flex-col xl:flex-row justify-start items-center rounded-lg shadow-lg overflow-hidden xl:mx-6 h-full xl:h-[650px]">
          <div className="relative w-full p-4">
            <img
              src={`${process.env.PUBLIC_URL}/${cards[currentIndex].image}`}
              alt={cards[currentIndex].title}
              className=""
            />
          </div>
          <div className="flex items-center justify-between w-full h-full">
            <div className="px-8 py-6 text-white">
              <h2 className="text-2xl font-semibold">
                {cards[currentIndex].title}
              </h2>
              <p className="text-gray-300 mt-2">
                {cards[currentIndex].description}
              </p>
              {cards[currentIndex].subItems && (
                <div className="mt-4 flex flex-col">
                  {cards[currentIndex].subItems?.map((item, index) => (
                    <div key={index} className="flex py-2">
                      <item.icon size={24} color="#63b3ed" />{" "}
                      <p className="ml-2 text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          className="bg-gray-400 text-black rounded-full w-10 h-10 hidden xl:flex items-center justify-center cursor-pointer"
          onClick={goToNext}
        >
          {">"}
        </button>
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;
