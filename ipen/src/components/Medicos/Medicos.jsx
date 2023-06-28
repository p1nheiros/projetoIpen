import React from "react";
import MedicosSlider from "./MedicosSlider";

const Medicos = () => {
    return (
        <>
    <div className="min-h-screen flex-col justify-center items-start static pt-[60px] pb-[40px] bg-darkGreen">
    <div className="items-start flex-col text-center text-white mb-[40px]"> 
        <h1 className="font-medium text-[72px]">Médicos</h1>
        <p className="font-medium text-[24px]">Rascunho para teste</p>
      </div>
                <MedicosSlider />
            </div>
        </>
    );
};

export default Medicos;
