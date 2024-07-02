import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Careers from './components/careers/careers';
import ContactUs from './components/contactus/contactus';
import Home from './components/home/home';
import NotFound from './components/NotFound/notFound';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crosscloudops" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
