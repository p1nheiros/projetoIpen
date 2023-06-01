import React from 'react'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer/Footer'
import Galeria from './components/Galeria/Galeria'

import './styles/global.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Galeria />
      <Footer/>
    </div>
  )
}

export default App
