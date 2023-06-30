import React from 'react'
import { CardNeurologia } from './CardsServiços/CardNeurologia';
import { CardPediatria } from './CardsServiços/CardPediatria';
import { CardHibiatria } from './CardsServiços/CardHibiatria';
import { CardConsulta } from './CardsServiços/CardConsulta';
import { CardAvaliacao } from './CardsServiços/CardAvaliacao';
import { CardAplicacao } from './CardsServiços/CardAplicacao';
import TituloServicos from './Titulos/TituloServicos';
import TituloProcedimentos from './Titulos/TituloProcedimentos';

export const Serviços = () => {
    return (
        <>
            <div className='min-h-screen flex-col justify-center bg-white pt-[60px] pb-[40px]'>
                <div>
                    <TituloServicos />
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 ml-10 md:ml-0 md:flex md:justify-center'>
                        <CardNeurologia />
                        <CardPediatria />
                        <CardHibiatria />
                    </div>
                </div>
                <div className='pt-8'>
                    <TituloProcedimentos />
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 ml-10 md:ml-0 md:flex md:justify-center'>
                        <CardConsulta />
                        <CardAvaliacao />
                        <CardAplicacao />
                    </div>
                </div>
            </div>
        </>
    )
}
