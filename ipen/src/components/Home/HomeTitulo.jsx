import React from 'react'

const HomeTitulo = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center'>
                <div className=' left-[5%] md:left-[10%] max-w-[1100px] m-auto absolute p-4 md:p-4'>
                    <h1 className='text-darkGreen font-bold text-8xl md:text-9xl'>
                        IPEN
                    </h1>
                    <p className='text-gray text-2xl md:text-3xl'>
                        Instituto de Pediatria e Neurologia Infantil
                    </p>
                    <h3 className='text-white text-4xl md:text-[55px] md:leading-none max-w-[1000px] py-9 pb-12'>
                        Clínica Médica <br />
                        Especializada em Pediatria <br />
                        e Neurologia Infantil
                    </h3>
                    <div className='flex flex-col md:flex-row'>
                        <div>
                            <button className='text-white bg-darkGreen rounded-full hover:bg-lightGreen2 text-2xl py-3 px-14 md:text-3xl md:py-4 md:px-12'>
                                Agendar Consulta
                            </button>
                        </div>
                        <div className='pt-6 md:pt-0'>
                            <button className='bg-white text-darkGreen rounded-full hover:bg-lightGray text-2xl py-3 px-14 md:text-3xl md:py-4 md:px-12 md:ml-8'>
                                Mais Informações
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default HomeTitulo;
