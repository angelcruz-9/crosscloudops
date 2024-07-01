import React from "react";
import Navigation from "./navigation";

// Video Background Content Component
const VideoBackgroundContent: React.FC = () => {
  return (
    <section className="relative h-screen ">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 opacity-25 object-cover w-full h-full"
        poster="/assets/video-poster.jpg"
      >
        <source src={`${process.env.PUBLIC_URL}/assets/video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black">
            Cross Cloud Ops, Your Partner In The Cloud
          </h1>
          <div className="text-2xl font-bold text-black flex flex-col items-center py-6">
            <h3>Personalized IT Consultancy</h3>
            <img src={`${process.env.PUBLIC_URL}/assets/sf_logo.png`} alt="partner"/>
          </div>
          <p className="mt-4 text-lg text-black">
            Let us build optimized digital experiences to drive your company's
            rapid growth.
          </p>
        </div>
      </div>
    </section>
  );
};

const Header: React.FC = () => {
  return (
    <div>
      <Navigation />
      <VideoBackgroundContent />
    </div>
  );
};

export default Header;
