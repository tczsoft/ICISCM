import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import { FaFilePdf } from 'react-icons/fa'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem] py-5 md:py-10  mx-auto md:px-5 px-3">
                <h1 className=" mx-auto font-semibold lg:text-2xl text-lg  text-[#269C52]">
                    Conference Tracks
                </h1>

                <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Advanced AI & Machine Learning",
                            desc: "This track explores intelligent data analytics, predictive modeling, and neural computation. It covers supervised, unsupervised, and reinforcement learning, emphasizing ethical, robust, and privacy-preserving AI systems for real-world applications."
                        },
                        {
                            title: "Intelligent IoT, Edge & Fog Solutions",
                            desc: "Focuses on IoT-driven smart applications, edge and fog computing for low-latency systems, and serverless architectures. It also highlights intelligent solutions for smart cities and urban management."
                        },
                        {
                            title: "Big Data & Cloud-Scale Computing",
                            desc: "Covers scalable and resilient data infrastructures, big data pipelines, cloud-based storage, and visualization techniques. It emphasizes computational intelligence and efficient resource management in distributed environments."
                        },
                        {
                            title: "Blockchain & Trusted Computing",
                            desc: "Explores blockchain-enabled secure systems, decentralized architectures, and computational trust models. This track also addresses cybersecurity, compliance, and accountability in intelligent applications."
                        },
                        {
                            title: "Sustainable & Future-Ready Computing",
                            desc: "Focuses on energy-efficient algorithms, green infrastructures, and AI-driven sustainability solutions. It highlights adaptive, autonomous systems and approaches for climate, governance, and long-term global impact."
                        },
                    ].map((track, index) => (
                        <>
                            <div key={index} className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm md:p-6 p-4 hover:border-[#269C52] hover:shadow-lg transition duration-300"  >
                                <div className="flex-1">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-[#269C52] text-[#269C52] rounded-full p-1.5">
                                        </div>
                                        <h3 className="text-gray-800 font-bold md:text-lg text-base group-hover:text-[#269C52] transition-colors">
                                            {track.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base mt-2 text-justify leading-[30px]">
                                        {track.desc}
                                    </p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                {/* <div className="py-10">
                <a
                    href="/proceedings.pdf" // Replace with actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  justify-center gap-2 text-[#025DFB] font-semibold underline hover:text-[#1B1F3B] transition "
                >
                    <FaFilePdf />
                    View Complete Conference Proceedings
                </a></div> */}
                {/* <section className="max-w-[90rem] mx-auto px-4  pt-5">
                    <h2 className=" mx-auto font-semibold lg:text-2xl text-lg  pb-5 text-[#269C52]  text-center">
                        Call for Reviewers
                    </h2>

                    <p className=" mb-4 leading-[30px] text-justify">
                        ICISCM-2025 invites dedicated researchers, academicians, and industry professionals to join as reviewers for this prestigious international conference. As a reviewer, you will contribute to maintaining the academic quality of the event by evaluating submissions in your area of expertise and providing constructive feedback to authors.
                    </p>

                    <p className=" mb-4 leading-[30px] text-justify">
                        Being part of the reviewer panel offers a valuable opportunity to stay updated with the latest research trends, expand your professional network, and receive formal recognition through a certificate of appreciation. Join us in shaping the future of intelligent systems and computational technologies.                    </p>

                    <h3 className="text-lg font-semibold text-[#269C53] mt-6 mb-2">
                        Reviewer Responsibilities:
                    </h3>

                    <ul className="list-disc list-inside space-y-2 text-justify leading-[30px]">
                        <li>Conduct fair, objective, and timely reviews of assigned research papers.</li>
                        <li>Evaluate submissions based on originality, technical quality, relevance, and clarity.</li>
                        <li>Provide constructive feedback to help authors improve the quality of their work.</li>
                        <li>Maintain confidentiality and avoid any conflicts of interest.</li>
                        <li>Adhere to the review deadlines set by the organizing committee.</li>
                        <li>Promote the conference within your academic and professional networks.</li>
                        <li>Uphold ethical standards and contribute to the integrity of the review process.</li>
                    </ul>

                    <p className="text-gray-700 mt-6">
                        If you are interested in serving as a reviewer, please apply using our online form
                        <a href="#" className="text-blue-600 hover:underline ml-1">[click here]</a>.
                        You may also share this opportunity with peers having relevant expertise.
                    </p>

                    <p className=" mt-4">
                        Thank you for considering this opportunity. We look forward to your valuable contribution to the success of ICISCM-2025.
                    </p>

                    <div className="mt-6 font-semibold text-[#269C53]">
                        Best regards, <br />
                        <span className="text-[#269C53]">ICISCM-2025 Organizing Committee</span>
                    </div>
                </section> */}


            </section>

            <LastSection />

        </>
    )
}

export default PeerReview

