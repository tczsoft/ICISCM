import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

function About() {
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
                This conference aims to foster interdisciplinary collaboration and advance the state-of-the-art in data-driven technologies. It provides a vibrant environment to explore current challenges, share novel solutions, and discuss future directions across a wide spectrum of topics including artificial intelligence, machine learning, Internet of Things (IoT), edge and fog computing, cybersecurity, and data analytics.
              </p>
              <div className='mx-auto flex items-center bg-[#269C52] text-white w-fit md:p-4 p-3 gap-2 rounded-xl'>
                <i className="fi fi-ss-earth-americas flex items-center md:text-3xl text-xl"></i>
                <p className="md:text-base text-sm">Location <br />Chennai, India</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img className="h-64 sm:h-80 w-full object-cover" src="/assets/Images/footer.jpg" alt="Conference Visual" />
          </div>
        </section>
        <section className="">
          <div className="mx-auto text-justify text-gray-700 space-y-4 text-sm md:text-base leading-7">
            <p className='leading-7'>
              The International Conference on Intelligent Systems and Computational Methods (ICISCM) focuses on the latest innovations, research, and applications in intelligent systems and computational techniques. The conference welcomes contributions in areas such as artificial intelligence, machine learning, data science, optimization, automation, soft computing, and high-performance computing. It aims to provide a platform for academic and industry experts to share knowledge and advance the development of smart, adaptive, and efficient solutions to complex problems.
            </p>
          </div>
        </section>

      </section>


      <LastSection />

    </>
  )
}

export default About
