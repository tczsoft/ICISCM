import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

function Publication() {

    const [activeYear, setActiveYear] = useState("2025");

    const datesData = {
        "2025": [
            { date: "26-07-2025", event: "Full Paper Submission Deadline" },
            { date: "31-07-2025", event: "Notification of Decision" },
            { date: "01-08-2025", event: "Deadline for Submitting Revised Full Paper" },
            { date: "04-08-2025", event: "Notification of Acceptance" },
            { date: "08-08-2025", event: "Last Date for Registration" },
            { date: "13-08-2025", event: "Conference Dates" },
        ],
        "2024": [
            { date: "20-06-2024", event: "Full Paper Submission Deadline" },
            { date: "24-06-2024", event: "Notification of Decision" },
            { date: "28-06-2024", event: "Deadline for Submitting Revised Full Paper" },
            { date: "02-07-2024", event: "Notification of Acceptance" },
            { date: "07-07-2024", event: "Last Date for Registration" },
            { date: "10-07-2024", event: "Conference Dates" },
        ],
    };

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
                    <div className=" px-4 pt-5">
                        <div className="flex justify-center gap-4 mb-6">
                            {Object.keys(datesData).map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 cursor-pointer ${activeYear === year ? "bg-green-600 text-white shadow-md scale-105" : "bg-gray-300 text-gray-700 shadow-md hover:bg-gray-200"}`} >
                                    {year}
                                </button>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {datesData[activeYear].map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <i className="fi fi-rs-calendar flex items-center text-[#56AE58]"></i>
                                        <p className="md:text-xl text-base font-semibold">{item.date}</p>
                                    </div>
                                    <p className="text-gray-700 md:text-base text-sm">{item.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default Publication

