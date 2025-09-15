import React from "react";
import { Link } from "react-router-dom";
import TeamMemberCard from "./TeamMemberCard";
import KeyDates from "./KeyDates";
import LastSection from "../Last/LastSection";
import Invitees from "./Invitees";
import Technical from "./Technical";
import Marquee from "react-fast-marquee";

export const Home = () => {
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

  const date = [
    { Dates: '01-04-2025', Title: 'Full Paper Submission Deadline' },
    { Dates: '08-04-2025', Title: 'Notification of Decision' },
    { Dates: '14-04-2025', Title: 'Deadline for Submitting Revised Full Paper' },
    { Dates: '18-04-2025', Title: 'Notification of Acceptance' },
    { Dates: '22-04-2025', Title: 'Final Paper Submission' },
    { Dates: '28-04-2025', Title: 'Last Date for Registration' },
  ];


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
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full max-w-[100rem] gap-10 lg:py-0 py-10 mx-auto items-center px-4">
          <div className="flex justify-center items-center ">
            <img src="/assets/Images/pik.png" alt="Conference" rel="preload" className="rounded-xl  mx-auto lg:w-full w-96" />
          </div>
          <div className=" lg:ml-auto mx-auto flex flex-col gap-6">
            <h2 className="lg:text-[#269C53] md:text-2xl font-bold text-center   text-white">ICISCM</h2>
            <h1 className="text-2xl xl:text-5xl lg:text-3xl font-bold leading-snug text-center  lg:text-black text-white">
              International Conference on  Intelligent Systems and  Computational Methods
            </h1>
            <div className="text-center">
              <Link to="/paper-submission">
                <button className="lg:bg-[#269C53] bg-white lg:text-white font-semibold  text-[#269C53] px-6 py-2 rounded lg:hover:bg-green-700 transition cursor-pointer">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#A6D8A7]">
        <section className="max-w-[90rem] pt-5 md:pt-10 mx-auto md:px-5 px-3">
          <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-start">
            <div className='flex flex-col md:gap-4 gap-2'>
              <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                About the Conference
              </h1>
              <p className="text-justify md:text-base text-sm leading-7">Step into the future of intelligent technologies at the International Conference on Intelligent Systems and Computational Methods.
                This premier global event unites researchers, academicians, industry experts, and students to explore innovative ideas, emerging trends, and practical applications in intelligent systems and computational techniques. ICISCM serves as a dynamic platform for presenting cutting-edge research, exchanging knowledge, and fostering collaborations that drive advancements in automation, machine learning, optimization, and real-world problem solving through computational intelligence. </p>
            </div>
            <div className=" flex flex-col md:gap-4 gap-2">
              <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                Scope of Conference
              </h1>
              <p className="text-justify md:text-base text-sm leading-7">
                Join us at the International Conference on Intelligent Systems and Computational Methods — a premier forum that brings together a global community of researchers, academicians, industry professionals, and students to delve into the latest developments in intelligent technologies and computational strategies. This event is designed to foster impactful collaborations, encourage innovative thinking, and highlight pioneering research that addresses theoretical foundations and real-world applications across areas such as machine learning, optimization, data analytics, automated decision-making, and complex system modeling.
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
      <section className=" pt-10 md:pt-10 flex flex-col md:gap-10  gap-10">
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
        <section className="  max-w-[100rem]  mx-auto md:px-5 px-3 ">
          <div className="  bg-[#A6D8A7] md:p-10 p-5 rounded-3xl shadow-xl  flex flex-col md:gap-5 gap-3">
            <h1 className="text-center mx-auto font-semibold lg:text-2xl text-lg ">
              Key Dates
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
              {date.map((item, index) => (
                <KeyDates key={index} Dates={item.Dates} Title={item.Title} />
              ))}
            </div>
          </div>
        </section>
        <div className="max-w-[1450px] mx-auto">
          <div className=" pt-10 space-y-10   px-4">
            <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
              Inexed Journals
            </h1>
            <p className="text-center font-medium opacity-85 text-[18px] leading-[30px] max-w-[1000px] mx-auto">The Selective accepted papers of our International Conference on Intelligent Systems and Computational Methods will be recommended to publish in the following index & publisher Journals.</p>
          </div>
          <Marquee direction='left' pauseOnClick pauseOnHover>
            <div className="  flex  pb-10 pt-10 ">
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
