import React from 'react'
import LastSection from '../Last/LastSection'

export default function Callforpaper() {
    return (
        <div>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem] py-5 md:py-10  mx-auto md:px-5 px-3">
                <div className="">
                    <h1 className=" mx-auto font-semibold lg:text-2xl text-lg pb-5 text-center text-[#269C52]">
                        Call for Papers
                    </h1>
                    <p className=" text-sm md:text-base leading-[30px] text-justify mb-4">
                        The International Conference on Intelligent Systems and Computational Methods (ICISCM 2025) warmly welcomes researchers, academicians, industry experts, innovators, and students worldwide to submit original, unpublished research. This premier conference offers a global platform to foster collaboration, spark innovative ideas, and showcase pioneering research shaping the future of intelligent and computational technologies.
                    </p>
                    <p className=" text-sm md:text-base leading-[30px] text-justify ">
                        In an era driven by data and digital transformation, intelligent systems and advanced computational methods are revolutionizing industries, enhancing decision-making, and improving lives—from healthcare and automation to smart cities and sustainable development. ICISCM 2025 aims to unite a vibrant community of scholars and practitioners to share knowledge, tackle emerging challenges, and present innovative solutions in this fast-evolving field. Conference Themes Include (but are not limited to):
                    </p>
                </div>


                <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Artificial Intelligence & Machine Learning",
                            desc: "Deep learning, reinforcement learning, and generative AI techniques for real-world applications."
                        },
                        {
                            title: "Internet of Things (IoT), Edge & Fog Computing",
                            desc: "Smart connected systems, real-time data processing, and distributed computing architectures."
                        },
                        {
                            title: "Cybersecurity & Privacy-Preserving Technologies",
                            desc: "Advanced methods for secure communication, data protection, and resilient systems."
                        },
                        {
                            title: "High-Performance & Cloud Computing",
                            desc: "Scalable architectures, parallel processing, and cloud-native solutions for big data environments."
                        },
                        {
                            title: "Data Science, Analytics & Visualization",
                            desc: "Big data analysis, predictive modeling, and interactive visualization for actionable insights."
                        },
                        {
                            title: "Optimization & Computational Intelligence",
                            desc: "Advanced optimization methods, intelligent algorithms, and problem-solving frameworks."
                        },
                        {
                            title: "Automation, Robotics & Intelligent Control",
                            desc: "Autonomous systems, robotics solutions, and smart control methodologies."
                        },
                        {
                            title: "Natural Language Processing & Human–Computer Interaction",
                            desc: "AI-driven communication, language understanding, and immersive interfaces."
                        },
                        {
                            title: "Sustainable & Green Computing",
                            desc: "Energy-efficient algorithms, eco-friendly infrastructures, and carbon-aware technologies."
                        },
                        {
                            title: "Digital Twin & Smart Infrastructure Modeling",
                            desc: "Virtual replicas, predictive simulations, and smart industrial applications."
                        },
                        {
                            title: "Federated Learning & Collaborative AI Systems",
                            desc: "Privacy-aware distributed learning and multi-agent AI frameworks."
                        },
                        {
                            title: "Computer Vision & Intelligent Perception",
                            desc: "Object recognition, scene understanding, and AI perception systems."
                        },
                        {
                            title: "Explainable AI & Responsible Machine Learning",
                            desc: "Transparent models, bias mitigation, and trustworthy AI practices."
                        },
                        {
                            title: "Autonomous Systems & Intelligent Transportation",
                            desc: "Self-driving solutions, smart mobility, and automated logistics systems."
                        }
                    ].map((track, index) => (
                        <>
                            <div key={index} className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm md:p-6 p-4 hover:border-[#269C52] hover:shadow-lg transition duration-300"  >
                                <div className="flex-1">
                                    <div className='flex items-center gap-3'>
                                        <div className="bg-[#269C52] text-[#269C52] rounded-full p-1.5">
                                        </div>
                                        <h3 className="text-gray-800 font-semibold md:text-lg text-base group-hover:text-[#269C52] transition-colors">
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

                <p className=" text-sm md:text-base leading-[30px] text-justify ">
                    ICISCM 2025 provides a unique opportunity to contribute, collaborate, and gain international visibility for your research in intelligent systems and computational methods.
                </p>
            </section>


            <LastSection />
        </div>
    )
}
