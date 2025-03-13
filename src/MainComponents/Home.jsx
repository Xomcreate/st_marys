import React from 'react';

function Home() {
  return (
    <div className="bg-blue-800 h-[70vh] w-full grid grid-rows-3 px-4 md:px-10">
      {/* Welcome Text Section */}
      <div className="row-span-2 text-white flex flex-col items-center justify-end font-semibold text-[30px] sm:text-[40px] md:text-[50px] text-center">
        Welcome to St. Mary's Catholic Church
        <p className="text-[14px] sm:text-[18px] md:text-[20px]">
          A place of worship, community, and faith
        </p>
      </div>

      {/* Button Section */}
      <div className="row-span-1 flex justify-center items-start mt-[20px]">
        <a 
          href="https://www.youtube.com/@stmaryscatholicchurchiba" 
          className="bg-white h-[6vh] w-[50vw] sm:w-[30vw] md:w-[15vw] flex items-center justify-center rounded-[30px] text-black text-[14px] font-semibold text-center hover:bg-gray-200 transition duration-300"
        >
          Join Us For Mass
        </a>
      </div>
    </div>
  );
}

export default Home;