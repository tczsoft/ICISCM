import EditTeam from './EditTeam'
import LastSection from '../Last/LastSection';
import Edit from '../Issues/Edit';
import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';

function EditorialBoard({ position, Name, location, name, department, university, }) {
    const [isHovered, setIsHovered] = useState(false);
    // const organize = [
    //     {
    //         position: " CHAIRMAN",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " CONVENOR",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " CONVENOR",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " CO-CONVENORS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " COORDINATORS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " COORDINATORS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " COORDINATORS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " COORDINATORS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " MEMBERS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " MEMBERS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " MEMBERS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    //     {
    //         position: " MEMBERS",
    //         name: "A.V.L.N. Sujith",
    //         department: "Principal",

    //     },
    // ]
    // const Tech = [

    //     {
    //         name: "A.V.L.N. Sujith",
    //         department: "Department of Computer Science and Engineering",
    //         university: "JNTUA University",
    //         location: "India"
    //     },

    //     {
    //         name: "Hansi Gunasinghe",
    //         department: "Department of Computing and Information Systems",
    //         university: "Sabaragamuwa University",
    //         location: "Sri Lanka"
    //     },

    //     {
    //         name: "Ijegwa David Acheme",
    //         department: "Department of Computer Science",
    //         university: "Edo State University",
    //         location: "Nigeria"
    //     },
    //     {
    //         name: "Asghar Ali Shah",
    //         department: "Department of Computer Science",
    //         university: "Bahria university",
    //         location: "Pakistan"
    //     },
    //     {
    //         name: "P. Rajesh",
    //         department: "Department of Computer Science and Engineering",
    //         university: "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology",
    //         location: "India"
    //     },
    //     {
    //         name: "Theopilus Bayu Sasongko",
    //         department: "Department of Informatics",
    //         university: "University of Amikom Yogyakarta",
    //         location: "Indonesia"
    //     },
    //     {
    //         name: "K. Kishore Kumar",
    //         department: "Department of Computer Science and Engineering",
    //         university: "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology",
    //         location: "India"
    //     },
    //     {
    //         name: "Joseph",
    //         department: "Department of Electrical and Electronics Engineering",
    //         university: "Joseph Sarwuan Tarka University",
    //         location: "Nigeria"
    //     },
    //     {
    //         name: "Thendral Puyalnithi",
    //         department: "Department of Computer Science and Engineering",
    //         university: "Kalasalingam Academy of Research and Education",
    //         location: "India"
    //     },
    //     {
    //         name: "Samir Hallaci",
    //         department: "Department of Computer Science",
    //         university: "Guelma University",
    //         location: "Algeria"
    //     },
    //     {
    //         name: "Rogério Espíndola",
    //         department: "Department of Civil Engineering Program",
    //         university: "Federal University of Rio de Janeiro",
    //         location: "Brazil"
    //     },
    //     {
    //         name: "Theopilus Bayu Sasongko",
    //         department: "Department of Informatics",
    //         university: "University of Amikom Yogyakarta",
    //         location: "Indonesia"
    //     },

    //     {
    //         name: "Daban Kadhim Omar Dabbagh",
    //         department: "Department of Geography",
    //         university: "Salahaddin University",
    //         location: "Iraq"
    //     },
    //     {
    //         name: "Ajanthaa Lakkshmanan",
    //         department: "Department of Computer Science",
    //         university: "Sathyabama Institute of Science and Technology",
    //         location: "India"
    //     },
    //     {
    //         name: "Yogi Pratama",
    //         department: "Department of Medical Informatics",
    //         university: "Al Insyirah Institute of Health and Technology",
    //         location: "Indonesia"
    //     },

    //     {
    //         name: "Ziquan Feng",
    //         department: "Department of Multicultural Pedagogy",
    //         university: "Hanyang University",
    //         location: "South Korea"
    //     },

    //     {
    //         name: "D. Angeline Benitta",
    //         department: "Department of Computer Applications",
    //         university: "Hindustan Institute of Technology and Science",
    //         location: "India"
    //     },
    //     {
    //         name: "Muhammd Umer Farooq",
    //         department: "Department of Computer Science and Information Technology",
    //         university: "NED University of Engineering and Technology",
    //         location: "Pakistan"
    //     },
    //     {
    //         name: "M. Sathish kumar",
    //         department: "Department of Computer Application",
    //         university: " Hindustan Institute of Technology and Science",
    //         location: "India"
    //     },
    //     {
    //         name: "Argha Chandra Dhar",
    //         department: "Department of Computer Science and Engineering",
    //         university: "Khulna University of Engineering and Technology",
    //         location: "Bangladesh"
    //     },
    //     {
    //         name: "Tusar Kanti Dash",
    //         department: "Department of Electronics and Communication Engineering",
    //         university: "C V Raman Global University",
    //         location: "India"
    //     },
    //     {
    //         name: "Dheeraj Kumar Joshi",
    //         department: "Department of Mathematics",
    //         university: "DIT University",
    //         location: "India"
    //     },
    //     {
    //         name: " Idowu-Bismark Olabode",
    //         department: "Department of Electrical and Information Engineering",
    //         university: "Covenant University",
    //         location: "Nigeria"
    //     },
    //     {
    //         name: "Hung Nguyen",
    //         department: "Department of Information Technology",
    //         university: "Nha Trang university",
    //         location: "Vietnam"
    //     },





    // ];




    // const chairmanSection = organize.filter(item =>
    //     ["CHAIRMAN", "CONVENOR", "CO-CONVENORS"].includes(item.position.trim())
    // );
    // const coordinatorSection = organize.filter(item =>
    //     item.position.trim() === "COORDINATORS"
    // );
    // const membersSection = organize.filter(item =>
    //     item.position.trim() === "MEMBERS"
    // );


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

    return (
        <>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-10 py-5" >
                <div className='flex flex-col gap-3 '>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                        Organizing Committee
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

                {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {organize.map((member, index) => (
                        <EditTeam key={index} position={member.position} Name={member.name} department={member.department} dataAos="flip-left" />
                    ))}
                </div> */}
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
                        <h2 className="font-semibold lg:text-2xl text-lg text-[#269C53] mb-4 text-center scroll-mt-[100px]" id="advisory">International Advisory Board Committee Members</h2>
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
                {/* <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#269C53] mb-4 text-center">Chairman & Convenors</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                        {chairmanSection.map((member, index) => (
                            <EditTeam
                                key={`chair-${index}`}
                                position={member.position}
                                Name={member.name}
                                department={member.department}
                                dataAos="flip-left"
                            />
                        ))}
                    </div>
                </section> */}

                {/* <section className="mb-10 ">
                    <h2 className="text-xl font-bold text-[#269C53] mb-4 text-center">Coordinators</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                        {coordinatorSection.map((member, index) => (
                            <EditTeam
                                key={`coord-${index}`}
                                position={member.position}
                                Name={member.name}
                                department={member.department}
                                dataAos="flip-left"
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#269C53] mb-4 text-center">Members</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                        {membersSection.map((member, index) => (
                            <EditTeam
                                key={`member-${index}`}
                                position={member.position}
                                Name={member.name}
                                department={member.department}
                                dataAos="flip-left"
                            />
                        ))}
                    </div>
                </section> */}
                <div>
                </div>
            </section>
            {/* <section className="flex flex-col md:gap-5 gap-3 max-w-[60rem]  rounded-lg bg-gray-100 mb-10 md:px-5 px-3 mx-auto  md:py-10 py-5" >
                <h1 className="  mx-auto font-semibold lg:text-2xl text-lg text-[#269C52]">
                    Editorial Board
                </h1>
                <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <Edit key={index} position={member.position} name={member.name} university={member.university} department={member.department} location={member.location} />
                    ))}
                </div>
            </section> */}
            <LastSection />
        </>
    )
}

export default EditorialBoard







