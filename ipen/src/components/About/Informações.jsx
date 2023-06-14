import React from "react";
import imagemPacienteMedico from "../../imagens/Clínica/fotoMedicoPaciente.avif";
import { FaPhoneAlt, FaRegClock, FaRegAddressCard } from "react-icons/fa";

const Informações = () => {
  return (
    <>
      {/* Grade 1 (principal) */}
      <div className="w-full md:w-11/12 grid grid-cols lg:grid-cols-2 justify-center items-center gap-4 my-[40px]">
        {/* Informações */}
        {/* A organização aqui ficará da seguinte forma uma grid com 1 coluna concatenada a uma grid com 2 colunas, juntamente com uma outra grid de 2 colunas para o horário */}
        {/* Grid 1 coluna */}
        <div className="grid grid-cols mx-[80px] md:mx-0">
          {/* Título */}
          <p className="text-white text-xl text-center md:text-left md:ml-[20px] lg:ml-[40px] xl:ml-[60px]">
            Somos o Instituto de Pediatria e Neurologia Infantil. Nos dedicamos
            à saúde e bem estar dos nossos pequenos.
          </p>
          {/* Grid 2 Colunas */}
          <div className="grid grid-cols text-center md:text-left mt-[40px]">
            {/* Linha 1 */}
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,3fr] items-start">
              <div className="flex justify-center md:justify-end items-center mb-[20px] mr-[20px]">
                <FaRegAddressCard className="text-3xl text-lightGreen" />
              </div>
              <p className="text-white text-xl">
                Atuamos na área de pediatria, hebiatria, neuropediatria e
                neuropsicologia.
              </p>
            </div>
            {/* Linha 2 */}
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,3fr] mt-[40px]">
              <div className="flex justify-center md:justify-end items-center mb-[20px] mr-[20px]">
                <FaPhoneAlt className="text-3xl text-lightGreen" />
              </div>
              <p className="text-white text-xl">
                Entre em contato conosco para entenderem melhor nossos serviços.
              </p>
            </div>
            {/* Linha 3 */}
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,3fr] mt-[40px]">
              <div className="flex justify-center md:justify-end items-center mb-[20px] mr-[20px]">
                <FaRegClock className="text-3xl text-lightGreen" />
              </div>
              <div className="grid grid-cols">
                <p className="text-white text-xl">
                  8:00 as 18:00 - Segunda a Sexta
                </p>
                <p className="text-white text-xl">9:00 as 12:00 - Sábado</p>
              </div>
            </div>
          </div>
        </div>
        {/* Imagem*/}
        <div className="hidden lg:flex">
          <img
            className="rounded-2xl"
            src={imagemPacienteMedico}
            alt="imagemPacientemMedico"
          />
        </div>
      </div>
    </>
  );
};

export default Informações;
