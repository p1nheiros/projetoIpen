import React from 'react';

const Map = () => {
  return (
    <div className="md:w-[400px] w-full mb-[50px] ml-0 md:ml-[80px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.731283299215!2d-46.575462824793334!3d-23.613968278763615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ced3e25587d%3A0x98345d4cf3e37d9a!2sR.%20Manoel%20Coelho%2C%20500%20-%20sala%201310%20-%20Centro%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009510-101!5e0!3m2!1spt-BR!2sbr!4v1685647950048!5m2!1spt-BR!2sbr"
        className="w-full h-48 md:h-[200px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      />
    </div>
  );
};

export default Map;
