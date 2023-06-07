import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-screen mx-auto px-14 text-white fixed top-0 left-0 right-0 bg-darkGreen font-poppins select-none'>
      <h1 className='w-full text-3xl font-bold text-lightGreen'>LOGO</h1>
      <ul className='hidden md:flex text-xl'>
        <li className='p-5 cursor-pointer hover:text-lightGray'>Início</li>
        <li className='p-5 cursor-pointer hover:text-lightGray'>Clínica</li>
        <li className='p-5 cursor-pointer hover:text-lightGray'>Serviços</li>
        <li className='p-5 cursor-pointer hover:text-lightGray'>Médicos</li>
        <li className='p-5 cursor-pointer hover:text-lightGray'>Galeria</li>
        <li className='p-5 cursor-pointer hover:text-lightGray'>Contato</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray bg-darkGreen ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] select-none'}>
        <h1 className='w-full text-3xl font-bold text-lightGreen m-4'>LOGO</h1>
        <li className='p-4 border-b border-gray'>Clínica</li>
        <li className='p-4 border-b border-gray'>Serviços</li>
        <li className='p-4 border-b border-gray'>Médicos</li>
        <li className='p-4 border-b border-gray'>Galeria</li>
        <li className='p-4'>Contato</li>
      </ul>
    </div>
  )
}