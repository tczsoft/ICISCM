import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

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
            </section>

            <LastSection />

        </>
    )
}

export default PeerReview

