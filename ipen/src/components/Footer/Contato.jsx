import React from 'react'
import { AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'


const Contato = () => {

    const phoneNumber = "+5511998175795";
    const message = "Olá, estou entrando em contato com a Clínica IPEN. Gostaria de obter mais informações sobre os serviços oferecidos!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const email = "atendimento@ipensaude.com.br";
    const subject = "Informações sobre os serviços";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  
  return (
        <div className="">
              <ul className="font-medium text-3xl text-white leading-loose mr-0 md:mr-[200px] mb-[50px] md:mb-0">
                <li className='select-none'>Contato</li>
                <li className="text-lg font-normal">
                  Whatsapp | (11) 99817-5795
                </li>
                <li className="text-lg font-normal" style={{ paddingTop: '0.5rem' }}>
                  Telefone Fixo | (11) 4221-1806
                </li>
                <li className="text-lg font-normal" style={{ paddingTop: '0.5rem' }}>
                  Email | atendimento@ipensaude.com.br
                </li>
                <li className='flex mt-[20px] justify-center md:justify-normal' style={{ paddingTop: '0.1rem' }}>
                  <a className='mr-[20px] hover:text-lightGray' href="https://www.instagram.com/ipensaude/" target='_blank' rel='noopener noreferrer'><AiOutlineInstagram size={35} /></a>
                  <a className='mr-[20px] hover:text-lightGray' href={mailtoLink} target='_blank' rel='noopener noreferrer'><AiOutlineMail size={35}  /></a>
                  <a className='mr-[20px] hover:text-lightGray' href={whatsappLink} target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size={35} /></a>
                </li>
              </ul>
            </div>
  )
}

export default Contato