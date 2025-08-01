import React from "react";
import { Home } from "../Shared/Components/Home/Home";
import HelmetComponent from "./HelmetComponent/HelmetComponent";

function Homes() {
  return (
    <>
      <HelmetComponent title={'Home - International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/'} />
      <Home />
    </>
  );
}

export default Homes;
