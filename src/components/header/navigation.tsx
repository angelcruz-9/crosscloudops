import React, { useEffect, useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import NavigationItem from "./navigationItem";

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

const navItems: NavItem[] = [
  { name: "Home", link: "/#home" },
  { name: "About Us", link: "/#aboutus" },
  {
    name: "Technologies",
    link: "/salesforce",
    subItems: [
      {
        Title: "Technology Platforms",
        items: [
          { name: "Cloud Solutions(Azure,AWS)", link: "/cloudsolutions" },
          { name: "Oracle", link: "/oracle" },
          { name: "Salesforce", link: "/salesforce" },
        ],
      },
      {
        Title: "Technology Expertise",
        items: [
          { name: "Artificial Intelligence (AI)", link: "#" },
          { name: "Data Analysis", link: "/dataanalytics" },
          { name: "CRM Consulting", link: "#" },
        ],
      },
      {
        Title: "Technology Delivery",
        items: [
          { name: "Devops", link: "#" },
          { name: "IT Strategy", link: "#" },
          { name: "Modern Software Delivery", link: "#" },
          { name: "Outsourcing", link: "#" },
        ],
      },
    ],
  },
  { name: "Services", link: "/services" },
  { name: "Careers", link: "/careers" },
  { name: "Contact Us", link: "/contactus" },
];

const Navigation: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isScrolled ? "shadow-lg bg-[#000000]" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="container-common flex justify-between items-center py-8">
        <div className="logo flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logos.webp`}
            alt="logo"
            className="w-10 h-10"
          />
          <h2 className="text-2xl ml-2 font-normal text-white">
            Cross Cloud Ops
          </h2>
        </div>
        <div className="nav-items space-x-10 hidden xl:flex">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              item={item}
              index={index}
              handleDropdownToggle={handleDropdownToggle}
            />
          ))}
        </div>
        <div className="nav-items-mobile text-white block xl:hidden relative">
          <LuMenuSquare size={30} onClick={handleMobileMenuToggle} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-black shadow-lg"
            >
              <IoClose
                size={30}
                onClick={handleMobileMenuToggle}
                className="absolute right-0 top-6 text-white cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="nav-items flex flex-col text-white space-y-4 p-4"
              >
                {navItems.map((item, index) => (
                  <NavigationItem
                    key={index}
                    item={item}
                    index={index}
                    handleDropdownToggle={handleDropdownToggle}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navigation;
