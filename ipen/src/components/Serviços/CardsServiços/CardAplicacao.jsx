import React from 'react'
import { BsFillHeartPulseFill } from "react-icons/bs";

export const CardAplicacao = () => {
    return (
        <>
            <a class="rounded-3xl inline-block overflow-hidden shadow-xl max-w-xs select-none transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
                <div class="relative group w-100 overflow-hidden bg-darkGreen h-24 rounded-t-3xl">
                    <div
                        class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                    />
                    <div class="absolute w-full h-full flex items-end justify-center -inset-y-7">
                        <BsFillHeartPulseFill className='mr-3 text-white' size={40} />
                        <h1 class="font-bold text-3xl text-white mb-1">
                            Aplicação
                        </h1>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="text-center px-3 pb-6 pt-2">
                        <p class="mt-4 font-light">
                            A clínica realiza aplicação de toxina botulínica com médicos especialistas,  reduz espasmos, rigidez, dor muscular e melhora da função motora e a qualidade de vida. Procedimento seguro e cuidadoso, com acompanhamento após.
                        </p>
                    </div>
                    <div class="flex justify-center pb-3 text-slate-700">
                        <div class="text-center mr-3 pr-3 last:border-r-0 ">
                            <button className='bg-darkGreen text-white rounded-full hover:bg-lightGreen2 text-xl py-2 px-11 ml-6 md:text-xl md:py-3 md:px-8 md:ml-8'>
                                Agendar Consulta
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

