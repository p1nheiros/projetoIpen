import React from 'react'
import { AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'


const Contato = () => {

    const phoneNumber = "+5511998175795";
    const message = "Olá, estou entrando em contato com a Clínica IPEN. Gostaria de obter mais informações sobre os serviços oferecidos. Aguardo retorno. Obrigado!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const email = "atendimento@ipensaude.com.br";
    const subject = "Informações sobre os serviços";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  
  return (
        <div className="">
              <ul className="font-medium text-3xl text-white leading-loose mr-0 md:mr-[200px] mb-[50px] md:mb-0">
                <li>Contato</li>
                <li className="text-lg font-normal">
                  Whatsapp | (11) 99817-5795
                </li>
                <li className="text-lg font-normal">
                  Telefone Fixo | (11) 4221-1806
                </li>
                <li className="text-lg font-normal">
                  Email | atendimento@ipensaude.com.br
                </li>
                <li className='flex mt-[20px] justify-center md:justify-normal	'>
                  <a className='mr-[20px]' href="https://www.instagram.com/ipensaude" target='_blank' rel='noopener noreferrer'><AiOutlineInstagram size={30} /></a>
                  <a className='mr-[20px]' href={mailtoLink} target='_blank' rel='noopener noreferrer'><AiOutlineMail size={30}  /></a>
                  <a className='mr-[20px]' href={whatsappLink} target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size={30} /></a>
                </li>
              </ul>
            </div>
  )
}

export default Contato