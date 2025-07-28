
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';

function Abstracting() {
    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    }); const [uploadFile, setUploadFile] = useState(null);
    const [status, setStatus] = useState('');
    const [fileName, setFileName] = useState('Choose Your File');

    const handleRemoveFile = () => {
        setUploadFile(null);
        document.getElementById("upload-paper").value = ""; // Clear input
    };


    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const journalName = 'iciscm';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);
            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }
            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);
            const mailPromise = fetch('https://iciscm.com/api/send_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('');
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }
    return (
        <>
            <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-5 md:py-10 ">
                <div className="lg:flex md:flex  gap-8">
                    <div className="max-w-[90rem] mx-auto w-full">
                        <div className=' text-center mx-auto flex justify-center md:mb-5 mb-3'>
                            <h1 className=" text-center text-[#269C52] rounded-full  font-semibold  lg:text-2xl   text-lg ">
                                New Paper Submission
                            </h1>
                        </div>
                        <div className='grid lg:grid-cols-1 md:gap-4  gap-4 items-center'>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto  ">
                                <div className="bg-white md:p-5 p-3 ">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#14AE5C] mb-3">Submission Guidelines</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Original and unpublished research papers only</li>
                                        <li>Submit in PDF or DOCX format</li>
                                        <li>Maximum file size: 10 MB</li>
                                        <li>Paper should follow the IEEE format</li>
                                        <li>Include author details on the first page</li>
                                        <li>Ensure all author details are correctly filled</li>
                                        <li>Upload a PDF or Word document of the paper</li>
                                        <li>Only one submission per author will be accepted</li>
                                        <li>Follow the formatting guidelines provided</li>
                                    </ul>
                                </div>
                                <div className="bg-white md:p-5 p-3 ">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#14AE5C] mb-3">Important Notes</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Verify the accuracy of the contact details before submission.</li>
                                        <li>The first author will be contacted for further correspondence.</li>
                                        <li>Submissions must be made before the deadline date.</li>
                                        <li>Late submissions may not be considered for review.</li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                                {/* Submission Guidelines */}
                                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-5">
                                    <h3 className="md:text-xl font-bold text-[#14AE5C] mb-4 flex items-center gap-2">
                                        <i className="fi fi-bs-check flex items-center"></i>
                                        Submission Guidelines
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Original and unpublished research papers only
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Submit in PDF or DOCX format
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Maximum file size: 10 MB
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Paper should follow the IEEE format
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Include author details on the first page
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Ensure all author details are correctly filled
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Upload a PDF or Word document of the paper
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Only one submission per author will be accepted
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Follow the formatting guidelines provided
                                        </li>
                                    </ul>
                                </div>
                                {/* Important Notes */}
                                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-5">
                                    <h3 className="md:text-xl font-bold text-[#14AE5C] mb-4 flex items-center gap-2">
                                        <i className="fi fi-ts-octagon-exclamation flex items-center"></i>
                                        Important Notes
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Verify the accuracy of the contact details before submission.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> The first author will be contacted for further correspondence.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Submissions must be made before the deadline date.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Late submissions may not be considered for review.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <section className=''>
                                <div className="lg:max-w-4xl max-w-xl w-full mx-auto col-span-2 ">
                                    <div className=" :bg-gray-900 lg:px-20 md:px-5 ">
                                        <div className=" mx-auto max-w-screen-xl  bg-gradient-to-br from-white to-gray-50 md:p-6 border border-gray-200 shadow-sm rounded-xl      p-3 ">
                                            <form className="w-full   grid lg:grid-cols-2 grid-cols-1 md:gap-5" ngNativeValidate onSubmit={handleSubmit}>
                                                <div className=' '>
                                                    <label for="Paper_Title" className="block mb-2 text-sm text-[#1B1F3B mt-4 ">
                                                        Paper Title
                                                    </label>
                                                    <input type="text" ngModel id="Paper_Title" name="Paper_Title" value={formData.Paper_Title} onChange={handleFileInputChange} className="shadow-sm bg-white    text-black       border text-sm  rounded-md border-gray-200  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4" placeholder="Enter the Paper Title" required />
                                                </div>
                                                <div>
                                                    <label for="Author_FUll_Name" className="block mb-2 text-sm text-[#1B1F3B] mt-4">
                                                        Name
                                                    </label>
                                                    <input type="text" name="Author_FUll_Name" id="Author_FUll_Name" ngModel value={formData.Author_FUll_Name} onChange={handleFileInputChange} className="shadow-sm bg-white   border    rounded-md border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4        "
                                                        placeholder="Enter Your Name" required />
                                                </div>
                                                <div>
                                                    <label for="Email_Address" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4  ">
                                                        Email
                                                    </label>
                                                    <input type="Email_Address" name="Email_Address" id="Email_Address" value={formData.Email_Address} ngModel onChange={handleFileInputChange} className="shadow-sm bg-white   border   rounded-md border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                        placeholder="name@gmail.com" required />
                                                </div>
                                                {/* <div>
                                                    <label for="number" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                        Contact Number
                                                    </label>
                                                    <input type="text" name="number" id="number" value={formData.number} ngModel onChange={handleFileInputChange} className="shadow-sm bg-white    border    rounded-md border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                        placeholder="Enter Your Mobile Number" required
                                                    />
                                                </div> */}
                                                <div>
                                                    <label for="Institution_Name" className="block mb-2 text-sm   text-[#1B1F3B] mt-4 " >
                                                        Institution Name
                                                    </label>
                                                    <input type="text" name="Institution_Name" id="Institution_Name" value={formData.Institution_Name} ngModel onChange={handleFileInputChange} className="shadow-sm      rounded-md border-gray-200 border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4" placeholder="Enter Your Institute" required />
                                                </div>
                                                <div>
                                                    <label for="Paper_Track" className="block mb-2 text-sm text-[#1B1F3B] mt-4 " >
                                                        Paper Track
                                                    </label>
                                                    <select name="Paper_Track" id="Paper_Track" value={formData.Paper_Track || ""}
                                                        onChange={handleFileInputChange}
                                                        required
                                                        className="shadow-sm bg-white border rounded-md border-gray-200 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2 mt-4"                                                >
                                                        <option value="">Select Track</option>
                                                        <option  >Intelligent Systems and Applications</option>
                                                        <option  >Computational Intelligence & Soft Computing</option>
                                                        <option  >Artificial Intelligence and Knowledge Engineering</option>
                                                        <option  >Machine Learning and Deep Learning</option>
                                                        <option  >Data Science and Intelligent Decision Support</option>
                                                        <option  >Big Data Analytics and Processing</option>
                                                        <option  >Cybersecurity and Information Assurance</option>
                                                        <option  >Internet of Things (IoT) and Sensor Networks</option>
                                                        <option  >Cloud, Edge, and Fog Computing</option>
                                                        <option  >Robotics, Control Systems, and Automation</option>
                                                        <option  >Natural Language Processing and Chatbots</option>
                                                        <option  >Computer Vision and Image Processing</option>
                                                        <option  >Bioinformatics and Computational Biology</option>
                                                        <option  >Quantum Computing and Emerging Technologies</option>
                                                        <option  >Smart Cities, Smart Grid, and Intelligent Environments</option>
                                                    </select>
                                                </div>
                                                <div className="md:col-span-2 mt-5">
                                                    <label className="block mb-2 text-sm text-[#1B1F3B]">Upload Paper</label>
                                                    <input type="file" id="Paper_File" name="Paper_File" onChange={handleFileInputChange} accept=".pdf,.doc,.docx" required className="w-full p-2   border text-sm  rounded-md border-gray-200 ring-1 ring-transparent bg-white focus:ring-[#0B4F8E] focus:outline-none" />
                                                    <p className=" text-xs mt-3">* Maximum File Size: 10 MB</p>
                                                </div>
                                                {/* {uploadFile && (
                                                    <div className="mt-4 bg-white p-3 rounded shadow flex justify-between items-center">
                                                        <div className="text-sm text-gray-800 truncate w-full pr-4">{uploadFile.name}</div>
                                                        <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700 transition cursor-pointer" title="Remove file"   >
                                                            ✕
                                                        </button>
                                                    </div>
                                                )} */}
                                                <div className="text-center mx-auto mt-5  md:col-span-2">
                                                    <button type="submit" disabled={status === 'Sending...'}
                                                        className="py-3 px-5 text-sm  bg-primary-blue-color  text-center  bg-[#14AE5C] cursor-pointer font-semibold hover:text-primary-blue-color rounded-md    text-white   bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300    " >
                                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Paper'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Contct />
        </>
    )
}

export default Abstracting

