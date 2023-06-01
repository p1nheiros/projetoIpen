import React from 'react'

function Footer() {
  return (
    <>
    <div className="relative overflow-x-hidden">
      <div className="flex justify-center items-center w-screen bg-darkGreen min-h-screen">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <h1 className="w-full text-3xl font-bold text-lightGreen absolute left-48">
              LOGO
            </h1>
          </div>
          <div className="bg-gray-200 p-4">
            item 2
          </div>
          <div className="absolute mt-[100px] left-48">
          <ul>
                <li>Contato</li>
                <li>Whatsapp | (11) 99817-5795</li>
                <li>Telefone Fixo | (11) 4221-1806</li>
                <li>Email | atendimento@ipensaude.com.br</li>
                <li>
                    <a href="#">Icone 1</a>
                    <a href="#">Icone 2</a>
                    <a href="#">Icone 3</a>
                </li>
            </ul> 
          </div>
          <div className="bg-gray-200 p-4">Item 4</div>
        </div>
      </div>
      <p className="absolute bottom-0 w-screen mb-10 text-white text-center">
        © 2023 IPEN - Instituto de Pediatria e Neurologia Infantil
      </p>
    </div>
    </>
    )
}

export default Footer;