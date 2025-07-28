import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import { FaFilePdf } from 'react-icons/fa'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem] py-5 md:py-10  mx-auto md:px-5 px-3">
                <div className="">
                    <h1 className=" mx-auto font-semibold lg:text-2xl text-lg pb-5 text-center text-[#269C52]">
                        Call for Papers
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base leading-[30px] text-justify">
                        We are delighted to invite researchers, academicians, industry professionals, innovators, and students from around the globe to submit original research contributions to the International Conference on Intelligent Systems and Computational Methods . This prestigious event serves as a vibrant platform to foster collaboration, spark innovative ideas, and showcase cutting-edge research that is shaping the future of intelligent and computational technologies.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-[30px] text-justify">
                        In today’s digital and data-driven era, intelligent systems and computational methods play a pivotal role in transforming industries, revolutionizing decision-making, and enhancing human life across diverse domains—from healthcare and automation to smart cities and sustainable development. ICISCM 2025 aspires to unite the global community of experts to exchange knowledge, discuss critical challenges, and present forward-thinking solutions in this dynamic and ever-expanding field.
                    </p>
                </div>
                <h1 className=" mx-auto font-semibold lg:text-2xl text-lg  text-[#269C52]">
                    Conference Tracks
                </h1>

                <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Intelligent Data Analytics and Machine Learning",
                            desc: "Advanced methodologies for extracting insights from large datasets using supervised, unsupervised, and reinforcement learning techniques."
                        },
                        {
                            title: "Computational Intelligence in Cloud Environments",
                            desc: "Development and optimization of intelligent algorithms within cloud infrastructures for scalable computing and resource management."
                        },
                        {
                            title: "IoT-Driven Intelligent Systems",
                            desc: "Design and integration of intelligent Internet of Things (IoT) systems enabling smart sensing, edge analytics, and real-time decision-making."
                        },
                        {
                            title: "Predictive Modeling and Intelligent Forecasting",
                            desc: "Application of statistical and machine learning models for forecasting trends, behaviors, and decision outcomes in dynamic environments."
                        },
                        {
                            title: "Blockchain-Based Computational Trust Models",
                            desc: "Innovative uses of blockchain for enhancing transparency, security, and trust in intelligent and autonomous systems."
                        },
                        {
                            title: "Edge and Fog Computing for Smart Applications",
                            desc: "Utilizing edge and fog nodes to process data locally, enabling latency-sensitive and intelligent distributed applications."
                        },
                        {
                            title: "Secure and Ethical AI Systems",
                            desc: "Techniques for ensuring robustness, privacy, compliance, and fairness in the design of intelligent computational systems."
                        },
                        {
                            title: "Deep Learning and Neural Computation",
                            desc: "Exploration of convolutional, recurrent, and transformer-based neural networks for perception, reasoning, and pattern recognition tasks."
                        },
                        {
                            title: "Big Data Infrastructure and Intelligent Storage",
                            desc: "Architectures and methods for managing large-scale, intelligent data pipelines using cloud-native storage and retrieval systems."
                        },
                        {
                            title: "Serverless and Event-Driven Architectures",
                            desc: "Leveraging Function-as-a-Service (FaaS) and microservices to build scalable, event-driven intelligent applications."
                        },
                        {
                            title: "Smart Cities and Intelligent Urban Systems",
                            desc: "Computational approaches for urban planning, transportation, governance, and sustainability powered by intelligent systems."
                        },
                        {
                            title: "Green and Sustainable Computational Methods",
                            desc: "Designing energy-efficient, low-latency algorithms and systems that balance performance with environmental responsibility."
                        }
                    ].map((track, index) => (
                        <>
                            <div key={index} className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm md:p-6 p-4 hover:border-[#269C52] hover:shadow-lg transition duration-300"  >
                                <div className="flex-1">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-[#269C52] text-[#269C52] rounded-full p-2">
                                        </div>
                                        <h3 className="text-gray-800 font-bold md:text-lg text-base group-hover:text-[#269C52] transition-colors">
                                            {track.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base mt-1">
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
                <section className="max-w-[90rem] mx-auto px-4  pt-5">
                    <h2 className=" mx-auto font-semibold lg:text-2xl text-lg  pb-5 text-[#269C52]  text-center">
                        Call for Reviewers
                    </h2>

                    <p className="text-gray-700 mb-4 leading-[30px] text-justify">
                        ICISCM-2025 invites dedicated researchers, academicians, and industry professionals to join as reviewers for this prestigious international conference. As a reviewer, you will contribute to maintaining the academic quality of the event by evaluating submissions in your area of expertise and providing constructive feedback to authors.
                    </p>

                    <p className="text-gray-700 mb-4 leading-[30px] text-justify">
                        Being part of the reviewer panel offers a valuable opportunity to stay updated with the latest research trends, expand your professional network, and receive formal recognition through a certificate of appreciation. Join us in shaping the future of intelligent systems and computational technologies.                    </p>

                    <h3 className="text-lg font-semibold text-[#269C53] mt-6 mb-2">
                        Reviewer Responsibilities:
                    </h3>

                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Conduct fair, objective, and timely reviews of assigned research papers.</li>
                        <li>Evaluate submissions based on originality, technical quality, relevance, and clarity.</li>
                        <li>Provide constructive feedback to help authors improve the quality of their work.</li>
                        <li>Maintain confidentiality and avoid any conflicts of interest.</li>
                        <li>Adhere to the review deadlines set by the organizing committee.</li>
                        <li>Promote the conference within your academic and professional networks.</li>
                        <li>Uphold ethical standards and contribute to the integrity of the review process.</li>
                    </ul>

                    {/* <p className="text-gray-700 mt-6">
                        If you are interested in serving as a reviewer, please apply using our online form
                        <a href="#" className="text-blue-600 hover:underline ml-1">[click here]</a>.
                        You may also share this opportunity with peers having relevant expertise.
                    </p> */}

                    <p className="text-gray-700 mt-4">
                        Thank you for considering this opportunity. We look forward to your valuable contribution to the success of ICISCM-2025.
                    </p>

                    <div className="mt-6 font-semibold text-[#1B1F3B]">
                        Best regards, <br />
                        <span className="text-black">ICISCM-2025 Organizing Committee</span>
                    </div>
                </section>


            </section>

            <LastSection />

        </>
    )
}

export default PeerReview

