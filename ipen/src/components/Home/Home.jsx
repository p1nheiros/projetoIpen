import React from 'react'

export const Home = () => {
  return (
    <div className="text-black bg-[url('../img/imageBG2.png')] bg-cover bg-center bg-no-repeat min-h-screen pt-[0px] pb-[0px] md:pt-[0px] md:pb-[0px] xl:pt-[0px] 2xl:pt-[0px] xl:pb-[0px] 2xl:pb-[0px] select-none">
      <div className='w-full h-screen mx-auto items-start flex-col text-center'>
        <div className='pt-[11rem] sm:pt-[9rem] lg:pt-10rem] 2xl:pt-[12rem] md:pt-[9rem]'>
          <h1 className='text-darkGreen text-8xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-[155px] font-bold text-left ml-[40px] md:text-left md:ml-[73px] lg:ml-[80px] xl:ml-[130px] 2xl:ml-[150px]'>
            IPEN
          </h1>

          <p className='text-gray text-base text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:md:text-3xl text-left ml-[45px] md:text-left md:ml-[80px] lg:ml-[80px] xl:ml-[130px] 2xl:ml-[158px]'>
            Instituto de Pediatria e Neurologia Infantil
          </p>
        </div>
        <div className='pt-[3rem] sm:pt-[3rem] lg:pt-[4rem] 2xl:pt-[4rem] md:pt-[3rem]'>
          <p className='text-white text-4xl text-left sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-4xl mr-[25px] ml-[45px] md:text-left md:ml-[80px] lg:ml-[80px] xl:ml-[130px] 2xl:ml-[158px]' style={{ lineHeight: "1.2" }}>
            Clínica Médica <br />
            Especializada em Pediatria <br />
            e Neurologia Infantil
          </p>
        </div>
        <div className='pt-[4rem] sm:pt-[3rem] lg:pt-[5rem] 2xl:pt-[5rem] md:pt-[3rem]'>
          <div className='gap-12 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row ml-[45px] mr-[40px] md:mr-[80px] 2xl:mr-[80px] lg:ml-[80px] lg:mr-[130px] md:ml-[80px] xl:ml-[130px] 2xl:ml-[158px]'>
            <button className='text-white bg-darkGreen rounded-full hover:bg-lightGreen2 text-xl py-3 px-12 sm:py-4 sm:px-12 sm:text-3xl md:text-2xl md:py-4 md:px-12 lg:text3xl lg:py-4 lg:px-12 xl:text-3xl xl:py-4 xl:px-12 2xl:text-3xl 2xl:py-6 2xl:px-14'>
              Agendar Consulta
            </button>
            <button className='bg-white text-darkGreen rounded-full hover:bg-lightGray text-xl py-3 px-12 sm:py-4 sm:px-12 sm:text-3xl md:text-2xl md:py-4 md:px-12 lg:text3xl lg:py-4 lg:px-12 xl:text-3xl xl:py-4 xl:px-12 2xl:text-3xl 2xl:py-6 2xl:px-14'>
              Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
