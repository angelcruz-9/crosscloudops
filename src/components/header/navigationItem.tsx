import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  link?: string;
  subItems?: {
    Title: string;
    items: {
      name: string;
      link: string;
    }[];
  }[];
}

const NavigationItem: React.FC<{
  item: NavItem;
  index: number;
  handleDropdownToggle: (index: number) => void;
}> = ({ item, index, handleDropdownToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      key={index}
      className="nav-item relative"
      ref={ref}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center">
        <Link to={item.link || "#"} className="text-lg text-white hover:text-orange-400">
          {item.name}
        </Link>
        {item.subItems && (
          <div
            className="ml-2 cursor-pointer text-white"
            onClick={handleToggle}
          >
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        )}
      </div>
      <AnimatePresence>
        {item.subItems && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: '300px', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sub-items fixed top-24 left-0 w-full bg-[#060606] shadow-lg p-6 xl:p-12 overflow-y-auto z-50"
          >
            <div className="container mx-auto flex flex-col xl:flex-row justify-between items-center">
              <div className="w-full xl:w-[35%]">
                <img src={`${process.env.PUBLIC_URL}/assets/digital.png`} alt="Digital" className="w-10 h-12 mb-4"/>
                <h2 className="text-2xl font-normal text-white mb-4">TECHNOLOGY SERVICES</h2>
                <p className="text-sm text-[#ccc]">Together we plan, build and deliver technology to solve your business challenges.</p>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-4 xl:mt-0">
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="mr-8 w-full text-white">
                  <h3 className="text-lg font-bold mb-2">{subItem.Title}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {subItem.items.map((nestedItem, nestedIndex) => (
                      <Link
                        key={nestedIndex}
                        to={nestedItem.link || "#"}
                        className="text-sm text-[#ccc] hover:text-orange-400"
                      >
                        {nestedItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationItem;
