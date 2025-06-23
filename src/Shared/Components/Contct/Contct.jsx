import React from 'react'

function Contct() {
    return (
        <>
            <section className="w-full bg-red-100 bg-[url('/assets/Images/footer.jpg')] md:py-20 py-10   bg-cover  flex justify-center items-center">
                <div className=" max-w-[100rem]  mx-auto md:px-10 px-5 ">
                    <section className=" flex flex-col gap-10 ">
                        {/* Corner Cut Shape */}
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1    xl:gap-40 lg:gap-20 gap-10 items-center text-white '>
                            <div className="bg-[#269C53] md:p-10 p-5 w-full h-full transform -skew-x-12 rounded-xl relative ">
                                <div className="transform skew-x-12 flex flex-col gap-5">
                                    <i className="fi fi-sr-marker items-center xl:text-5xl  md:text-3xl  flex justify-end"></i>
                                    <p className="xl:text-2xl">International Convention Center, Chennai, India</p>
                                </div>
                            </div>
                            <div className="bg-[#269C53] md:p-10 p-5 w-full h-full transform -skew-x-12 rounded-xl">
                                <div className="transform skew-x-12 flex flex-col gap-5">
                                    <i className="fi fi-rr-calendar items-center xl:text-5xl md:text-3xl flex justify-end"></i>
                                    <p className="xl:text-2xl">September 26-27, 2025 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            <div className="bg-[#269C53] md:p-10 p-5 w-full h-full transform -skew-x-12 rounded-xl ">
                                <div className="transform skew-x-12 flex flex-col gap-5">
                                    <i className="fi fi-sr-envelope items-center xl:text-5xl md:text-3xl  flex justify-end"></i>
                                    <p className="xl:text-2xl">xxx@icacsit.com +91 1234567890</p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Contct
