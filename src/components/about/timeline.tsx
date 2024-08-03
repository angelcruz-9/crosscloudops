import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardData {
  title: string;
  desc: string;
  icon: JSX.Element;
}

interface TimelineProps {
  timeline: CardData[];
}

const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lineHeight, setLineHeight] = useState<number>(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let newActiveIndex = activeIndex;

      timelineRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            newActiveIndex = index;
          }
        }
      });

      setActiveIndex(newActiveIndex);
      updateLineHeight(newActiveIndex);
    };

    const updateLineHeight = (index: number) => {
      if (timelineRefs.current[index]) {
        const top = timelineRefs.current[0]?.getBoundingClientRect().top || 0;
        const bottom =
          timelineRefs.current[index]?.getBoundingClientRect().bottom || 0;
        setLineHeight(bottom - top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateLineHeight(activeIndex);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="relative xl:w-1/2 z-20 pl-12 ml-4 xl:ml-0">
      <div
        className="timeline-line absolute left-0 top-0 bg-gray-300 transition-all duration-500 ease-in-out"
        style={{ height: `${lineHeight}px`, width: "4px" }}
      ></div>
      {timeline.map((card, index) => (
        <motion.div
          key={index}
          ref={(el) => (timelineRefs.current[index] = el)}
          className={`timeline-card mb-8 p-4 w-full ${
            index === activeIndex ? "" : ""
          }`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: index <= activeIndex ? 1 : 0.5, x: index <= activeIndex ? 0 : -100 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.div
            className={`p-2 rounded-full text-center absolute -left-[64px] top-4 transition-all duration-500 ${
              index <= activeIndex
                ? "bg-orange-500 shadow-lg"
                : "bg-gray-700"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: index <= activeIndex ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <span className="timeline-icon">{card.icon}</span>
          </motion.div>
          <div className="flex flex-col items-start mb-4">
            <h3 className={`text-[24px] font-bold ${index <= activeIndex ? "text-orange-500" : "text-white"}`}>{card.title}</h3>
            <p className="text-[18px] leading-7 text-white pt-8">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
