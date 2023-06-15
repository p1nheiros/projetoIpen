import React from 'react'

export const Home = () => {
  return (
    <div className="text-black bg-[url('../img/imageBG2.png')] bg-cover bg-center bg-no-repeat min-h-screen pt-[20px] pb-[100px] md:pt-[40px] md:pb-[40px] select-none">
      <div className='w-full h-screen mx-auto items-start flex-col text-center'>
        <div className='pt-[11rem]'>
          <h1 className='text-darkGreen text-8xl sm:text-8xl md:text-9xl font-bold text-left ml-[25px] md:text-left md:ml-[100px] lg:ml-[80px] xl:ml-[130px]'>
            IPEN
          </h1>

          <p className='text-gray text-base sm:text-2xl md:text-3xl text-left ml-[25px] md:text-left md:ml-[100px] lg:ml-[80px] xl:ml-[130px]'>
            Instituto de Pediatria e Neurologia Infantil
          </p>
        </div>
        <div className='pt-[4rem]'>
          <p className='text-white text-3xl sm:text-4xl md:text-6xl text-4xl mr-[25px] text-left ml-[25px] md:text-left md:ml-[100px] lg:ml-[80px] xl:ml-[130px]' style={{ lineHeight: "1.2" }}>
            Clínica Médica <br />
            Especializada em Pediatria <br />
            e Neurologia Infantil
          </p>
        </div>
        <div className='pt-[5rem]'>
          <div className='gap-12 flex flex-col sm:flex-col md:flex-row ml-[25px] mr-[25px] md:mr-[80px] lg:ml-[80px] xl:ml-[130px] md:ml-[75px]'>
            <button className='text-white bg-darkGreen rounded-full hover:bg-lightGray text-xl py-2 px-4 sm:py-4 sm:px-12 sm:text-3xl md:text-3xl md:py-4 md:px-12'>
              Agendar Consulta
            </button>
            <button className='bg-white text-darkGreen rounded-full hover:bg-lightGray text-xl py-2 px-4 sm:py-4 sm:px-12 sm:text-3xl md:text-3xl md:py-4 md:px-12'>
              Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
