import React from "react";
import convenioAMil from "../../imagens/Convenio/amil-logo-1-2.png";

const Convenio = () => {
  return (
    <>
      <div className="flex-col mt-[40px]">
        {/* text */}
        <div className="text-3xl md:text-4xl flex justify-center text-white mb-[40px]">
          Convênios Aceitos
        </div>
        {/* grid */}
        <div class="mx-auto flex justify-center items-center">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Convenios */}
            <div className="rounded-lg justify-center flex bg-white p-[15px]">
              <img
                className="w-[100px]"
                src={convenioAMil}
                alt="Convenio Amil"
              />
            </div>
            <div className="rounded-lg justify-center flex bg-white p-[15px]">
              <img
                className="w-[100px]"
                src={convenioAMil}
                alt="Convenio Amil"
              />
            </div>
            <div className="rounded-lg justify-center flex bg-white p-[15px]">
              <img
                className="w-[100px]"
                src={convenioAMil}
                alt="Convenio Amil"
              />
            </div>
            <div className="rounded-lg justify-center flex bg-white p-[15px]">
              <img
                className="w-[100px]"
                src={convenioAMil}
                alt="Convenio Amil"
              />
            </div>
            <div className="rounded-lg justify-center flex bg-white p-[15px]">
              <img
                className="w-[100px]"
                src={convenioAMil}
                alt="Convenio Amil"
              />
            </div>
            <div className="rounded-lg justify-center flex bg-white p-[15px]">
              <img
                className="w-[100px]"
                src={convenioAMil}
                alt="Convenio Amil"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convenio;
