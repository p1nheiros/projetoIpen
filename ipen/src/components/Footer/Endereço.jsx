import React from 'react'

const Endereço = () => {
  return (
    <div className="">
    <ul className="font-medium text-2xl text-white leading-loose mb-[50px] md:mb-[20px] ml-0 md:ml-[80px]">
      <li className="font-medium text-3xl text-white leading-loose select-none">Endereço</li>
      <li className="text-lg font-normal">
        <p>Rua Manoel Coelho, 500 - Sala 1310</p>
        <p style={{ paddingTop: '0.2rem' }}>Centro - São Caetano do Sul</p>
        <p style={{ paddingTop: '0.2rem' }}>CEP: 09510-101</p>
      </li>
      <li className="text-lg" style={{ paddingTop: '0.2rem' }}>Edifício Elvira</li>
    </ul>
  </div>
  )
}

export default Endereço