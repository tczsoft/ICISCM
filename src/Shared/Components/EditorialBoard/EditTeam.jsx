// import React from 'react'

// function EditTeam({ position, Name, location, dataAos }) {
//     return (
//         <>
//             <section className='border-2 rounded-xl  overflow-hidden '>
//                 <div className='p-2 bg-[#1B1F3B] text-white text-center  '>
//                     {position}
//                 </div>
//                 <div className='p-4 text-center'>
//                     <img data-aos={dataAos} src="/assets/Images/members.jpg" className='w-32 mx-auto' alt="" />
//                     <div className='flex flex-col space-y-2'>
//                         <p>{Name}</p>
//                         <p className="
//                     ">{location}</p>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default EditTeam

import React from 'react'

function EditTeam({ position, Name, location, dataAos, avatar,department }) {
    return (
        <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Position badge */}
            <div className="relative bg-[#269C53] text-white px-4 py-3 text-center font-semibold text-xl tracking-wide">
                {position}
            </div>

            {/* Card content */}
            <div className="relative p-6 text-center">
                {/* Avatar container with animated border */}
                {/* <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                    <div className="relative bg-white rounded-full p-1">
                        {avatar ? (
                            <img data-aos={dataAos} src={avatar} className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 group-hover:border-transparent transition-all duration-300" alt={`${Name}'s avatar`} onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(Name)}&background=1B1F3B&color=ffffff&size=80&bold=true`; }} />
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-[#56AE58] flex items-center justify-center text-white font-bold text-xl  border-gray-200 group-hover:border-transparent transition-all duration-300">
                                {Name?.charAt(0)?.toUpperCase() || 'U'}
                            </div>
                        )}
                    </div>
                </div> */}

                {/* Name and location */}
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#1B1F3B] transition-colors duration-300">
                        {Name}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
                        {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg> */}
                        {department}
                    </p>
                </div>

                {/* Optional contact/action buttons */}
                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex justify-center gap-2">
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-[#1B1F3B] hover:text-white transition-all duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-[#1B1F3B] hover:text-white transition-all duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default EditTeam
