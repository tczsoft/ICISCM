import React from 'react'
import { Link } from 'react-router-dom'
import { GiMicrophone } from "react-icons/gi";

function LastSection() {
    return (
        <>
            <section className="w-full bg-red-100 bg-[url('/assets/Images/footer.jpg')] md:py-20 py-10 bg-cover flex justify-center items-center">
                <div className=" max-w-[100rem]  mx-auto md:px-10 px-5 ">
                    <section className=" flex flex-col gap-10 ">
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-40 lg:gap-20 gap-10 items-center text-white '>
                            <div className="bg-[#269C53] md:p-10 p-5 w-full h-full transform -skew-x-12 rounded-xl relative ">
                                <div className="transform skew-x-12 flex flex-col gap-5">
                                    <i className="fi fi-sr-marker items-center xl:text-5xl  md:text-3xl  flex justify-end"></i>
                                    <p className="xl:text-2xl text-center">
                                        {/* International Convention Center, */}
                                        Jakarta, Indonesia</p>
                                </div>
                            </div>
                            <div className="bg-[#269C53] md:p-10 p-5 w-full h-full transform -skew-x-12 rounded-xl">
                                <div className="transform skew-x-12 flex flex-col gap-5">
                                    <div className="items-center xl:text-5xl md:text-3xl flex justify-end"> < GiMicrophone className=" " /></div>
                                    <p className="xl:text-2xl text-center">International Conference on Intelligent Systems and Computational Methods</p>
                                </div>
                            </div>
                            <div className="bg-[#269C53] md:p-10 p-5 w-full h-full transform -skew-x-12 rounded-xl ">
                                <div className="transform skew-x-12 flex flex-col gap-5">
                                    <i className="fi fi-sr-envelope items-center xl:text-5xl md:text-3xl  flex justify-end"></i>
                                    <div>
                                        <p className="xl:text-2xl mb-1">info@iciscm.com</p>
                                        <p className="xl:text-2xl">info.iciscm@gmail.com </p>
                                    </div>

                                    {/* <br/> +91 1234567890 */}
                               
                            </div>
                        </div>
                </div>
                <div className='w-fit mx-auto'>
                    <Link to="/paper-submission">
                        <div className="bg-white p-4 w-fit text-[#56AE58] px-6 rounded-md mx-auto cursor-pointer font-bold hover:scale-105 duration-300 md:text-base text-sm">
                            Register Now
                        </div>
                    </Link>
                </div>
            </section>
        </div >
            </section >
        </>
    )
}

export default LastSection
