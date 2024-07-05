import React from 'react';
import AboutUs from '../about/about';
import Header from '../header/header';
import SalesForceMain from '../salesforce/salesforce';
import useScrollToHash from './useScrollToHash';

const Home = () => {
  useScrollToHash();

  return (
    <div>
       <section id="home">
        <Header />
      </section> 
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id='salesforce'>
      <SalesForceMain />
      </section>
    </div>
  );
};

export default Home;
