import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Style from '../styles/global.css'

export const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-screen mx-auto px-10 text-white fixed top-0 left-0 right-0 bg-darkGreen font-poppins'>
      <h1 className='w-full text-3xl font-bold text-lightGreen'>
        LOGO
      </h1>
      <ul className='hidden md:flex text-xl'>
        <li className='p-5 cursor-pointer'>Início</li>
        <li className='p-5 cursor-pointer'>Clínica</li>
        <li className='p-5 cursor-pointer'>Serviços</li>
        <li className='p-5 cursor-pointer'>Médicos</li>
        <li className='p-5 cursor-pointer'>Galeria</li>
        <li className='p-5 cursor-pointer'>Contato</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-[13.5px] w-[60%] boder-r border-r-gray bg-darkGreen ease-in-out' : 'fixed left-[100%]'}>
        <h1 className='w-full text-3xl font-bold text-lightGreen m-4'>
          LOGO
        </h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray'>Início</li>
          <li className='p-4 border-b border-gray'>Clínica</li>
          <li className='p-4 border-b border-gray'>Serviços</li>
          <li className='p-4 border-b border-gray'>Médicos</li>
          <li className='p-4 border-b border-gray'>Galeria</li>
          <li className='p-4 border-b border-gray'>Contato</li>
        </ul>
      </div>
    </div>
  )
}
