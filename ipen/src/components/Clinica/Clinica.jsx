import React from "react";
import ClinicaTitulo from "./ClinicaTitulo"
import Convenio from "./Convenio";
import Informações from "./Informações";

const Clinica = () => {
  return (
    <>
      <div className="min-h-screen flex-col justify-center bg-darkGreen pt-[60px] pb-[40px] select-none">
        <ClinicaTitulo />
        <Informações />
        <Convenio />
        </div>
    </>
  );
};

export default Clinica;
