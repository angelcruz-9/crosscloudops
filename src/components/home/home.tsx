import React from 'react';
import AboutUs from '../about/about';
// import FooterLogo from '../footer/footer-logo';
import Header from '../header/header';
// import NumberSections from '../partnerships/countSection/countSection';
import useScrollToHash from './useScrollToHash';

const Home = () => {
  useScrollToHash();

  return (
    <>
       <section id="home" >
        <Header />
      </section> 
      <section id="aboutus">
        <AboutUs />
      </section>
      {/* <NumberSections />
      <FooterLogo /> */}
    </>
  );
};

export default Home;
