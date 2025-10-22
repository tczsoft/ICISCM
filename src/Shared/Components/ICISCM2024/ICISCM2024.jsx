import React, { useEffect, useState } from 'react'
import Proceeding2024 from "../Proceedings/Proceeding2024";
import { Link } from 'react-router-dom';
import { FaBookOpen, FaDownload, FaFilePdf, FaGlobeAmericas } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import Marquee from 'react-fast-marquee';
import { MdOutlineCancel } from 'react-icons/md';
import { RiNewspaperFill } from 'react-icons/ri';
import { IoLocationSharp } from 'react-icons/io5';


export default function ICISCM2024() {


    const [showProceedings2, setShowProceedings2] = useState(false);

    const handleViewProceedings2 = () => {
        setShowProceedings2(true);
    };

    const handleCloseModal = () => {
        setShowProceedings2(false);
    };

    const handleDownloadPDF = () => {
        // Replace with the actual path to your PDF file
        const pdfUrl = '/assets/documents/Proceeding2024.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ICISCM conference_proceedings_2024.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const date2024 = [

        { Dates: "20-01-2024", Title: "Abstract Submission" },
        { Dates: "09-02-2024", Title: "Abstract Acceptance Date" },
        { Dates: "26-02-2024", Title: "Full Paper Submission" },
        { Dates: "04-05-2024", Title: "Acceptance Notifications" },
        { Dates: "15-06-2024", Title: "Registration Deadline / Final Paper" },
        { Dates: "10-07-2024", Title: "Conference Date" },
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

    const organizing = [
        {
            name: "Dr. Putri Mentari Endraswari",
            university: "University of Bangka Belitung",
            expertise: "Department of Information Technology",
            country: "Indonesia"
        },
        {
            name: "Dr. Jhanghiz Syahrivar",
            university: "President University",
            expertise: "Department of Information Technology",
            country: "Indonesia "
        },
        {
            name: "Dr. Alven Ritonga",
            university: "Universitas Wijaya Putra",
            expertise: "Department of Computer Science",
            country: "Indonesia"
        },

        {
            name: "Dr. Sinarring Azi Laga",
            university: "Hayam Wuruk Perbanas University",
            expertise: "Department of  Informatics",
            country: "Indonesia"
        },

        {
            name: "Dr. Mahendra Wibawa",
            university: "Sekolah Tinggi Informatika & Komputer Indonesia",
            expertise: "Department of  Visual Communication Design Programme",
            country: "Indonesia"
        },

    ]
    const technical = [
        {
            name: "Dr. Aram Sabr Tahr",
            university: "Cyprus International University",
            expertise: "Department of Computer Science and Engineering",
            country: "Cyprus"
        },
        {
            name: "Dr. Hua Qu",
            university: "Tianjin Medical University",
            expertise: "Department of Biomedical Engineering and Technology",
            country: "China"
        },
        {
            name: "Dr. Nor Musliza Mustafa",
            university: "Selangor Islamic University",
            expertise: "Department of Creative Multimedia and Computing",
            country: "Malaysia"
        },
        {
            name: "Dr.  Dongfeng Li",
            university: "Fuyang People's Hospital",
            expertise: "Department of Medical Sciences",
            country: "China"
        },
        {
            name: "Dr. Badamasi Sani Mohammed",
            university: "Al-Qalam University Katsina",
            expertise: "Department of Economics",
            country: "Nigeria"
        },
        {
            name: "Dr. Hansi Gunasinghe",
            university: "Sabaragamuwa University of Sri Lanka",
            expertise: "Department of Computing and Information Systems",
            country: "Sri Lanka"
        },
        {
            name: "Dr. Wasan Alamro",
            university: "Auckland University of Technology",
            expertise: "Department of Electrical and Electronics Engineering",
            country: "New Zealand"
        },
        {
            name: "Dr. Leandro N. Balico",
            university: "Federal University of Roraima",
            expertise: "Department of Computer Science and Engineering",
            country: "Brazil"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            university: "Cagayan State University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Philippines"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            university: "ESA Business School",
            expertise: "Department of Computer Science and Engineering",
            country: "Lebanon"
        },
        {
            name: "Dr. Arindom Kundu",
            university: "Daffodil International University",
            expertise: "Department of Computer Science and Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Stanley Adiele Okolie",
            university: "Federal University of Technology Owerri",
            expertise: "Department of Information and Communication Technology",
            country: "Nigeria"
        },
        {
            name: "Dr. Twana A. Hamad",
            university: "Harran University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Turkiye"
        },
        {
            name: "Dr.S. Murali Krishna",
            university: "Jawaharlal Nehru Technological University Anantapur",
            expertise: "Department of Information Technology",
            country: "India"
        },
        {
            name: "Dr. PPG Dinesh Asanka",
            university: "University of Kelaniya",
            expertise: "Department of  Industrial Management",
            country: "Sri Lanka"
        },
        {
            name: "Dr. Ameer Hamza",
            university: "HITEC University",
            expertise: "Department of Computer Engineering",
            country: "Pakistan"
        },
        {
            name: "Dr. Gabriel A. Ogunmola",
            university: "Sharda University",
            expertise: "Department of Information Technology",
            country: "Uzbekistan "
        },
        {
            name: "Dr. Nour Moustafa",
            university: "American University of the Middle East",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Kuwait"
        },
        {
            name: "Dr.Ing. Sian Lun Lau",
            university: "Sunway University",
            expertise: "Department of Engineering and Technology",
            country: "Malaysia"
        },
        {
            name: "Dr. Ziquan Feng",
            university: "Hanyang University",
            expertise: "Department of  Multicultural Pedagogy",
            country: "South Korea"
        }
    ];




    const editorial = [
        {
            name: "Dr. Sowmipriya Rajendiran",
            university: "International School of Information Processing Sciences",
            expertise: "Department of Computer Science and Engineering ",
            country: "France"
        },
        {
            name: "Dr. Yijun Wang",
            university: "Shandong University",
            expertise: "Department of Computer Science",
            country: "China"
        },
        {
            name: "Dr. Hung Nguyen",
            university: "Nha Trang university",
            expertise: "Department of Information Technology",
            country: "Vietnam"
        },
        {
            name: "Dr. Muhammad Umair Hassan",
            university: "Norwegian University of Science and Technology",
            expertise: "Department of ICT and Natural Sciences",
            country: "Norway"
        },
        {
            name: "Dr. Rahman Shafique",
            university: "Yeungnam University",
            expertise: "Department of Information and Communication Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Stephen Ekwe",
            university: "University of Cape Town",
            expertise: "Department of Electrical Engineering",
            country: "South Africa"
        },
        {
            name: "Dr. Ali A.Abdul saeed",
            university: "wasit university",
            expertise: "Department of Computer Science",
            country: "Iraq"
        },
        {
            name: "Dr. Meenakshi Gupta",
            university: "National University of Singapore",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Singapore"
        },
        {
            name: "Dr.R. Arun Kumar",
            university: "University of South Wales",
            expertise: "Department of Digital Forensics & Cyber Security",
            country: "United Kingdom"
        },
        {
            name: "Dr. Asef Shahriar",
            university: "Khulna University of Engineering & Technology",
            expertise: "Department of Industrial Engineering and Management",
            country: "Bangladesh"
        },
        {
            name: "Dr. Ghasem Abbasi",
            university: "Islamic Azad University",
            expertise: "Department of  Mathematics and Statistics",
            country: "Iran"
        },
        {
            name: "Dr. Qian Liu",
            university: "Krirk University",
            expertise: "Department of Information Technology",
            country: "Thailand"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            university: "Cavendish University",
            expertise: "Department of Computer Science and Engineering",
            country: "Uganda"
        },
        {
            name: "Dr. Sakshi dua",
            university: "Lovely Professional University",
            expertise: "Department of Computer Applications",
            country: "India"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            university: "Metropolitan Autonomous University",
            expertise: "Department of Electronics Engineering",
            country: "Mexico"
        },
        {
            name: "Dr. Marcelo M S Souza",
            university: "Universidade Federal do Ceará",
            expertise: "Department of Computer Science and Engineering",
            country: "Brazil"
        },
        {
            name: "Dr. Maryam Anwer",
            university: "Majma university",
            expertise: "Department of Industrial Engineering",
            country: "Saudi Arabia"
        },
        {
            name: "Dr. Asma Sbeih",
            university: "Palestine Ahliya University",
            expertise: "Department of Information Technology",
            country: "Palestine"
        },
        {
            name: "Dr. Brahim Issaoui",
            university: "Qassim University",
            expertise: "Department of Economics and Social Sciences",
            country: "Saudi Arabia"
        },
        {
            name: "Dr.M. Manojprabu",
            university: "Anna University Chennai",
            expertise: "Department of Biomedical Engineering",
            country: "India"
        },
        {
            name: "Dr. Ammar Amjad",
            university: "National Yang Ming Chiao Tung University",
            expertise: "Department of Computer Science and Engineering",
            country: "Taiwan"
        },
        {
            name: "Dr. Ajaegbu Chigozirim",
            university: "Babcock University",
            expertise: "Department of Information Technology",
            country: "Nigeria"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            university: "Qatar University",
            expertise: "Research Scientist at Qatar Mobility Innovations Center",
            country: "Qatar"
        },
        {
            name: "Dr. Leo John Baptist",
            university: "Botho University",
            expertise: "Department of Information Technology",
            country: "Botswana"
        },
        {
            name: "Dr. Mahdiyeh Khazaneha",
            university: "Kerman University of Medical Sciences",
            expertise: "Department of  Neurology Research Center",
            country: "Iran"
        },
        {
            name: "Dr.R. Lakshmana Kumar",
            university: "Tagore Institute of Engineering & Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "India"
        },
        {
            name: "Dr. Ghulam Gilanie",
            university: "The Islamia University of Bahawalpur",
            expertise: "Department of Computer Science",
            country: "Pakistan"
        },
        {
            name: "Dr.A. Kushal Kanwar",
            university: "Shoolini University",
            expertise: "Department of Artificial Intelligence, Computers and Data science",
            country: "India"
        }
    ];


    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const location = [
        { location: "Germany" },
        { location: "Kuwait" },
        { location: "USA" },
        { location: "Cambodia" },
        { location: "India" },
        { location: "Myanmar" },
        { location: "Bahrain" },
        { location: "China" },
        { location: "Kenya" },
        { location: "Canada" },
        { location: "Uganda" },
        { location: "Turkey" },
        { location: "Japan" },
        { location: "Egypt" },
        { location: "UAE" },
        { location: "Australia" },
        { location: "Indonesia" },
        { location: "United Kingdom" }
    ];



    const [showProceedings, setShowProceedings] = useState(false);

    const handleViewProceedings = () => {
        setShowProceedings((prev) => !prev);
    };



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
                            <h2 className="lg:text-[#269C53] md:text-2xl font-bold text-center   text-white">ICISCM-2024</h2>
                            <h1 className="text-2xl xl:text-5xl lg:text-3xl font-bold leading-snug text-center  lg:text-black text-white">
                                1<sup>st</sup>  International Conference on  Intelligent Systems and  Computational Methods
                            </h1>
                            <div>
                                <div className="flex sm:flex-row flex-col gap-2 sm:gap-5 justify-center text-center mb-3">
                                    <p className="text-white lg:text-gray-800"><span className="font-medium text-lg">Date:</span> 10<sup>th</sup> July 2024</p>
                                    <p className="text-white lg:text-gray-800"><span className="font-medium text-lg">Mode:</span> Hybrid (Online & On-Site)</p>
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
                            <span className="relative z-10 text-white drop-shadow-md font-medium">Proceedings - 2024</span>
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
                                    <Proceeding2024 />
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



                <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem]  md:px-5 px-3 mx-auto  pt-10" >
                    <div className='flex flex-col gap-3 '>
                        <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                            Editorial Board
                        </h1>
                        <p className=" md:text-base text-sm text-justify leading-[30px]"> Our conference is led by a dedicated team of professionals and academicians from diverse institutions and research backgrounds, working together to ensure a high-quality, impactful, and smooth conference experience.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                            Roles and Responsibilities
                        </h1>
                        <p className="  md:text-base text-sm text-justify leading-[30px]">  The Organizing Committee plays a crucial role in the successful execution of the International Conference on Intelligent Systems and Computational Methods. Their responsibilities include strategic planning, coordinating with keynote speakers and session chairs, managing paper submissions and peer reviews, and overseeing the publication process. They ensure smooth logistics, including venue arrangements, registration, sponsorships, and publicity. Additionally, the committee fosters collaboration among academic, industrial, and research communities, aiming to provide a platform for knowledge exchange, networking, and innovation in the field of intelligent systems and computational methods.

                        </p>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                            Significance of the Committee
                        </h1>
                        <p className=" md:text-base text-sm text-justify leading-[30px]">
                            The Organizing Committee serves as the backbone of the conference, bringing together diverse expertise to ensure academic excellence and operational efficiency. Their involvement reflects a commitment to fostering meaningful discourse in the fields of intelligent systems and computational methods. By coordinating across various domains—from technical content to international collaborations—they ensure the conference meets global standards and creates lasting impact for researchers, students, and practitioners alike.
                        </p>
                    </div>
                    <div className="">

                        <div className="">
                            <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53] mb-4 text-center scroll-mt-[90px]" id="organizing">Organizing Committee</h2>
                            <div className="space-y-2">
                                {organizing.map((item, index) =>
                                    <div key={index} className="flex gap-2 items-center">
                                        <FaCircleUser className='text-[18px] flex shrink-0 text-[#269C53]' />
                                        <p className="leading-relaxed "><span className=" text-[#269C53] text-[16px] font-semibold  text-center ">{item.name} - </span><span className="text-[16px] font-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] font-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] font-medium text-center opacity-80">{item.country}.</span></p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53] mb-4 text-center scroll-mt-[100px]" id="technical">Technical Program Committee</h2>
                            <div className="space-y-2">
                                {technical.map((item, index) =>
                                    <div key={index} className="flex gap-2 items-center">
                                        <FaCircleUser className='text-[18px] flex shrink-0 text-[#269C53]' />
                                        <p className="leading-relaxed "><span className=" text-[#269C53] text-[16px] font-semibold  text-center ">{item.name} - </span><span className="text-[16px] font-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] font-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] font-medium text-center opacity-80">{item.country}.</span></p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  mb-4 text-center scroll-mt-[100px]" id="advisory">International Advisory Board Committee Members</h2>
                            <div className="space-y-2">
                                {editorial.map((item, index) =>
                                    <div key={index} className="flex gap-2 items-center">
                                        <FaCircleUser className='text-[18px] flex shrink-0 text-[#269C53]' />
                                        <p className="leading-relaxed "><span className=" text-[#269C53] text-[16px] font-semibold  text-center ">{item.name} - </span><span className="text-[16px] font-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] font-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] font-medium text-center opacity-80">{item.country}.</span></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </section>



                <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem]   pt-10 mx-auto md:px-5 px-3">
                    <div className="">
                        <h1 className=" mx-auto font-semibold lg:text-2xl text-lg pb-5 text-center text-[#269C52]">
                            Call for Papers
                        </h1>
                        <p className=" text-sm md:text-base leading-[30px] text-justify mb-4">
                            We warmly invite researchers, academicians, industry professionals, innovators, and students from around the world to contribute original and unpublished research to the International Conference on Intelligent Systems and Computational Methods (ICISCM 2024). This premier event provides a global platform to foster collaboration, ignite innovative thinking, and highlight groundbreaking research that is shaping the next generation of intelligent and computational technologies.
                        </p>
                        <p className=" text-sm md:text-base leading-[30px] text-justify ">
                            In today’s digital-first and data-driven world, intelligent systems and computational methods are driving transformation across industries, revolutionizing decision-making, and improving quality of life in areas ranging from healthcare and automation to smart cities and sustainable development. ICISCM 2024 aims to bring together a vibrant community of scholars and practitioners to exchange knowledge, address pressing challenges, and present forward-looking solutions in this rapidly evolving field. Conference Topics include, but are not limited to:
                        </p>
                    </div>


                    <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 max-w-7xl mx-auto">
                        {[
                            { title: "Artificial Intelligence and Machine Learning" },
                            { title: "Deep Learning, Reinforcement Learning, and Generative AI" },
                            { title: "Internet of Things (IoT), Edge, and Fog Computing" },
                            { title: "Cybersecurity and Privacy-Preserving Computing" },
                            { title: "High-Performance and Cloud Computing" },
                            { title: "Data Science, Big Data Analytics, and Visualization" },
                            { title: "Optimization Techniques and Computational Intelligence" },
                            { title: "Automation, Robotics, and Intelligent Control Systems" },
                            { title: "Natural Language Processing and Human–Computer Interaction" },
                            { title: "Sustainable and Green Computing Solutions" },
                            { title: "Digital Twin and Smart Infrastructure Modeling" },
                            { title: "Federated Learning and Collaborative AI Systems" },
                            { title: "Computer Vision and Intelligent Perception Systems" },
                            { title: "Explainable AI and Responsible Machine Learning" },
                            { title: "Autonomous Systems and Intelligent Transportation" }
                        ].map((track, index) => (
                            <>
                                <div key={index} className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm md:p-6 p-4 hover:border-[#269C52] hover:shadow-lg transition duration-300"  >
                                    <div className="flex-1">
                                        <div className='flex items-center gap-3'>
                                            <div className="bg-[#269C52] text-[#269C52] rounded-full p-1.5">
                                            </div>
                                            <h3 className="text-gray-800 font-medium   text-base group-hover:text-[#269C52] transition-colors">
                                                {track.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </section>


                <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem]   pt-12  mx-auto md:px-5 px-3">
                    <h1 className=" mx-auto font-semibold lg:text-2xl text-lg  text-[#269C52]">
                        Conference Tracks
                    </h1>

                    <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Artificial Intelligence, Machine Learning & Deep Learning",
                                desc: [
                                    "Intelligent data analytics and predictive modeling",
                                    "Supervised, unsupervised, and reinforcement learning",
                                    "Neural networks, deep learning, and neural computation",
                                    "Ethical, robust, and privacy-preserving AI systems"
                                ]
                            },
                            {
                                title: "Intelligent Systems for IoT, Edge & Fog Computing",
                                desc: [
                                    "IoT-driven intelligent applications and smart sensing",
                                    "Edge and fog computing for latency-sensitive systems",
                                    "Serverless and event-driven intelligent architectures",
                                    "Smart cities and intelligent urban systems"
                                ]
                            },
                            {
                                title: "Big Data, Cloud & Scalable Computing",
                                desc: [
                                    "Computational intelligence in cloud environments",
                                    "Big data pipelines, storage, and visualization",
                                    "Scalable and resilient data infrastructure",
                                    "Resource management in distributed computing"
                                ]
                            },
                            {
                                title: "Blockchain & Trustworthy Computing",
                                desc: [
                                    "Blockchain-enabled computational trust models",
                                    "Secure, transparent, and decentralized systems",
                                    "Cybersecurity for intelligent applications",
                                    "Trust, compliance, and accountability in AI"
                                ]
                            },
                            {
                                title: "Sustainable & Future-Ready Computational Methods",
                                desc: [
                                    "Energy-efficient and green computing approaches",
                                    "Sustainable algorithms and intelligent infrastructures",
                                    "AI for climate, governance, and global sustainability",
                                    "Future directions in adaptive and autonomous systems"
                                ]
                            }
                        ].map((track, index) => (
                            <>
                                <div key={index} className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm md:p-6 p-4 hover:border-[#269C52] hover:shadow-lg transition duration-300"  >
                                    <div className="flex-1">
                                        <div className='flex items-center gap-3'>
                                            {/* <div className="bg-[#269C52] text-[#269C52] rounded-full p-1.5">
                                            </div> */}
                                            <h3 className="text-gray-800 font-bold md:text-lg text-base group-hover:text-[#269C52] transition-colors">
                                                {track.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm md:text-base mt-2 text-justify leading-[30px]">
                                            {track.desc.map((point, i) => (
                                                <li className='list-disc list-inside' key={i}>{point}</li>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </section>



                <section className="flex flex-col md:gap-10 gap-5   max-w-[90rem]   pt-10  mx-auto md:px-5 px-3">
                    <div className=''>
                        <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg md:mb-4 mb-3">
                            Key Dates
                        </h1>
                        <p className="md:text-base text-sm text-justify leading-[30px] mb-5">
                            Participants are encouraged to take note of the important deadlines for the International Conference on Intelligent Systems and Computational Methods. These dates include the submission of full papers, notification of acceptance, registration deadlines, and the final camera-ready submission. Staying informed of these key milestones will ensure timely participation and help authors prepare their contributions effectively. All deadlines are strictly followed to maintain the integrity of the review and publication process.
                        </p>
                        <div className=" px-4 pt-5">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {date2024.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <i className="fi fi-rs-calendar flex items-center text-[#56AE58]"></i>
                                            <p className="md:text-xl text-base font-semibold">{item.Dates}</p>
                                        </div>
                                        <p className="text-gray-700 md:text-base text-sm">{item.Title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>



                <div>
                    <div className="max-w-[90rem] mx-auto  md:px-5 px-3 ">
                        <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center pt-10 pb-3">Paper Evaluation Standards</h2>
                        <p className="md:text-base text-sm text-justify leading-[30px]">
                            At ICISCM-2024, all accepted papers were considered for the prestigious Best Paper Award, recognizing exceptional contributions in  intelligent systems and computational methods. The Technical Program Committee (TPC) conducted a thorough evaluation to identify submissions that demonstrated originality, scholarly rigor, and practical impact.</p>
                        <div className='mt-4'>
                            <p className="font-semibold  text-lg  mb-3">Evaluation Criteria:</p>
                            <ul className='list-disc list-inside space-y-1 mb-4'>
                                <li className='md:text-base text-sm text-justify'>Innovative and original research ideas</li>
                                <li className='md:text-base text-sm text-justify'>Clear, well-structured, professional manuscript</li>
                                <li className='md:text-base text-sm text-justify'>Strong academic and practical contributions</li>
                                <li className='md:text-base text-sm text-justify'>Significant and impactful results</li>
                                <li className='md:text-base text-sm text-justify'>Engaging and effective presentation</li>
                                <li className='md:text-base text-sm text-justify'>Real-world relevance for industry</li>
                                <li className='md:text-base text-sm text-justify'>Full adherence to submission guidelines</li>
                                <li className='md:text-base text-sm text-justify'>Extra recognition for interactive delivery</li>
                            </ul>
                            <p className="md:text-base text-sm text-justify leading-[30px]">This award honors papers that exemplify innovation, academic excellence, and meaningful real-world contributions, highlighting the most outstanding research showcased at ICISCM-2024.</p>
                        </div>
                        <div className="mt-8">
                            <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center mb-5 ">Conference Statistics</h2>
                            <p className="md:text-base text-sm text-justify leading-[30px] mb-4">ICISCM-2024 witnessed remarkable global participation, underscoring its strong reputation as a premier platform for advancing research, innovation, and collaboration in intelligent systems and computational technologies. Every submission underwent a thorough double-blind peer-review process to uphold the highest standards of quality, innovation, and scholarly integrity. The accepted papers highlight groundbreaking research and practical advancements, showcasing diverse contributions that push the boundaries of intelligent systems, computational methods, and engineering applications.</p>
                            <p className="font-semibold  text-lg  mb-3">Submission Overview:</p>
                            <div className="flex flex-col justify-center items-center">
                                <div className="space-y-5  ">
                                    <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Total Full Paper Submissions: 224</p></div>
                                    <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Accepted Papers: 38</p></div>
                                    <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Acceptance Rate: 17%</p></div>
                                    <div className="flex gap-3"><RiNewspaperFill className=' text-[#269C53] text-xl flex shrink-0 ' /> <p className="text-gray-700 md:text-base text-sm">Countries Represented: 18</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]   mb-3 ">Countries Represented</h2>
                            <p className="text-black text-center md:text-lg text-base font-semibold leading-[30px] mb-6">The conference proudly brought together contributions from a wide range of countries and leading institutions, fostering a truly global exchange of knowledge and innovation:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 max-w-[900px] mx-auto">
                                {location.map((item, index) => (<div key={index} className="flex gap-2"> <IoLocationSharp className=' text-[#269C53] text-xl flex shrink-0 md:mt-0.5' /> <p className="text-gray-700 md:text-base text-sm">{item.location}</p></div>))}
                            </div>

                            <p className="md:text-base text-sm text-justify leading-[30px] mt-5 ">
                                This global participation underscores ICISCM’s position as a premier hub for sharing groundbreaking research and advancing international collaboration.
                            </p>
                        </div>
                    </div>


                    <section className=" px-5  bg-white text-gray-800 max-w-[90rem] mx-auto mt-8">
                        {/* Heading */}
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaBookOpen className="text-2xl text-[#269C53]" />
                            <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                                Published Papers
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="md:text-base text-sm text-justify leading-[30px]">
                            ICISCM-2024 proudly showcases a distinguished collection of 38 peer-reviewed research papers selected from a total of 224 submissions, reflecting an acceptance rate of 17%. Each paper has been carefully evaluated to ensure originality, quality, and relevance, highlighting the latest breakthroughs in intelligent systems and computational methodologies.
                        </p>
                        <p className=" mb-4 mt-2  md:text-base text-sm text-justify leading-[30px]">
                            The published works span diverse domains, including artificial intelligence, machine learning, data science, optimization techniques, and next-generation smart computing applications. Together, these contributions embody both academic rigor and practical significance, advancing the conference’s vision of driving innovation, fostering collaboration, and shaping the future of intelligent and computational technologies.
                        </p>

                        <div className="flex justify-center items-center">
                            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 md:text-base text-sm text-justify">
                                <li>Smart Transportation and Mobility Systems</li>
                                <li>IoT in Healthcare and Intelligent Automation</li>
                                <li>Artificial Intelligence and Machine Learning in Engineering</li>
                                <li>Renewable and Sustainable Energy Systems</li>
                                <li>Advanced Materials and Computational Construction Technologies</li>
                                <li>Cybersecurity and Digital Trust in Intelligent Platforms</li>
                                <li>Intelligent and Sustainable Agricultural Practices</li>
                                <li>Data Analytics and Decision Support Systems</li>
                                <li>Computational Approaches for Environmental Sustainability</li>

                            </ul>
                        </div>
                        <p className="md:text-base text-sm text-justify leading-[30px] mb-8 ">
                            We extend our warmest thanks to the global community of participants whose support turned ICISCM-2024 into an outstanding success.
                        </p>

                    </section>



                    <section className="md:px-5 px-3  bg-white text-gray-800 max-w-[1400px] mx-auto">
                        <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53]  text-center">
                           Best Paper Award ICISCM-2024
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-5 items-center bg-gray-50 py-5 px-4    rounded-xl shadow-md border border-gray-100 mt-10">
                            <div className="flex flex-col justify-center items-center  lg:order-1 order-2">
                                <div className="relative">
                                    <div className='w-fit mx-auto  rounded-xl'>
                                        <img
                                            src="/assets/Images/certificate/2024.jpg"
                                            alt="Certificate"
                                            className="w-[340px] rounded-lg shadow-lg  transition-transform duration-300 cursor-pointer "
                                            onClick={openDialog}
                                        />
                                    </div>
                                </div>
                                <p
                                    className="text-sm text-[#269C53] mt-5 underline cursor-pointer text-center animate-bounce "
                                    onClick={openDialog}
                                >
                                    View the certificate
                                </p>

                                {isDialogOpen && (
                                    <div className="fixed inset-0 bg-gray-800/50 backdrop-blur-sm flex justify-center items-center z-50 animate-in fade-in duration-300 p-4">
                                        <div className="relative py-5  p-4 max-w-3xl w-full  bg-gray-100/30 rounded-lg shadow-xl border border-white/20 animate-in zoom-in duration-300">
                                            <button
                                                className="absolute -top-4 -right-4 bg-[#269C53] p-2 rounded-full shadow-lg text-gray-50 hover:text-gray-800 text-xl cursor-pointer"
                                                onClick={closeDialog}
                                            >
                                                <MdOutlineCancel className='text-2xl flex shrink-0' />
                                            </button>
                                            <img
                                                src="/assets/Images/certificate/2024.jpg"
                                                alt="Certificate"
                                                className="w-full rounded-lg"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='lg:order-2 order-1'>
                                <p className="md:text-lg text-base mb-8 text-justify">
                                    For redefining how robots perceive and navigate the world by harnessing deep learning for precise scene interpretation, delivering groundbreaking strides in autonomy and safety, we proudly present the Best Paper Award of ICISCM-2024 to:
                                </p>

                                <div className="  space-y-8">
                                    <h3 className="md:text-xl text-lg font-bold text-[#1B1F3B] mt-1">
                                        “SEMANTIC SEGMENTATION USING DEEP NEURAL NETWORKS FOR SCENE INTERPRETATION IN OFF-ROAD ROBOTICS”
                                    </h3>
                                    <p className=" text-base text-center">
                                        Authored by{" "} <br />
                                        <span className="font-bold text-[#269C53] text-xl">
                                           Basava Ramanjaneyulu Gudivaka
                                        </span> <br />
                                        Raas Infotek, Newark, Delaware, USA.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </section>
                    <p className="mt-6 md:text-base text-sm text-justify leading-[30px] max-w-[90rem] mx-auto  md:px-5 px-3  ">
                       The recognized paper “SEMANTIC SEGMENTATION USING DEEP NEURAL NETWORKS FOR SCENE INTERPRETATION IN OFF-ROAD ROBOTICS” presents a method to help robots understand off-road environments better. It uses deep neural networks to identify and separate different parts of the terrain, like paths, plants, and obstacles. This helps robots navigate safely, make real-time decisions, and work more independently in rough, natural areas, making it an important step for smart robotics and computer vision.
                    </p>

                </div>



                <div className='max-w-[90rem] md:px-5 px-3   pt-10 mx-auto'>
                    <div>
                        <h1 className="text-center w-fit mx-auto rounded-full text-[#269C53]  font-semibold md:text-2xl text-lg">
                            ICISCM-2024 Conference Proceedings
                        </h1>
                        <p className="md:text-base text-sm text-justify leading-[30px] mt-4">The International Conference on Intelligent Systems and Computational Methods (ICISCM-2024) will feature high-quality, peer-reviewed research papers presented during the conference. The proceedings will be published digitally to ensure global accessibility, visibility, and academic recognition. Each paper will showcase innovative contributions and advancements in the domains of intelligent systems, computational methods, artificial intelligence, data science, and automation technologies.</p>
                    </div>
                    <div className="flex justify-center mt-4 lg:px-5 px-0">
                        <button
                            className="bg-[#269C53] w-fit p-2 px-4 rounded-lg flex lg:text-lg text-base text-white  font-medium cursor-pointer items-center gap-2"
                            onClick={handleViewProceedings}
                        >
                            <FaFilePdf className='flex shrink-0 text-xl' /> View  Conference Proceedings
                        </button>
                    </div>
                    {showProceedings && <Proceeding2024 />}
                </div>



                <div>
                    <div className="    pt-10   px-4">
                        <h1 className="text-center w-fit mx-auto rounded-full text-[#269C53]  font-semibold md:text-2xl text-lg">
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




            </div>
        </>
    )
}
