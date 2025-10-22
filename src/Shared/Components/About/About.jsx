import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import { FaUsers, FaLightbulb, FaGlobe, FaHandshake, FaIndustry, FaCogs, } from "react-icons/fa";

function About() {

  const attendReasons = [
    {
      title: "Interdisciplinary Collaboration",
      icon: <FaUsers />,
      points: [
        "Connect with experts from AI, ML, IoT, cybersecurity, and computing.",
        "Foster cross-domain partnerships for tackling complex problems.",
        "Promote diverse expertise to drive innovative solutions.",
      ],
    },
    {
      title: "Cutting-Edge Research",
      icon: <FaLightbulb />,
      points: [
        "Showcase breakthroughs in intelligent systems and computational methods.",
        "Explore emerging technologies shaping the future of computing and automation.",
        "Highlight innovative approaches in AI, ML, and data-driven applications.",
      ],
    },
    {
      title: "Broad Research Scope",
      icon: <FaGlobe />,
      points: [
        "Cover topics like optimization, soft computing, high-performance computing, and automation.",
        "Encourage submissions from multiple disciplines to enrich knowledge exchange.",
        "Promote a holistic understanding of current technological advancements.",
      ],
    },
    {
      title: "Knowledge Exchange & Networking",
      icon: <FaHandshake />,
      points: [
        "Participate in interactive workshops, panel discussions, and technical sessions.",
        "Engage with peers and thought leaders for meaningful dialogue.",
        "Build long-term professional and academic connections.",
      ],
    },
    {
      title: "Industry & Academia Synergy",
      icon: <FaIndustry />,
      points: [
        "Bridge theoretical research with practical applications.",
        "Collaborate on innovations that impact real-world scenarios.",
        "Explore opportunities for joint projects between academia and industry.",
      ],
    },
    {
      title: "Real-World Impact",
      icon: <FaCogs />,
      points: [
        "Develop adaptive, efficient, and intelligent solutions.",
        "Enhance decision-making, automation, and operational efficiency.",
        "Focus on applications with measurable benefits across industries.",
      ],
    },
  ];


  return (
    <>
      <section className="flex flex-col  md:gap-10 gap-5  max-w-[80rem]  md:py-10 py-5 mx-auto md:px-5 px-3   items-center justify-center">
        <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-center">
          <div className=' flex flex-col md:gap-5 gap-3'>
            <h1 className=" text-center font-semibold text-[#269C52] lg:text-2xl text-lg">
              About the Conference
            </h1>
            <div className="flex flex-col gap-5 ">
              {/* <p className="text-justify md:text-base text-sm leading-7">
                The International Conference on Big Data and Cloud Computing (ICBDCC) serves as a premier global platform for researchers, academicians, industry practitioners, and students to exchange ideas, innovations, and research outcomes in the fields of Big Data, Cloud Computing, and their emerging applications.
              </p> */}
              <p className="text-justify md:text-base text-sm leading-7">
                The International Conference on Intelligent Systems and Computational Methods (ICISCM) is dedicated to fostering interdisciplinary collaboration and advancing cutting-edge research in data-driven and computational technologies. It offers a dynamic platform to explore emerging challenges, share innovative solutions, and discuss future directions across a broad spectrum of fields, including artificial intelligence, machine learning, the Internet of Things (IoT), edge and fog computing, cybersecurity, and advanced data analytics.
              </p>
              <div className='mx-auto flex items-center bg-[#269C52] text-white w-fit md:p-4 p-3 gap-2 rounded-xl'>
                <i className="fi fi-ss-earth-americas flex items-center md:text-3xl text-xl"></i>
                <p className="md:text-base text-sm">Location <br />Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img className="h-64 sm:h-80 w-full object-cover" rel="preload" src="/assets/Images/footer.jpg" alt="Conference Visual" />
          </div>
        </section>

        <section className="">
          <div className="mx-auto text-justify  space-y-4 text-sm md:text-base ">
            <p className='leading-[30px]'>
              ICISCM 2025 highlights the latest innovations, research breakthroughs, and practical applications in intelligent systems and computational methods. The conference welcomes high-quality contributions in areas such as AI, machine learning, data science, optimization, automation, soft computing, and high-performance computing. By bringing together leading academics, researchers, and industry professionals, ICISCM provides an unparalleled forum to exchange knowledge, foster collaboration, and drive the development of smart, adaptive, and efficient solutions for complex real-world challenges.
            </p>
          </div>
        </section>


        <section>
          <h2 className="lg:text-2xl text-lg font-semibold text-[#1B1F3B] text-center mb-8">
            Why Attend ICISCM 2025
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto gap-8">
            {attendReasons.map((item, index) => (
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
                      {item.points.map((point, i) => (
                        <li key={i}>󠁯• {point}</li>
                      ))}
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
  )
}

export default About
