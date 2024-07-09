import React from "react";
import FooterLogo from "../footer/footer-logo";
import NumberSections from "../partnerships/countSection/countSection";
import Pardot from "../partnerships/pardot/pardot";
import Sales from "../partnerships/sales/sales";
import SalesForce from "../partnerships/salesforce/salesForce";

const SalesForceMain: React.FC = () => {
  return (
    <>
      <Sales />
      <SalesForce />
      <NumberSections />
      <Pardot />
      <FooterLogo />
    </>
  );
};


export default SalesForceMain;