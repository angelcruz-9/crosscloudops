import React from "react";
import Marketing from "../partnerships/marketing/marketing";
import Pardot from "../partnerships/pardot/pardot";
import Sales from "../partnerships/sales/sales";
import SalesForce from "../partnerships/salesforce/salesForce";

const SalesForceMain: React.FC = () => {
  return (
    <>
      <Sales />
      <SalesForce />
      <Marketing />
      <Pardot />
    </>
  );
};


export default SalesForceMain;