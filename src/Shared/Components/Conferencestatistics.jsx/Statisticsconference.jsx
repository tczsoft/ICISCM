import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { FaBookOpen, FaFilePdf, FaGlobeAmericas } from "react-icons/fa";
import { RiNewspaperFill } from "react-icons/ri";
import { MdOutlineCancel } from 'react-icons/md';
import LastSection from '../Last/LastSection';

function Statisticsconference() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const regions = [

        {
            name: 'Europe',
            countries: ["Belgium", "Greece", "Ireland"]
        },
        {
            name: 'North America & Oceania',
            countries: ["Usa", "New zealand", "Bermuda"]
        },
        {
            name: 'Africa',
            countries: ["South africa", "Tanzania", "Zambia"]
        },
        {
            name: 'Asia',
            countries: ["Indonesia", "India", "Malaysia", "Philippines", "Singapore", "Vietnam", "Japan", "China", "Kuwait", "Oman"]
        },
    ];



    return (
        <div>
            <div className="max-w-[90rem] mx-auto  md:px-5 px-3 ">
                <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center pt-10 pb-5">Research Distinction Criteria</h2>
                <p className="md:text-base text-sm text-justify leading-[30px]">
                    At ICISCM-2025, all accepted papers were considered for the prestigious Best Paper Award, recognizing exceptional contributions in  intelligent systems and computational methods. The Technical Program Committee (TPC) conducted a thorough evaluation to identify submissions that demonstrated originality, scholarly rigor, and practical impact.</p>
                <div className='mt-4'>
                    <p className="font-semibold  text-lg  mb-3">Evaluation Criteria:</p>
                    <ul className='list-disc list-inside space-y-1 mb-4'>
                        <li className='md:text-base text-sm text-justify'>Innovative and original research ideas</li>
                        <li className='md:text-base text-sm text-justify'>Clear, well-structured, professional manuscript</li>
                        <li className='md:text-base text-sm text-justify'>Strong academic and practical contributions</li>
                        <li className='md:text-base text-sm text-justify'>Significant and impactful results</li>
                        <li className='md:text-base text-sm text-justify'>Engaging and effective presentation</li>
                        <li className='md:text-base text-sm text-justify'>Real-world relevance for industry</li>
                        <li className='md:text-base text-sm text-justify'>Full adherence to submission guidelines</li>
                        <li className='md:text-base text-sm text-justify'>Extra recognition for interactive delivery</li>
                    </ul>
                    <p className="md:text-base text-sm text-justify leading-[30px]">This award honors papers that exemplify innovation, academic excellence, and meaningful real-world contributions, highlighting the most outstanding research showcased at ICISCM-2025.</p>
                </div>
                <div className="mt-8">
                    <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center mb-5 ">Conference Statistics</h2>
                    <p className="md:text-base text-sm text-justify leading-[30px] mb-4">ICISCM-2025 witnessed remarkable global participation, underscoring its strong reputation as a premier platform for advancing research, innovation, and collaboration in intelligent systems and computational technologies.</p>
                    <p className="font-semibold  text-lg  mb-3">Submission Overview:</p>
                    <div className="flex flex-col justify-center items-center">
                        <div className="space-y-5  ">
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Total Paper Submissions: 225</p></div>
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Papers Selected for Presentation: 36</p></div>
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Acceptance Rate: 16%</p></div>
                            <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Participating Countries: 19</p></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center mb-3 ">Global Participation</h2>
                    <p className="text-black text-center md:text-lg text-base font-semibold leading-[30px] mb-6">ICISCM 2025 attracted a diverse international audience from:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regions.map((region, index) => (
                            <div
                                key={index}
                                className="border-2 border-gray-200 rounded-xl p-5 hover:border-[#269C53] transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <FaGlobeAmericas className="w-6 h-6 text-[#269C53]" />
                                    <h3 className="md:text-xl text-lg font-semibold text-gray-900">
                                        {region.name}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {region.countries.map((country, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-white border border-gray-300 text-gray-700 px-3 py-1   rounded-full text-sm hover:bg-[#269C53]/50 duration-300"
                                        >
                                            {country}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="md:text-base text-sm text-justify leading-[30px] mt-5 ">
                        This broad representation underscores the global reach and interdisciplinary nature of ICISCM, highlighting contributions from leading researchers and innovators across continents.
                    </p>
                </div>
            </div>


            <section className=" px-5  bg-white text-gray-800 max-w-[90rem] mx-auto mt-8">
                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaBookOpen className="text-2xl text-[#269C53]" />
                    <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                        Published Papers
                    </h2>
                </div>

                {/* Description */}
                <p className="md:text-base text-sm text-justify leading-[30px]">
                    The International Conference on Intelligent Systems and Computational Methods (ICISCM 2025) received 225 full paper submissions from researchers worldwide. Out of these, 36 high-quality papers were selected for presentation and publication, reflecting an acceptance rate of 16%.
                </p>
                <p className=" mb-4 mt-2  md:text-base text-sm text-justify leading-[30px]">
                    The selected papers span a diverse range of cutting-edge topics, including:
                </p>

                <div className="flex justify-center items-center">
                    <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 md:text-base text-sm text-justify">
                        <li>Artificial Intelligence & Deep Learning – novel neural network architectures, predictive modeling, and explainable AI applications.</li>
                        <li>IoT, Edge & Fog Computing – intelligent sensing, real-time analytics, and smart city solutions.</li>
                        <li>Big Data & Cloud Computing – scalable data pipelines, visualization techniques, and distributed resource management.</li>
                        <li>Cybersecurity & Blockchain – privacy-preserving systems, secure data sharing, and trust-enhanced digital frameworks.</li>
                        <li>Sustainable & Future-Ready Computing – energy-efficient algorithms, adaptive systems, and AI-driven sustainability solutions.</li>
                    </ul>
                </div>
                <p className="md:text-base text-sm text-justify leading-[30px] mb-8 ">
                    These papers highlight innovative research and practical implementations, showcasing the latest advancements in intelligent systems and computational methods on a global stage. We extend our warmest thanks to the global community of participants whose support turned ICISCM-2025 into an outstanding success.
                </p>

            </section>



            <section className="md:px-5 px-3  bg-white text-gray-800 max-w-[1400px] mx-auto">
                <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                    Best Paper Award - ICISCM 2025
                </h2>

                <div className="grid lg:grid-cols-2 gap-5 items-center bg-gray-50  py-5 px-4  rounded-xl shadow-md border border-gray-100 mt-10">
                    <div className="flex flex-col justify-center items-center  lg:order-1 order-2">
                        <div className="relative">
                            <div className='w-fit mx-auto bg-[#269C53]   p-2 rounded-xl'>
                                <img
                                    src="/assets/Images/certificate/2025.jpg"
                                    alt="Certificate"
                                    className="w-[340px] rounded-lg shadow-lg  transition-transform duration-300 cursor-pointer "
                                    onClick={openDialog}
                                />
                            </div>
                        </div>
                        <p
                            className="text-sm text-[#269C53] mt-5 underline cursor-pointer text-center animate-bounce "
                            onClick={openDialog}
                        >
                            View the certificate
                        </p>

                        {isDialogOpen && (
                            <div className="fixed inset-0 bg-gray-800/50 backdrop-blur-sm flex justify-center items-center z-50 animate-in fade-in duration-300 p-4">
                                <div className="relative py-5  p-4 max-w-3xl w-full bg-gray-100/30 rounded-lg shadow-xl border border-white/20 animate-in zoom-in duration-300">
                                    <button
                                        className="absolute -top-4 -right-4 bg-[#269C53] p-2 rounded-full shadow-lg text-gray-50 hover:text-gray-800 text-xl cursor-pointer"
                                        onClick={closeDialog}
                                    >
                                        <MdOutlineCancel className='text-2xl flex shrink-0' />
                                    </button>
                                    <img
                                        src="/assets/Images/certificate/2025.jpg"
                                        alt="Certificate"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='lg:order-2 order-1'>
                        <p className="md:text-lg text-base mb-8 text-justify">
                            For demonstrating a pioneering approach that accelerates drug candidate screening through the integration of deep learning and molecular simulations, we proudly present the Best Paper Award of ICISCM-2025 to:
                        </p>

                        <div className="  space-y-8">
                            <h3 className="md:text-xl text-lg font-bold text-[#1B1F3B] mt-1">
                                “DEEP LEARNING AND MOLECULAR DOCKING INTEGRATION FOR ACCELERATED DRUG CANDIDATE SCREENING”
                            </h3>
                            <p className=" text-base text-center">
                                Authored by{" "} <br />
                                <span className="font-bold text-[#269C53] text-xl">
                                    Deepa Bhadana
                                </span> <br />
                                Chaudhary Charan Singh University, Meerut, UP, India.
                            </p>
                        </div>
                    </div>
                </div>


            </section>
            <p className="mt-6 md:text-base text-sm text-justify leading-[30px] max-w-[90rem] mx-auto  md:px-5 px-3  pb-10">
                The outstanding research paper “DEEP LEARNING AND MOLECULAR DOCKING INTEGRATION FOR ACCELERATED DRUG CANDIDATE SCREENING” integrates deep learning techniques with molecular docking to speed up the identification of potential drug candidates. This approach uses AI models to predict interactions between molecules and target proteins efficiently. By combining computational intelligence with molecular simulations, it accelerates the drug discovery process. This method aims to reduce experimental costs and improve the success rate of finding effective therapeutics.
            </p>


            <LastSection />
        </div>
    )
}

export default Statisticsconference