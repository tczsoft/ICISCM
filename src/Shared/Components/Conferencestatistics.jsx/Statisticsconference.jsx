import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { FaBookOpen, FaFilePdf } from "react-icons/fa";
import { RiNewspaperFill } from "react-icons/ri";
function Statisticsconference() {

    const location = [
        { location: "Indonesia" },
        { location: "India" },
        { location: "United States" },
        { location: "Malaysia" },
        { location: "Canada" },
        { location: "Japan" },
        { location: "Saudi Arabia" },
        { location: "Egypt" },
        { location: "Italy" },
        { location: "South Africa" },
        { location: "Spain" },
        { location: "South Korea" },
        { location: "Singapore" },
        { location: "Australia" },
        { location: "Germany" },
        { location: "United Kingdom" },

    ]


    return (
        <div>
            <div className="max-w-[90rem] mx-auto  md:px-5 px-3 ">
                <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center pt-10 pb-5"> Conference Statistics</h2>
                <p className="md:text-base text-sm text-justify leading-[30px]">
                    The International Conference on Intelligent Systems and Computational Methods received an outstanding global response, reflecting the conference’s growing reputation in the domains of intelligent systems and scientific computation.                </p>
                <div className="mt-5">
                    <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center mb-5 ">Submission Overview</h2>
                    <div className="flex flex-col justify-center items-center">
                        <div className="space-y-5  ">
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Total Full Paper Submissions: 269</p></div>
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Accepted Papers: 47</p></div>
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Acceptance Rate: 17.5%</p></div>
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Countries Represented: 16</p></div>
                        </div>
                    </div>
                    <p className="md:text-base text-sm text-justify leading-[30px] mt-5">
                        All submitted papers underwent a rigorous peer-review process to ensure the highest standards of originality, relevance, and scientific merit. The accepted papers represent leading-edge research across multiple disciplines in engineering and computational science.
                    </p>
                </div>
                <div className="mt-5">
                    <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center mb-5 ">Global Reach</h2>
                    <p className="text-black text-center md:text-lg text-base font-semibold leading-[30px]">We proudly hosted contributions from a diverse set of countries and institutions, including :</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 max-w-[800px] mx-auto">
                        {location.map((item, index) => (<div key={index} className="flex gap-2"> <IoLocationSharp className=' text-[#269C53] text-xl flex shrink-0 md:mt-0.5' /> <p className="text-gray-700 md:text-base text-sm">{item.location}</p></div>))}
                    </div>

                    <p className="md:text-base text-sm text-justify leading-[30px] mt-5">
                        This global representation highlights the truly international nature of ICISCM and its role as a platform for cutting-edge research disseminations.
                    </p>
                </div>
            </div>
            <section className="py-10 px-5  bg-white text-gray-800 max-w-[1400px] mx-auto">
                <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                    Best Paper Award – 2025
                </h2>

                <div className="grid md:grid-cols-2 gap-5 items-center bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100 mt-10">
                    <div className="flex justify-center max-w-[350px] mx-auto">
                        <img
                            src="/assets/Images/Sri_Harsha_Grandhi_Photo.jpeg"
                            alt="Author"
                            className="rounded-md   object-cover shadow-lg"
                        />
                    </div>

                    <div className=''>
                        <p className="md:text-lg text-base mb-2">
                            We are proud to announce that the{" "}
                            <span className="font-semibold text-[#269C53]">Best Paper Award</span> of{" "}
                            <span className="font-semibold">ICISCM-2025</span> was presented to:
                        </p>

                        <div className="mb-4 space-y-4">
                            <p className="font-semibold text-[#025DFB] text-sm">Paper ID: ICISCM’25-253</p>
                            <h3 className="md:text-xl text-lg font-bold text-[#1B1F3B] mt-1">
                                “DESIGNING INTERPRETABLE DEEP LEARNING MODELS FOR CLINICAL DECISION SUPPORT SYSTEMS”
                            </h3>
                            <p className="mt-2 text-base">
                                Authored by{" "}
                                <span className="font-bold text-[#269C53] ">
                                    Dr. Sri Harsha Grandhi 
                                </span>
                                , Intel, Folsom, California, USA
                            </p>
                        </div>

                        <div className="mt-4 ">
                            <a
                                href="/assets/Images/2.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/assets/Images/2.jpg"
                                    alt="Certificate"
                                    className="w-40  rounded shadow-md hover:scale-105 transition-transform duration-300"
                                />
                                <p className="text-sm text-blue-600 mt-3 underline">
                                    📄 Click the image to view the certificate.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>


            </section>
            <p className=" md:text-base text-sm text-justify leading-[30px] max-w-[90rem] mx-auto pb-10">
                This paper was recognized for its innovative approach to advancing intelligent transport systems
                by integrating real-time sensor data and deep learning. The framework demonstrates significant
                potential for enhancing traffic efficiency and urban mobility.
            </p>

            <section className=" px-5  bg-white text-gray-800 max-w-[90rem] mx-auto">
                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaBookOpen className="text-2xl text-[#269C53]" />
                    <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                        Published Papers
                    </h2>
                </div>

                {/* Description */}
                <p className="md:text-base text-sm text-justify leading-[30px]">
                    ICISCM-2025 proudly features a collection of high-quality, peer-reviewed research papers presented by scholars and professionals from around the world. Each paper has undergone a rigorous review process and reflects the latest advancements in intelligent systems and computational technologies.
                </p>
                <p className=" mt-2 md:text-base text-sm text-justify leading-[30px]">
                    The published papers cover a wide range of topics, including artificial intelligence, machine learning, data analytics, optimization methods, smart computing applications, and more. These contributions demonstrate both academic depth and real-world relevance, supporting the conference’s mission to foster innovation and knowledge exchange.
                </p>
                <p className=" mb-4 mt-2  md:text-base text-sm text-justify leading-[30px]">
                    All accepted papers are made available in the official conference proceedings with digital access, ensuring visibility and citation across the global research community.
                </p>

                <div className="flex justify-center items-center">
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                        <li>Smart Transportation Systems</li>
                        <li>IoT for Healthcare and Automation</li>
                        <li>AI and Machine Learning in Engineering</li>
                        <li>Renewable Energy Systems</li>
                        <li>Advanced Concrete and Construction Materials</li>
                        <li>Cybersecurity in Digital Platforms</li>
                        <li>Sustainable Agricultural Practices</li>
                        <li>Data Analytics and Machine Learning</li>
                        <li>Environmental Sustainability</li>
                    </ul>
                </div>
                <p className="md:text-base text-sm text-justify leading-[30px] mb-8 ">
                    We sincerely thank all the contributors and participants for making <span className="font-semibold">ICISCM-2025</span> a grand success.
                </p>

                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaBookOpen className="text-2xl text-[#269C53]" />
                    <h3 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                        ICISCM-2025 Conference Proceedings
                    </h3>
                </div>

                <p className=" mb-3 mx-auto md:text-base text-sm text-justify leading-[30px]">
                    ICISCM-2025 Conference Proceedings will feature high-quality, peer-reviewed research papers presented at the conference. The proceedings will be made available digitally, ensuring global accessibility and academic recognition. Each paper will reflect innovative contributions to intelligent systems and computational methods.
                </p>

                <a
                    href="/assets/Conference-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  justify-center gap-2 text-[#025DFB] font-semibold underline hover:text-[#1B1F3B] transition "
                >
                    <FaFilePdf />
                    View Complete Conference Proceedings
                </a>
            </section>

        </div>
    )
}

export default Statisticsconference