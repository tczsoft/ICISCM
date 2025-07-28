import React from 'react';

function Invitees({ Name, Position, location }) {
    return (
        <section className="rounded-xl overflow-hidden   ">
            {/* Corner Cut Shape */}
            {/* <div className='grid grid-cols-2 items-center  '> */}
            {/* <img rel='preload' src="/assets/Images/home6.jpg" className='w-full h-full col-span-1 ' alt="" /> */}
            <div className="flex flex-col items-center gap-3 bg-[#269C53] hover:bg-[#34b865] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg rounded-xl p-6 w-full max-w-md mx-auto transform hover:scale-105">
                <div className="text-center">
                    <h3 className="text-xl md:text-xl font-semibold text-white transition-colors duration-300">
                        Dr. {Name}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-white transition-colors duration-300">
                    <p className="text-[15px] font-medium">
                       ( {Position}, {location} )
                    </p>
                </div>
            </div>

            {/* </div> */}
        </section>
    );
}

export default Invitees;