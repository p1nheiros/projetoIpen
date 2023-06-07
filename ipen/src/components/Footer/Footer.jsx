import React from "react";
import Map from "./Map";
import Copyright from "./Copyright";
import Logo from "./Logo";
import Contato from "./Contato";
import Endereço from "./Endereço";

function Footer() {
  return (
    <>
      <div className="relative overflow-x-hidden mb-[200px] md:mb-0">
        <div className="flex justify-center text-center md:text-left items-center w-screen bg-darkGreen pt-[78px] pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo */}
            <Logo />
            {/* Endereço */}
            <Endereço />
            {/* Contato */}
            <Contato />
            {/* Mapa */}
            <Map />
            {/* Fim Divs */}
          </div>
        </div>
        {/* copyright */}
          <Copyright />
      </div>
    </>
  );
}

export default Footer;
