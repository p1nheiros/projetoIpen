import React from 'react'

export const Home = () => {
    return (
        <div className="text-black bg-[url('../img/imageBG2.png')] min-h-screen bg-cover bg-center bg-no-repeat">
            <div className='max-w-[75%] mt-[96px] w-full h-screen mx-auto'>
                <div style={{ paddingTop: '9rem' }}>
                    <h1 className='text-darkGreen text-8xl sm:text-6xl md:text-9xl font-bold flex'>
                        IPEN
                    </h1>

                    <p className='text-gray text-base sm:text-2xl md:text-3xl'>
                        Instituto de Pediatria e Neurologia Infantil
                    </p>
                </div>
                <div style={{ paddingTop: '3rem' }}>
                    <p className='text-white text-3xl sm:text-4xl md:text-6xl' style={{ lineHeight: "1.2" }}>
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
