import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamMemberCard from "./TeamMemberCard";
import KeyDates from "./KeyDates";
import LastSection from "../Last/LastSection";
import Invitees from "./Invitees";
import Technical from "./Technical";
import Marquee from "react-fast-marquee";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import Proceeding2025 from "../Proceedings/Proceeding2025";

export const Home = () => {

  const [activeYear, setActiveYear] = useState("2025");
  const [flipped, setFlipped] = useState(null);

  const [showProceedings2, setShowProceedings2] = useState(false);

  const handleViewProceedings2 = () => {
    setShowProceedings2(true);
  };

  const handleCloseModal = () => {
    setShowProceedings2(false);
  };

  const handleDownloadPDF = () => {
    // Replace with the actual path to your PDF file
    const pdfUrl = '/assets/documents/Proceeding2025.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'ICISCM conference_proceedings_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const item = [
    {
      name: "Dr. Monday O. Eze",
      department: "Department of Computer Science",
      university: "Babcock University",
      location: "Nigeria",
    },
    {
      name: "Dr. Shriram Pandey",
      department: "Department of Library & Information Science",
      university: "University of East London",
      location: "United Kingdom",
    },
    {
      name: "Dr. Kabelo Given Chuma",
      department: "Department of Information Science",
      university: "University of South Africa",
      location: "South Africa",
    },
  ]



  const team = [
    {
      image: '/assets/Images/members.jpg',
      name: 'Name',
      position: 'Position',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Jane Smith',
      position: 'Coordinator',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Alex Johnson',
      position: 'Technical Head',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Alex',
      position: 'Technical Head',
    },
  ];

  const invitees = [
    {
      location: 'South Korea',
      Name: 'Subrata Bhattacharjee',
      Position: ' Busan National University',
    },
    {
      location: 'South Korea',
      Name: 'Subrata Bhattacharjee',
      Position: ' Busan National University',
    },

    // {
    //   location: 'location',
    //   Name: 'Name',
    //   Position: 'Position',
    // },
    // {
    //   location: 'location',
    //   Name: 'Name',
    //   Position: 'Position',
    // },
    // {
    //   location: 'location',
    //   Name: 'Name',
    //   Position: 'Position',
    // },
  ];

  const technical = [
    {
      location: 'South Korea',
      Name: 'Subrata Bhattacharjee',
      Position: ' Busan National University',
    },
    {
      location: 'South Korea',
      Name: 'Subrata Bhattacharjee',
      Position: ' Busan National University',
    },
    {
      location: 'South Korea',
      Name: 'Subrata Bhattacharjee',
      Position: ' Busan National University',
    },
    {
      location: 'South Korea',
      Name: 'Subrata Bhattacharjee',
      Position: ' Busan National University',
    },
  ];


  const date2025 = [

    { Dates: "28-01-2025", Title: "Abstract Submission" },
    { Dates: "12-02-2025", Title: "Abstract Acceptance Date" },
    { Dates: "03-03-2025", Title: "Full Paper Submission" },
    { Dates: "09-06-2025", Title: "Acceptance Notifications" },
    { Dates: "21-07-2025", Title: "Registration Deadline / Final Paper" },
    { Dates: "13-08-2025", Title: "Conference Date" },
  ]


  const imageItems = [
    { src: '/assets/Images/associates/1.png', },
    { src: '/assets/Images/associates/2.jpg', },
    { src: '/assets/Images/associates/3.jpg', },
    { src: '/assets/Images/associates/4.jpg', },
    { src: '/assets/Images/associates/5.jpg', },
    { src: '/assets/Images/associates/6.jpg', },
    { src: "/assets/Images/associates/scopus.png", },
    { src: "/assets/Images/associates/8.jpg", },
    { src: "/assets/Images/associates/9.jpg", },
    { src: "/assets/Images/associates/10.jpg", },
    { src: "/assets/Images/associates/11.jpg", },
  ];

  return (
    <>
      <div className="overflow-hidden">
        <section className="relative lg:h-[calc(100dvh-30px)] w-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-[#269C53] z-0 clip-md"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full max-w-[100rem] gap-10 lg:py-0 py-10 mx-auto items-center px-4 lg:mt-0 mt-12">
            <div className="flex justify-center items-center ">
              <img src="/assets/Images/pik.png" alt="Conference" rel="preload" className="rounded-xl  mx-auto lg:w-full w-96" />
            </div>
            <div className=" lg:ml-auto mx-auto flex flex-col gap-4">
              <h2 className="lg:text-[#269C53] md:text-2xl font-bold text-center   text-white">ICISCM</h2>
              <h1 className="text-2xl xl:text-5xl lg:text-3xl font-bold leading-snug text-center  lg:text-black text-white">
                2<sup>nd</sup>  International Conference on  Intelligent Systems and  Computational Methods
              </h1>
              <div>
                <div className="flex sm:flex-row flex-col gap-2 sm:gap-5 justify-center text-center mb-3">
                  <p className="text-white lg:text-gray-800"><span className="font-medium text-lg">Date:</span> 13<sup>th</sup> August 2025</p>
                  <p className="text-white lg:text-gray-800"><span className="font-medium text-lg">Mode:</span> Hybrid (Online & On-Site)</p>
                </div>
                <div className="text-center">
                  <Link to="/paper-submission">
                    <button className="lg:bg-[#269C53] bg-white lg:text-white font-semibold  text-[#269C53] px-6 py-2 rounded lg:hover:bg-green-700 transition cursor-pointer">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className={`flex lg:justify-end justify-end lg:gap-2 gap-2  lg:px-5 px-2 md:rounded-lg right-0   pt-5 pb-3 fixed md:w-fit w-full z-10 transition-all duration-300 ${scrolled ? "   bg-white shadow-md py-2 md:top-[5%] xl:top-[9%] 2xl:top-[7.5%]  lg:top-[7.5%] top-[6%]" : "bg-transparent  md:top-[6%] xl:top-[10%] 2xl:top-[8.5%]  lg:top-[8%] top-[7%] "}`} >
            <button
              className="group mt-4.5  lg:mt-0 relative bg-gradient-to-br from-[#269C53] via-[#269C53] to-[#269C53] w-fit lg:p-3 p-1 lg:px-4 px-3 py-2 lg:rounded-xl rounded-lg flex text-[15px] font-medium cursor-pointer items-center gap-3 shadow-lg shadow-[#269C53]/50 hover:shadow-2xl hover:shadow-[#269C53]/60 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              onClick={handleViewProceedings2}
            >
              <span className="absolute  inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <FaFilePdf className="flex shrink-0 text-[20px] drop-shadow-lg text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 text-white drop-shadow-md font-medium">Proceedings - 2025</span>
            </button>

            <button
              className="group relative mt-4.5  lg:mt-0 font-bold flex items-center gap-4 cursor-pointer bg-gradient-to-br from-[#269C53] via-[#269C53] to-[#269C53] lg:p-3 p-1 lg:px-4 px-3 py-2 lg:rounded-xl rounded-lg shadow-lg   hover:shadow-2xl hover:shadow-[#269C53]/60 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              onClick={handleDownloadPDF}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <FaDownload className='flex shrink-0 lg:text-xl text-lg text-white drop-shadow-lg relative z-10 animate-bounce' />
            </button>
          </div>
          {showProceedings2 && (
            <div className="fixed inset-0 bg-black/70  flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg max-w-[1450px] w-full mx-2 lg:mx-0 max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex justify-end md:gap-10 gap-5 items-center p-4 border-b">
                  <button className="text-xl text-gray-700 hover:text-gray-900 font-semibold flex items-center gap-4 cursor-pointer" onClick={handleDownloadPDF}>Download <FaDownload className='flex shrink-0' /></button>
                  <button
                    className="text-gray-700 hover:text-gray-900 text-2xl cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                </div>
                <div className="lg:p-4 ">
                  <Proceeding2025 />
                </div>

                <div className="flex justify-end p-4 border-t">
                  <button
                    className="bg-[#269C53] text-gray-50 p-2 px-4 rounded-lg hover:bg-gray-400 cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>


        <section className="bg-[#A6D8A7]">
          <section className="max-w-[90rem] pt-5 md:pt-10 mx-auto md:px-5 px-3">
            <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-start">
              <div className='flex flex-col md:gap-4 gap-2'>
                <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                  About the Conference
                </h1>
                <p className="text-justify md:text-base text-sm leading-7">The International Conference on Intelligent Systems and Computational Methods (ICISCM) is dedicated to fostering interdisciplinary collaboration and advancing cutting-edge research in data-driven and computational technologies. It offers a dynamic platform to explore emerging challenges, share innovative solutions, and discuss future directions across a broad spectrum of fields, including artificial intelligence, machine learning, the Internet of Things (IoT), edge and fog computing, cybersecurity, and advanced data analytics. ICISCM 2025 highlights the latest innovations, research breakthroughs, and practical applications in intelligent systems and computational methods.</p>
              </div>
              <div className=" flex flex-col md:gap-4 gap-2">
                <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                  Scope of Conference
                </h1>
                <p className="text-justify md:text-base text-sm leading-7">
                  The International Conference on Intelligent Systems and Computational Methods (ICISCM) is committed to fostering interdisciplinary research and innovation in intelligent technologies and advanced computational methods. The conference serves as a dynamic platform to explore emerging challenges, present novel solutions, and discuss future directions across diverse areas such as artificial intelligence, machine learning, Internet of Things (IoT), edge and fog computing, cybersecurity, and data analytics. ICISCM 2025 unites researchers, academicians, and industry experts to exchange knowledge, cultivate collaboration, and accelerate innovation in designing intelligent, adaptive, and high-performance systems.
                </p>
              </div>
            </section>
            <div className="flex justify-center mt-10 ">
              <div className="bg-white w-fit p-10  flex items-center gap-4 rounded-t-xl relative top-2 overflow-hidden">
                <i className="fi fi-ss-earth-americas flex items-center text-3xl text-[#2457c5]"></i>
                <p className="md:text-xl">Location :<br />
                  Jakarta, Indonesia</p>
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div>
              </div>
            </div>
          </section>
        </section>


        <section className="bg-white">
          <section className="max-w-[90rem] pt-5 md:pt-10 mx-auto md:px-5 px-3">
            <section className="grid md:grid-cols-1 grid-cols-1 md:gap-5 gap-3 items-start">
              <div className='flex flex-col md:gap-4 gap-2'>
                <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                  Our Mission
                </h1>
                <p className="text-justify md:text-base text-sm leading-7">
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    The mission of the International Conference on Intelligent Systems and Computational Methods is to create a dynamic platform for researchers, academicians, industry professionals, and students to exchange knowledge, share research innovations, and explore collaborative opportunities in the fields of intelligent computing, data science, machine learning, and computational engineering.
                    <br /><br />
                    Our goal is to foster interdisciplinary dialogue and bridge the gap between theoretical advancements and real-world applications. We aim to support the global research community by encouraging the presentation of novel ideas, facilitating constructive discussions, and promoting ethical and impactful technological development. Through inclusive participation and high-quality academic contributions, the conference strives to drive innovation, inspire future research, and address the challenges of an increasingly digital and intelligent world.
                  </p>
                </p>
              </div>
              {/* <div className=" flex flex-col md:gap-4 gap-2">
              <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                Conference Objectives
              </h1>
              <p className="text-justify md:text-base text-sm leading-7">
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  The primary objective of this conference is to bring together scholars, researchers, and professionals from academia and industry to present and discuss the latest innovations, trends, and challenges in intelligent systems and computational methodologies. The conference aims to facilitate the dissemination of groundbreaking research, foster interdisciplinary collaboration, and inspire technological advancements that can drive societal progress and global development.
                </p>              </p>
            </div> */}
            </section>

          </section>
        </section>


        <section className="max-w-[100rem]  mx-auto pt-10 md:pt-10 flex flex-col md:gap-10  gap-10">
          {/* <section className="  max-w-[70rem]   mx-auto md:px-5 px-3  flex flex-col md:gap-5 gap-3">
          <h1 className=" text-center font-semibold lg:text-2xl text-lg">
            Key Invitees
          </h1>
          <div className="grid md:grid-cols-2   grid-cols-1 md:gap-10 gap-5">
            {invitees.map((member, index) => (
              <Invitees key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
            ))}
          </div>
        </section>
        <section className="  max-w-[100rem]  mx-auto md:px-5 px-3  flex flex-col md:gap-5  gap-3">
          <h1 className=" text-center font-semibold lg:text-2xl text-lg">
            Keynote Speakers
          </h1>
          <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            {technical.map((member, index) => (
              <Technical key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
            ))}
          </div>
        </section> */}


          <section className="   md:px-5 px-3 ">
            <div className="  bg-[#A6D8A7] md:p-10 p-5 rounded-3xl shadow-xl  flex flex-col md:gap-5 gap-3">
              <h1 className="text-center mx-auto font-semibold lg:text-2xl text-lg ">
                Key Dates
              </h1>
              <div className="  px-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-5">
                  {date2025.map((item, index) => (
                    <KeyDates key={index} Dates={item.Dates} Title={item.Title} />
                  ))}
                </div>
              </div>
            </div>
          </section>


          <section className="md:px-5 px-3 ">
            <div className="  bg-[#A6D8A7] md:p-10 p-5 rounded-3xl shadow-xl   ">
              <h1 id="keyinvitees" className="scroll-mt-28 text-center mx-auto font-semibold lg:text-2xl text-lg ">
                Key Invitees
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6   mx-auto">
                {item.map((invitee, index) => (
                  <div
                    key={index}
                    className={`group w-full h-48 xl:h-44 `} onClick={() => setFlipped(flipped === index ? null : index)}
                  >
                    <div className={`relative  w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped === index ? "rotate-y-180" : ""} group-hover:rotate-y-180`}>
                      {/* Front Side */}
                      <div className="overflow-hidden absolute w-full h-full backface-hidden  bg-white text-black flex items-center justify-center rounded-xl  shadow-[0_0_8px_rgba(0,0,0,0.15)]">
                        <h3 className="font-semibold text-xl   text-center p-4">
                          {invitee.name}
                        </h3><div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div>
                      </div>
                      {/* Back Side */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-gray-800   flex flex-col items-center justify-center rounded-xl  p-4 shadow-[0_0_8px_rgba(0,0,0,0.15)]">
                        <p className="text-base xl:text-lg text-center  mb-1">
                          {invitee.department},
                        </p>
                        <p className="text-base xl:text-lg text-center  mb-1">
                          {invitee.university},
                        </p>
                        <p className="text-base xl:text-lg text-center">
                          {invitee.location}.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>



          <div className="">
            <div className="     px-4">
              <h1 className="text-center w-fit mx-auto rounded-full   font-semibold md:text-2xl text-lg">
                Indexed Journals
              </h1>
              <p className="text-center font-medium opacity-85 text-[16px] md:text-[18px] leading-[30px] max-w-[1000px] mx-auto mt-4">The Selective accepted papers of our International Conference on Intelligent Systems and Computational Methods will be recommended to publish in the following index & publisher Journals.</p>
            </div>
            <Marquee direction='left' pauseOnClick pauseOnHover>
              <div className="  flex  pb-10 pt-4">
                {imageItems.map((item, index) => (
                  <div key={index} className=" flex justify-center mr-10  py-5" >
                    <img src={item.src} alt="images" className=" w-[300px] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition duratiom-300" />
                  </div>
                ))}
              </div>
            </Marquee>

          </div>
          <LastSection />
        </section>
        {/* Key Invites Section */}
        {/* <section className="flex flex-col md:gap-10 gap-5">
            <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-6 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
              Key Invitees
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-10 gap-5">
              {team.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  dataAos="flip-left"
                />
              ))}
            </div>
          </section> */}
        {/* Divider */}
        {/* Venue/Contact Info */}
      </div>
    </>
  );
};
