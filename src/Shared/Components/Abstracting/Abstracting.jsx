
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
            const mailPromise = fetch('https://iciscm.com/api/send_mail.PHP', {
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
                        <div className=' text-center mx-auto flex flex-col justify-center md:mb-5 mb-3'>
                            <h1 className=" text-center text-[#269C52] rounded-full  font-semibold  lg:text-2xl   text-lg ">
                                Paper Submission
                            </h1>
                            <p className="mt-4 text-sm md:text-base leading-[30px] text-justify ">
                                We welcome researchers, academicians, and industry professionals to submit original, high-quality research papers in intelligent systems and computational methods. Each submission will undergo a thorough peer-review process, and accepted papers will be published in the conference proceedings and considered for inclusion in reputable international journals.
                            </p>
                            <div className="mt-5">
                                <p className=" text-[#269C52]  font-semibold  lg:text-2xl  mb-3 text-lg text-start">Registration Guidelines</p>
                                <p className="text-sm md:text-base leading-[30px] text-justify ">ICISCM-2025 is pleased to offer free registration for all participants, making knowledge-sharing and collaboration accessible to everyone.</p>
                            </div>
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
                                            <span className="text-[#14AE5C]">•</span> Enter the details of all authors.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Accepted formats: PDF or DOCX.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> File size must not exceed 10 MB.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Papers must follow the IEEE format.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Submit only original and unpublished research papers.
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
                                            <span className="text-[#14AE5C]">•</span> Provide a contact email address.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Ensure contact details are correct.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Plagiarism more than 25% will cause rejection.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> Submit before the deadline; late papers not accepted.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#14AE5C]">•</span> All papers will be peer-reviewed before publication.
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
                                                        <option value="Advanced AI & Machine Learning" >Advanced AI & Machine Learning</option>
                                                        <option value="Intelligent IoT, Edge & Fog Solutions" >Intelligent IoT, Edge & Fog Solutions</option>
                                                        <option value="Big Data & Cloud-Scale Computing" >Big Data & Cloud-Scale Computing</option>
                                                        <option value="Blockchain & Trusted Computing" >Blockchain & Trusted Computing</option>
                                                        <option value="Sustainable & Future-Ready Computing" >Sustainable & Future-Ready Computing</option>
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

