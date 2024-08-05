import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    description: string;
    title: string;
  }[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const addAnimation = useCallback(() => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      setStart(true);
    }
  }, [getDirection]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl", className)}
      style={{ "--animation-duration": "40s" } as React.CSSProperties} // Normal speed
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((card, idx) => {
          const imageUrl = `${process.env.PUBLIC_URL}${card.image}`;
          return (
            <li
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 card-effect flex-shrink-0 px-8 py-6 md:w-[450px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
              style={{ background: "#2E2E2E" }}
              key={idx}
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
                <h3 className="text-[24px] leading-6 font-semibold text-center text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-[16px] text-center">{card.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
