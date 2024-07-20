import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

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
    <div className="relative z-30">
      <div className="bg-[#F2F5F7]">
        <div className="flex container-common justify-between py-2">
          <div className="flex items-center">
            <a href="https://www.facebook.com/people/Cross-Cloud-Ops/100075985782048/" className="mr-1" target="_blank"  rel="noreferrer">
              <MdOutlineFacebook size={30} className='hover:text-orange-500'/>
            </a>
            <a href="https://www.linkedin.com/company/crosscloudops/" className="mr-1" target="_blank"  rel="noreferrer">
              <RiLinkedinBoxFill size={30} className='hover:text-orange-500'/>
            </a>
            <a href="https://x.com/crosscloudops" className="mr-1" target="_blank"  rel="noreferrer">
              <FaSquareXTwitter size={26} className='hover:text-orange-500'/>
            </a>
          </div>
          <div className="flex flex-col xl:flex-row items-center">
            {navItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className=" text-[#3A4F66] leading-7 font-normal text-[18px] mr-4 hover:text-orange-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="py-4 text-center leading-7 text-lg font-normal tracking-wide bg-[#000000] text-[#ffffff]">
        Copyright © All Rights Reserved | Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
