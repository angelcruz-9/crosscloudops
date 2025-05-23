import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
    link: "/#aboutus",
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
          <div className="flex items-center gap-8">
            <a
              href="https://www.facebook.com/people/Cross-Cloud-Ops/100075985782048/"
              className="mr-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Cross Cloud Ops on Facebook"
            >
              <MdOutlineFacebook size={30} className="hover:text-orange-500" />
            </a>
            <a
              href="https://www.linkedin.com/company/crosscloudops/"
              className="mr-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Cross Cloud Ops on Linkedin"
            >
              <RiLinkedinBoxFill size={30} className="hover:text-orange-500" />
            </a>
            <a
              href="https://x.com/crosscloudops"
              className="mr-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Cross Cloud Ops on twitter"
            >
              <FaSquareXTwitter size={26} className="hover:text-orange-500" />
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
      <div className="flex flex-row xl:justify-center xl:items-center">
        <p className="py-4 text-center leading-7 text-lg font-normal tracking-wide text-[#ffffff]">
          Copyright 2025 © All Rights Reserved
        </p>
        <span className="py-4 px-4 text-center leading-7 text-lg font-normal tracking-wide text-[#ffffff]">|</span>
        <Link className="py-4 text-center leading-7 text-lg font-normal tracking-wide  text-[#ffffff]" to='/privacy-policy'>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
