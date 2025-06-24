import React from 'react';

function Invitees({ Name, Position, location }) {
    return (
        <section className="rounded-xl overflow-hidden   ">
            {/* Corner Cut Shape */}
            <div className='grid grid-cols-2 items-center  '>
                <img rel='preload' src="/assets/Images/home6.jpg" className='w-full h-full col-span-1 ' alt="" />
                <div className="flex flex-col items-center gap-5 z-10 mx-auto bg-[#269C53] justify-center col-span-1 w-full h-full    ">
                    <div className=" text-white font-semibold  text-sm md:text-base ">
                        {Name}
                    </div>
                    <div className="text-white md:text-lg text-sm font-medium">
                        {Position}
                    </div>
                    <div className="text-white md:text-lg text-sm font-medium">
                        {location}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invitees;