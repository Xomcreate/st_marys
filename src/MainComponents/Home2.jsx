import React from 'react';
import priestImage from '../assets/priest.jpeg';


function Home2() {
  return (
    <>
     
     

      <div className="bg-blue-50 min-h-screen w-full flex flex-col items-center p-4">
        
        {/* About Us Section */}
        <div id="about" className="text-black text-2xl sm:text-3xl font-semibold font-serif text-center my-4">
          About Us
        </div>
        <div className="text-center text-[15px] sm:text-xl text-black font-medium px-4 sm:px-16">
          We welcome you all to our dearest parish, St. Mary's Parish Iba New Site, <br />
          particularly those worshipping with us for the first time either as new parishioners or visitors. <br />
          You are welcome.
        </div>

        {/* Vision Statement Section */}
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[black] font-serif">
            Vision Statement
          </h2>
          <p className="text-black text-[15px] sm:text-xl text-center font-medium mt-3">
            We are committed to building a community of love and faith
          </p>
        </div>

        {/* Mission Statement Section */}
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[black] font-serif">
            Mission Statement
          </h2>
          <p className="text-black text-[15px] sm:text-xl text-center font-medium mt-3">
            To build up a community of love and hope through personal encounters with Jesus Christ in the Word of God and in the Holy Eucharist.
          </p>
        </div>

        {/* Parish Priest Section */}
        <div className="w-full flex flex-col items-center mt-8">
          <h2 className="text-center font-semibold font-serif text-black text-2xl sm:text-3xl">
            Our Parish Priest
          </h2>

          <div className="w-full max-w-lg rounded-lg shadow-lg p-4 mt-4">
            {/* Priest Image */}
            <div className="rounded-lg overflow-hidden flex justify-center">
              <img 
                src={priestImage}  
                alt="Priest" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Priest Info */}
            <div className="bg-white text-center font-bold text-lg sm:text-xl text-black py-3 mt-2 rounded-b-lg">
              Fr. Emmanuel Onyia
              <p className="text-md font-medium">Parish Priest, St. Mary's Catholic Church, Iba.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;