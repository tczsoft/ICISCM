import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { FaBookOpen, FaFilePdf } from "react-icons/fa";

function Statisticsconference() {

    const location = [
        { location: "India" },
        { location: "Nepal" },
        { location: "Italy" },
        { location: "Saudi Arabia" },
        { location: "Thailand" },
        { location: "Nigeria" },
        { location: "Sri Lanka" },
        { location: "Bangladesh" },
        { location: "Malaysia" },
        { location: "Egypt" },
        { location: "UAE" },
        { location: "Australia" },
        { location: "South Africa" },
        { location: "Brazil" },
        { location: "South Korea" },
        { location: "Japan" },
        { location: "China" },
        { location: "Canada" },
        { location: "UK" },
        { location: "USA" },
    ]


    return (
        <div>
            <div className="max-w-[90rem] mx-auto  md:px-5 px-3 ">
                <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center pt-10 pb-5"> Conference Statistics</h2>
                <p className="text-gray-700  text-justify md:text-base text-sm leading-[30px]">
                    ICISCM-2025 received an overwhelming global response, with 312 full paper submissions from 22 countries, reflecting the growing interest and significant contributions in the fields of intelligent systems and computational methods.After a rigorous peer-review process conducted by a panel of esteemed experts, 84 papers were accepted for publication and presentation, resulting in an acceptance ratio of 27% — highlighting the conference’s commitment to quality and academic excellence.
                </p>
                <div className="mt-5">
                    <p className="text-black text-center md:text-lg text-base font-semibold leading-[30px]">The conference saw active participation from institutions and researchers across the globe, including :</p>
                    <div className="grid grid-cols-4 gap-5 mt-5 max-w-[800px] mx-auto">
                        {location.map((item, index) => (<div key={index} className="flex gap-2"> <IoLocationSharp className='mt-1 text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">{item.location}</p></div>))}
                    </div>
                </div>
                <p className="text-gray-700  text-justify md:text-base text-sm leading-[30px] mt-10">
                    Each selected paper exemplifies the innovation, technical rigor, and interdisciplinary relevance that ICISCM strives to foster. This impressive turnout underscores ICISCM’s status as a global platform for advancing research in intelligent computing and future technologies.
                </p>
            </div>
            <section className="py-10 px-5  bg-white text-gray-800 max-w-[90rem] mx-auto">
                <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                    Best Paper Award – 2025
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100 mt-10">
                    <div className="flex justify-center">
                        <img
                            src="/assets/Images/home6.jpg"
                            alt="Author"
                            className="rounded-md w-64 h-auto object-cover shadow-lg"
                        />
                    </div>

                    <div className=''>
                        <p className="text-lg mb-2">
                            We are proud to announce that the{" "}
                            <span className="font-semibold text-[#269C53]">Best Paper Award</span> of{" "}
                            <span className="font-semibold">ICISCM-2025</span> was presented to:
                        </p>

                        <div className="mb-4 space-y-4">
                            <p className="font-semibold text-[#025DFB] text-sm">Paper ID: IC25-182</p>
                            <h3 className="text-xl font-bold text-[#1B1F3B] mt-1">
                                “AI-POWERED MULTI-MODAL FRAMEWORK FOR REAL-TIME TRAFFIC PATTERN PREDICTION”
                            </h3>
                            <p className="mt-2">
                                Authored by{" "}
                                <span className="font-bold text-[#269C53]">
                                    Dr. John K. Mathews
                                </span>
                                , Department of Computer Science, Georgia Tech, Atlanta, GA, USA
                            </p>
                        </div>

                        <div className="mt-4">
                            <a
                                href="/images/certificate.png"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/certificate.png"
                                    alt="Certificate"
                                    className="w-40 border rounded shadow-md hover:scale-105 transition-transform duration-300"
                                />
                                <p className="text-sm text-blue-600 mt-3 underline">
                                    📄 Click the image to view the certificate.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-justify text-gray-700">
                    This paper was recognized for its innovative approach to advancing intelligent transport systems
                    by integrating real-time sensor data and deep learning. The framework demonstrates significant
                    potential for enhancing traffic efficiency and urban mobility.
                </p>
            </section>


            <section className=" px-5  bg-white text-gray-800 max-w-[90rem] mx-auto">
                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaBookOpen className="text-2xl text-[#269C53]" />
                    <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                        Published Papers
                    </h2>
                </div>

                {/* Description */}
                <p className="text-md  leading-[30px] text-justify">
                    ICISCM-2025 proudly features a collection of high-quality, peer-reviewed research papers presented by scholars and professionals from around the world. Each paper has undergone a rigorous review process and reflects the latest advancements in intelligent systems and computational technologies.
                </p>
                <p className="text-md mt-2 leading-[30px] text-justify">
                    The published papers cover a wide range of topics, including artificial intelligence, machine learning, data analytics, optimization methods, smart computing applications, and more. These contributions demonstrate both academic depth and real-world relevance, supporting the conference’s mission to foster innovation and knowledge exchange.
                </p>
                  <p className="text-md mb-4 mt-2  leading-[30px] text-justify">
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
                <p className="text-md mb-8 ">
                    We sincerely thank all the contributors and participants for making <span className="font-semibold">ICISCM-2025</span> a grand success.
                </p>

                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaBookOpen className="text-2xl text-[#269C53]" />
                    <h3 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                        ICISCM-2025 Conference Proceedings
                    </h3>
                </div>

                <p className="text-md mb-3 mx-auto leading-[30px] text-justify">
                    ICISCM-2025 Conference Proceedings will feature high-quality, peer-reviewed research papers presented at the conference. The proceedings will be made available digitally, ensuring global accessibility and academic recognition. Each paper will reflect innovative contributions to intelligent systems and computational methods.
                </p>

                <a
                    href="/proceedings.pdf" // Replace with actual link
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