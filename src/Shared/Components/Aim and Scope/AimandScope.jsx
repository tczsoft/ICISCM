import React from 'react';
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';
import { FaUsers, FaLightbulb, FaNetworkWired, FaCogs, FaGlobe, FaFlask, FaRocket } from "react-icons/fa";

function AimandScope() {

    const focusAreas = [
        {
            title: "Collaborative Innovation",
            points:
                "Fosters cross-disciplinary teamwork in AI, ML, IoT, cybersecurity, and data analytics to create holistic solutions.",
            icon: <FaUsers />,
        },
        {
            title: "Addressing Emerging Challenges",
            points:
                "Showcases innovative approaches and trends to tackle evolving problems in intelligent systems and computational methods.",
            icon: <FaLightbulb />,
        },
        {
            title: "Knowledge Sharing & Networking",
            points:
                "Connects researchers, academicians, and industry experts to exchange ideas and build long-term partnerships.",
            icon: <FaNetworkWired />,
        },
        {
            title: "Intelligent & Adaptive Technologies",
            points:
                "Focuses on designing smart, high-performance systems capable of autonomous decision-making and responsive operations.",
            icon: <FaCogs />,
        },
        {
            title: "Real-World Impact",
            points:
                "Highlights research delivering practical benefits, improving efficiency, safety, sustainability, and operational effectiveness.",
            icon: <FaGlobe />,
        },
        {
            title: "Advanced Methodologies",
            points:
                "Encourages the use of novel algorithms, frameworks, and experimental methods to solve complex computational challenges.",
            icon: <FaFlask />,
        },
        {
            title: "Future-Ready Innovations",
            points:
                "Promotes forward-looking research to drive the next generation of intelligent systems and transformative technologies.",
            icon: <FaRocket />,
        },
    ];

    return (
        <>
            <section className="flex flex-col  md:gap-10 gap-5  max-w-[80rem]  md:py-10 py-5 mx-auto md:px-5 px-3 items-center justify-center">
                <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-start">
                    <div className="rounded-xl overflow-hidden">
                        <img className="h-64 sm:h-80 w-full object-cover" rel="preload" src="/assets/Images/illus.jpg" alt="Conference Visual" />
                    </div>
                    <div className='flex flex-col md:gap-5 gap-3'>
                        <h1 className=" text-center font-semibold text-[#269C52] lg:text-2xl text-lg">
                            Scope of the Conference
                        </h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-justify md:text-base text-sm leading-7">
                                The International Conference on Intelligent Systems and Computational Methods (ICISCM) is committed to fostering interdisciplinary research and innovation in intelligent technologies and advanced computational methods. The conference serves as a dynamic platform to explore emerging challenges, present novel solutions, and discuss future directions across diverse areas such as artificial intelligence, machine learning, Internet of Things (IoT), edge and fog computing, cybersecurity, and data analytics.
                            </p>
                        </div>
                    </div>
                </section>


                <section className="">
                    <div className="mx-auto text-justify text-gray-700 space-y-4 text-sm md:text-base leading-7">
                        <p className='leading-7'>
                            ICISCM 2025 unites researchers, academicians, and industry experts to exchange knowledge, cultivate collaboration, and accelerate innovation in designing intelligent, adaptive, and high-performance systems. Emphasizing multidisciplinary approaches, the conference highlights research with practical, real-world applications that address complex challenges across multiple domains. By promoting cutting-edge methodologies and fostering collaborative engagement, ICISCM aims to shape the next generation of smart technologies and computational advancements.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="lg:text-2xl text-lg font-semibold text-[#1B1F3B] text-center mb-8">
                        Key Focus Areas
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto gap-8">
                        {focusAreas.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-6 rounded-xl shadow-lg group transition-transform hover:scale-[1.02] overflow-hidden"
                            >
                                <div className="flex items-start gap-5 relative z-10 h-full">
                                    {/* Icon */}
                                    <div className="text-white p-4 bg-[#269C52] rounded-full text-2xl flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-3">
                                        <p className="text-lg md:text-xl font-semibold text-[#1B1F3B]">
                                            {item.title}
                                        </p>
                                        <ul className=" text-gray-700 text-sm md:text-base leading-relaxed space-y-1">
                                            {item.points}
                                        </ul>
                                    </div>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 transition-transform duration-500 group-hover:scale-110"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            <LastSection />
        </>
    );
}

export default AimandScope;
