import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

function Publication() {
    return (
        <>
            <section className="flex flex-col md:gap-10 gap-5   max-w-[90rem] py-5 md:py-10  mx-auto md:px-5 px-3">
                <div className=''>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg md:mb-4 mb-3">
                        Key Dates
                    </h1>
                    <p className="md:text-base text-sm text-justify leading-[30px] mb-5">
                        Participants are encouraged to take note of the important deadlines for the International Conference on Intelligent Systems and Computational Methods. These dates include the submission of full papers, notification of acceptance, registration deadlines, and the final camera-ready submission. Staying informed of these key milestones will ensure timely participation and help authors prepare their contributions effectively. All deadlines are strictly followed to maintain the integrity of the review and publication process.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 max-w-7xl mx-auto pt-5">
                        {[
                            {
                                date: "01-04-2025",
                                event: "Full Paper Submission Deadline",
                            },
                            {
                                date: "08-04-2025",
                                event: "Notification of Decision",
                            },
                            {
                                date: "14-04-2025",
                                event: "Deadline for Submitting Revised Full Paper",
                            },
                            {
                                date: "18-04-2025",
                                event: "Notification of Acceptance",
                            },
                            {
                                date: "22-04-2025",
                                event: "Final Paper Submission",
                            },
                            {
                                date: "28-04-2025",
                                event: "Last Date for Registration",
                            },
                        ].map((item, index) => (
                            <div key={index} className="  border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                                <div className='flex items-center gap-3  mb-2'>
                                    <i className="fi fi-rs-calendar flex items-center text-[#56AE58]"></i>
                                    <p className=" md:text-xl text-base font-semibold">{item.date}</p>
                                </div>
                                <p className="text-gray-700 md:text-base text-sm">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default Publication

