import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

function Publication() {
    return (
        <>
            <section className="flex flex-col md:gap-10 gap-5   max-w-[90rem] py-5 md:py-10  mx-auto md:px-5 px-3">
                <div className=''>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg md:mb-5 mb-3">
                        Key Dates
                    </h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 max-w-7xl mx-auto">
                        {[
                            {
                                date: "22-07-2025",
                                event: "Full Paper Submission Deadline",
                            },
                            {
                                date: "29-07-2025",
                                event: "Notification of Decision",
                            },
                            {
                                date: "05-08-2025",
                                event: "Deadline for Submitting Revised Full Paper",
                            },
                            {
                                date: "12-08-2025",
                                event: "Notification of Acceptance",
                            },
                            {
                                date: "19-08-2025",
                                event: "Camera-Ready Paper Submission",
                            },
                            {
                                date: "26-08-2025",
                                event: "Last Date for Registration / Payment",
                            },
                        ].map((item, index) => (
                            <div key={index} className="  border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                                <div className='flex items-center gap-3  mb-2'>
                                    <i className="fi fi-sr-calendar-clock flex items-center text-[#56AE58]"></i>
                                    <p className=" md:text-xl text-base font-semibold">{item.date}</p>
                                </div>
                                <p className="text-gray-700 md:text-base text-sm">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg md:mb-5 mb-3">
                        Registration Details
                    </h1>
                    <div className="max-w-[78rem] mx-auto border border-gray-200 rounded-xl shadow-md md:p-6 p-3 bg-white">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Bank Account Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                            <div>
                                <p className="font-medium text-gray-600">Account Name</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600">Account Number</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600">Branch</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600">IFSC Code</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600">MICR</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>
                        </div>
                        {/* Payment Instructions */}
                        <div className="text-sm text-gray-800 space-y-3">
                            <p className="font-semibold   text-gray-900 border-t pt-4 text-lg">Payment Instructions:</p>
                            <ul className="list-disc list-inside space-y-2 md:text-base text-sm">
                                <li>Registration fee is payable only after your article is accepted.</li>
                                <li>Payment options: <span className="font-medium">Online Transfer (NEFT / IMPS)</span> or <span className="font-medium">Cash Deposit</span>.</li>
                                <li>
                                    After payment, send proof (<span className="italic">Screenshot / Reference Number / Transaction ID / Counter Slip</span>)
                                    along with your Paper ID.
                                </li>
                                <li>At least <span className="font-medium">one author</span> of each accepted paper must register and attend the conference.</li>
                                <li>Selected paper abstracts will be published in the conference proceedings with <span className="font-medium">ISBN</span>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <LastSection />

        </>
    )
}

export default Publication

