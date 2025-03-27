import React from 'react';
import mary2Image from '../assets/mary.jpeg'; 
import mary1Image from '../assets/mary2.jpeg'; 

function Marygallery() {
  return (
    <div className="bg-[white] min-h-[70vh] md:h-[70vh] px-4 py-6 flex flex-col justify-center items-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[20px] mb-6 text-center">
        Our Blessed Mother Mary
      </h2>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-2xl w-full md:space-x-10">
        <div className="bg-amber-800 rounded-xl overflow-hidden w-[250px] h-[250px] md:w-[350px] md:h-[350px] mx-auto">
          <img 
            src={mary2Image}  
            alt="Our Blessed Mother Mary" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="bg-amber-500 rounded-xl overflow-hidden w-[250px] h-[250px] md:w-[350px] md:h-[350px] mx-auto">
          <img 
            src={mary1Image}  
            alt="Our Blessed Mother Mary" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Marygallery;