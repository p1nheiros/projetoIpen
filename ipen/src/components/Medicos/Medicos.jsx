import React from "react";
import MedicosSlider from "./MedicosSlider";

const Medicos = () => {
    return (
        <>
            <div className="min-h-screen flex-col justify-center items-start static pt-[60px] pb-[40px] bg-darkGreen">
                <div className="items-start flex-col text-center text-white mb-[40px]">
                    <h1 className="font-medium text-[64px] md:text-[72px]">Médicos</h1>
                    <p className="font-medium ml-8 mr-8 md:ml-0 md:mr-0 text-[20px] md:text-[24px]">Nossa equipe de médicos especializados são doutrinados a fazer o melhor pelos seus pacientes</p>
                </div>
                <div className="pt-8 md:pt-16 justify-center flex">
                    <MedicosSlider />
                </div>
            </div>
        </>
    );
};

export default Medicos;
