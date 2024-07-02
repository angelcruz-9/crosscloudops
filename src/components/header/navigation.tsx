import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { LuMenuSquare } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

interface NavItem {
  name: string;
  link?: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About Us",
    link: "/#aboutus",
  },
  {
    name: "Partnerships",
    subItems: [
      {
        name: "Sales and Service Cloud",
        link: "/#sales-and-service-cloud",
      },
      {
        name: "Salesforce Integration",
        link: "/#salesforce-integration",
      },
      {
        name: "Marketing Cloud",
        link: "/#marketing-cloud",
      },
      {
        name: "Pardot Implementation",
        link: "/#pardot-implementation",
      },
    ],
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Contact Us",
    link: "/contactus",
  },
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

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={` ${
        isScrolled ? "bg-orange-200 bg-opacity-100" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-10`}
    >
      <div className="container-common flex justify-between items-center py-8">
        <div className="logo flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logos.webp`}
            alt="logo"
            className="w-10 h-10"
          />
          <h2 className="text-2xl font-normal">Cross Cloud Ops</h2>
        </div>
        <div className="nav-items space-x-10 hidden xl:flex">
          {navItems.map((item, index) => (
            <div key={index} className="nav-item relative">
              <div className="flex items-center">
                <Link to={item.link || "#"} className="text-lg hover:text-orange-400">
                  {item.name}
                </Link>
                {item.subItems && (
                  <div
                    className="ml-2 cursor-pointer"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    {openDropdown === index ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                )}
              </div>
              {item.subItems && openDropdown === index && (
                <div className="sub-items absolute left-0 mt-2 bg-white shadow-lg w-48">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link || "#"}
                      className="block px-4 py-3 text-sm hover:text-orange-400"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="nav-items-mobile block xl:hidden relative">
          <LuMenuSquare size={30} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div
            className={`absolute top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
              isOpen ? "transform translate-y-0" : "transform -translate-y-full"
            }`}
          >
            {isOpen && (
              <div className="nav-items flex flex-col space-y-4 p-4">
                <IoClose size={30} onClick={() => setIsOpen(!isOpen)} className='absolute right-0 top-6' />
                {navItems.map((item, index) => (
                  <div key={index} className="nav-item relative">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.link || "#"}
                        className="text-lg hover:text-orange-400"
                      >
                        {item.name}
                      </Link>
                      {item.subItems && (
                        <div
                          className="ml-2 cursor-pointer"
                          onClick={() => handleDropdownToggle(index)}
                        >
                          {openDropdown === index ? (
                            <FiChevronUp />
                          ) : (
                            <FiChevronDown />
                          )}
                        </div>
                      )}
                    </div>
                    {item.subItems && openDropdown === index && (
                      <div className="sub-items mt-2 bg-white shadow-lg w-full">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link || "#"}
                            className="block px-4 py-3 text-sm hover:text-orange-400"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default Navigation;
