import React from "react";
import { Link } from "react-router-dom";
import TeamMemberCard from "./TeamMemberCard";
import KeyDates from "./KeyDates";
import LastSection from "../Last/LastSection";
import Invitees from "./Invitees";
import Technical from "./Technical";

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
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
  ];

  const technical = [
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
  ];

  const date = [
    { Dates: '22-07-2025', Title: 'Full Paper Submission Deadline' },
    { Dates: '29-07-2025', Title: 'Notification of Decision' },
    { Dates: '05-08-2025', Title: 'Deadline for Submitting Revised Full Paper' },
    { Dates: '12-08-2025', Title: 'Notification of Acceptance' },
    { Dates: '19-08-2025', Title: 'Camera-Ready Paper Submission' },
    { Dates: '26-08-2025', Title: 'Last Date for Registration / Payment' },
  ];

  return (
    <>
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
              <p className="text-justify md:text-base text-sm leading-7">Step into the future of intelligent technologies at the International Conference on Intelligent Systems and Computational Methods (ICISCM).
                This premier global event unites researchers, academicians, industry experts, and students to explore innovative ideas, emerging trends, and practical applications in intelligent systems and computational techniques. ICISCM serves as a dynamic platform for presenting cutting-edge research, exchanging knowledge, and fostering collaborations that drive advancements in automation, machine learning, optimization, and real-world problem solving through computational intelligence. </p>
            </div>
            <div className=" flex flex-col md:gap-4 gap-2">
              <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                Scope of Conference
              </h1>
              <p className="text-justify md:text-base text-sm leading-7">
                Join us at the International Conference on Intelligent Systems and Computational Methods (ICISCM) — a premier forum that brings together a global community of researchers, academicians, industry professionals, and students to delve into the latest developments in intelligent technologies and computational strategies. This event is designed to foster impactful collaborations, encourage innovative thinking, and highlight pioneering research that addresses theoretical foundations and real-world applications across areas such as machine learning, optimization, data analytics, automated decision-making, and complex system modeling.
              </p>
            </div>
          </section>
          <div className="flex justify-center mt-10 ">
            <div className="bg-white w-fit p-10  flex items-center gap-4 rounded-t-xl relative top-2 overflow-hidden">
              <i className="fi fi-ss-earth-americas flex items-center text-3xl"></i>
              <p className="md:text-xl">Location : <br />
                Chennai, India</p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>
        </section>
      </section>
      <section className=" pt-10 md:pt-10 flex flex-col md:gap-10  gap-10">
        <section className="  max-w-[70rem]   mx-auto md:px-5 px-3  flex flex-col md:gap-5 gap-3">
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
            Technical Program Committee
          </h1>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            {technical.map((member, index) => (
              <Technical key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
            ))}
          </div>
        </section>
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
    </>
  );
};
