import React from 'react';
import AboutUs from '../about/about';
import Header from '../header/header';
import Marketing from '../partnerships/marketing/marketing';
import Pardot from '../partnerships/pardot/pardot';
import Sales from '../partnerships/sales/sales';
import SalesForce from '../partnerships/salesforce/salesForce';
import Services from '../services/services';
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
      <section id="sales-and-service-cloud">
        <Sales />
      </section>
      <section id="salesforce-integration">
        <SalesForce />
      </section>
      <section id="marketing-cloud">
        <Marketing />
      </section>
      <section id="pardot-implementation">
        <Pardot />
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
  );
};

export default Home;
