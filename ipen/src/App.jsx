import React from 'react'
import { Home2 } from './components/Home/Home2'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Galeria from './components/Galeria/Galeria'
import Clinica from './components/Clinica/Clinica'
import { Serviços } from './components/Serviços'
import { Medicos } from './components/Medicos/Medicos'

import './styles/global.css'

function App() {
  return (
    <div className='font-poppins'>
      <Navbar/>
      <Home2/>
      <Clinica />
      <Serviços />
      <Medicos />
      <Galeria />
      <Footer/>
    </div>
  )
}

export default App
