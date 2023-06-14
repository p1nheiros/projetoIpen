import React from 'react'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Galeria from './components/Galeria/Galeria'
  import About from './components/About/About'

import './styles/global.css'
import { Medicos } from './components/Medicos/Medicos'

function App() {
  return (
    <div className='font-poppins'>
      <Navbar/>
      <Home/>
      <About />
      <Medicos />
      <Galeria />
      <Footer/>
    </div>
  )
}

export default App
