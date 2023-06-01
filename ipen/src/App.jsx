import React from 'react'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'

import './styles/global.css'

function App() {
  return (
    <div className='font-poppins'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
