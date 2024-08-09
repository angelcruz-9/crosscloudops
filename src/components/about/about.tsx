import React from "react";
import { motion } from "framer-motion";
import Timeline from "./timeline";
import Lottie from "lottie-react";
import animationData from "../../utils/cloud.json";

const aboutData = {
  title: "The Cloud Is Our Expertise",
  description: (
    <p>
      Our tailored solutions to customer experience with cloud-based exceed
      industry standards and drive rapid growth. Fast-forward to success with
      our robust marketing solutions and integrate multiple clouds seamlessly.{" "}
      <a href="/services" className="text-orange-500 hover:text-orange-700">
        Learn More
      </a>
    </p>
  ),
  cardsData: [
    {
      title: "Our Story",
      desc: "As our name suggests, we are a dedicated team of Salesforce tech experts with a passion for helping our customers thrive in the cloud. Our passion and expertise combine to bring the best solutions to you. We are women-owned and are part of the Pledge 1% campaign. We are dedicated to improving the world while we empower your company through digital transformation.",
      icon: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/story.png`}
          alt="Story"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: "Our Approach",
      desc: "Our agile approach identifies gaps and opportunities, including project progress metrics and milestones. We have a detailed end-to-end solution to help your project surpass your expectations on-time and on-budget. Our solutions are nimble, able to adjust to your needs while maintaining optimal performance.",
      icon: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/approach.png`}
          alt="Approach"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: "Why Cross Cloud Ops",
      desc: "Cross Cloud Ops is a Salesforce Partner with 50+ developers and experts globally, garnering a perfect 5-star customer satisfaction rating. Our projects power 150+ million customers for our clients. We regularly beat competitor pricing and time-to-launch estimates. We have decades of experience and dozens of certifications.",
      icon: (
        <img
          src={`${process.env.PUBLIC_URL}/assets/whyus.png`}
          alt="Whyus"
          width={40}
          height={40}
        />
      ),
    },
  ],
};

const AboutUs: React.FC = () => {
  return (
    <div className="aboutus py-12 xl:py-24 relative overflow-hidden">
      <div className="bg-fixed-opacity"></div>
      <div className="container-common relative flex flex-col z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-3xl xl:text-5xl text-center xl:text-left font-semibold text-white">
            {aboutData.title}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <p className="text-[18px] leading-8 text-center xl:text-left py-10 w-full text-white">
            {aboutData.description}
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center mx-8 xl:mx-44 relative z-30">
        <Timeline timeline={aboutData.cardsData} />
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 400, height: 400 }}
        />
      </div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent -z-1"></div>
    </div>
  );
};

export default AboutUs;
