"use client";

import { cn } from "../../../utils/cn";
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

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
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      setStart(true);
    }
  }, [getDirection]);


  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl", className)}
      style={{ "--animation-duration": "30s" } as React.CSSProperties} // Normal speed
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap bg-primary",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((card, idx) => {
          const imageUrl = `${process.env.PUBLIC_URL}${card.image}`;
          return (
            <li
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] cursor-pointer"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
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
                <h3 className="text-xl font-semibold text-center text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-center">{card.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
