import React from "react";
import AboutTítulo from "./AboutTítulo";
import Convenio from "./Convenio";
import Informações from "./Informações";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex-col justify-center bg-darkGreen pt-[60px] pb-[40px]">
        <AboutTítulo />
        <Informações />
        <Convenio />
        </div>
    </>
  );
};

export default About;
