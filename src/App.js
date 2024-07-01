import './App.css';
import AboutUs from './components/about/about';
import Careers from './components/careers/careers';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Marketing from './components/partnerships/marketing/marketing';
import Pardot from './components/partnerships/pardot/pardot';
import Sales from './components/partnerships/sales/sales';
import SalesForce from './components/partnerships/salesforce/salesForce';
import Services from './components/services/services';

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Sales />
      <SalesForce />
      <Marketing />
      <Pardot />
      <Services />
      <Careers />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
