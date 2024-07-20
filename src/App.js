import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './components/services/services';
import Careers from './components/careers/careers';
import ContactUs from './components/contactus/contactus';
import Home from './components/home/home';
import NotFound from './components/NotFound/notFound';
import Layout from './components/layout';
import SalesForceMain from './components/salesforce/salesforce';
import CloudSolutions from './components/cloudsolutions/cloudsolutions';
import OracleServices from './components/oracle/oracle';
import DataAnalaytics from './components/dataanalytics/dataanalytics';
import CRMConsulting from './components/crmconsulting/crmconsulting';
import AI from './components/artificialintelligence/ai';
import Devops from './components/devops/devops';
import ITStrategy from './components/itstrategy/itstrategy';
import SoftwareDelivery from './components/softwaredelivery/softwaredelivery';
import OutSourcing from './components/outsourcing/outsourcing';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crosscloudops" element={<Home />} />
          <Route path="/salesforce" element={<SalesForceMain />} />
          <Route path="/cloudsolutions" element={<CloudSolutions />} />
          <Route path="/oracle" element={<OracleServices />} />
          <Route path="/artificialintelligence" element={<AI/>} />
          <Route path='/dataanalytics' element={<DataAnalaytics />} />
          <Route path='/crmconsulting' element={<CRMConsulting />} />
          <Route path='/devops' element={<Devops />} />
          <Route path='/itstrategy' element={<ITStrategy />} />
          <Route path='/softwaredelivery' element={<SoftwareDelivery />}/>
          <Route path='/outsourcing' element={<OutSourcing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
