import React from "react";
import Pardot from "../partnerships/pardot/pardot";
import Sales from "../partnerships/sales/sales";
import SalesForce from "../partnerships/salesforce/salesForce";

const SalesForceMain: React.FC = () => {
  return (
    <>
      <Sales />
      <SalesForce />
      <Pardot />
    </>
  );
};


export default SalesForceMain;