import React, { useEffect, useRef, useState } from "react";

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
    <div className="relative z-20 pl-12 ml-4 xl:ml-0">
      <div
        className="timeline-line absolute left-0 top-0 bg-gray-300 transition-all duration-500 ease-in-out"
        style={{ height: `${lineHeight}px`, width: "4px" }}
      ></div>
      {timeline.map((card, index) => (
        <div
          key={index}
          ref={(el) => (timelineRefs.current[index] = el)}
          className={`timeline-card mb-8 p-4 w-full xl:w-2/3 ${
            index === activeIndex ? "" : ""
          }`}
        >
          <div
            className={`p-2 rounded-full text-center absolute -left-[64px] top-4 transition-all duration-500 ${
              index <= activeIndex
                ? "bg-[#E72162] shadow-lg"
                : "bg-gray-700"
            }`}
          >
            <span className="timeline-icon">{card.icon}</span>
          </div>
          <div className="flex flex-col items-start mb-4">
            <h3 className={`text-2xl  font-bold ${index <= activeIndex ? "text-[#E72162]" : "text-white"}`}>{card.title}</h3>
            <p className="text-md text-gray-400 pt-8">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
