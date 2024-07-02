import React from "react";

interface NavItem {
  name: string;
  link?: string;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "Services",
    link: "/services",
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

const Footer: React.FC = () => {
  return (
    <div className="bg-cyan-950">
      <div className="container-common">
        <div className="flex flex-col xl:flex-row justify-between py-8">
          <div className="flex flex-col w-full xl:w-1/2">
            <div className="flex items-center">
              <img src={`${process.env.PUBLIC_URL}/assets/logos.webp`} alt="logo" className="w-10 h-10" />
              <h2 className="text-2xl font-normal ml-2">Cross Cloud Ops</h2>
            </div>
            <p className="text-white text-lg mt-2">
              Cross Cloud Ops helps our customers integrate and optimize
              Salesforce Marketing Cloud. A Salesforce Partner, our certified,
              knowledgeable experts enable rapid adoption of Salesforce
              solutions.
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <h2>Quick Links</h2>
            {navItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="text-white text-lg mt-2 hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <p className="py-4 text-center tracking-wide">Copyright © All Rights Reserved | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
