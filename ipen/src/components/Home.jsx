import React from 'react'

export const Home = () => {
    return (
        <div className="text-black bg-[url('../img/imageBG2.png')] min-h-screen bg-cover bg-center bg-no-repeat">
            <div className='max-w-[75%] mt-[96px] w-full h-screen mx-auto'>
                <div style={{ paddingTop: '9rem' }}>
                    <h1 className='text-darkGreen text-8xl sm:text-6    xl md:text-8xl font-bold flex lg:text-9xl xl:text-9xl 2xl:text-9xl'>
                        IPEN
                    </h1>

                    <p className='text-gray text-base text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
                        Instituto de Pediatria e Neurologia Infantil
                    </p>
                </div>
                <div style={{ paddingTop: '3rem' }}>
                    <p className='text-white text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' style={{ lineHeight: "1.2" }}>
                        Clínica Médica <br />
                        Especializada em Pediatria <br />
                        e Neurologia Infantil
                    </p>
                </div>
                <div style={{ paddingTop: '4rem' }}>
                    <div className='gap-12 flex flex-col sm:flex-row'>
                        <button className='text-white bg-darkGreen rounded-full hover:bg-lightGreen py-2 sm:py-4 px-4 sm:px-12 text-xl sm:text-3xl'>
                            Agendar Consulta
                        </button>
                        <button className='bg-white text-darkGreen rounded-full hover:bg-gray py-2 sm:py-4 px-4 sm:px-12 text-xl sm:text-3xl'>
                            Mais Informações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
