import EditTeam from './EditTeam'
import LastSection from '../Last/LastSection';
import Edit from '../Issues/Edit';
import { useState } from 'react';

function EditorialBoard({ position, Name, location, name, department, university, }) {
    const [isHovered, setIsHovered] = useState(false);
    const Tech = [

        {
            name: "A.V.L.N. Sujith",
            department: "Department of Computer Science and Engineering",
            university: "JNTUA University",
            location: "India"
        },

        {
            name: "Hansi Gunasinghe",
            department: "Department of Computing and Information Systems",
            university: "Sabaragamuwa University",
            location: "Sri Lanka"
        },

        {
            name: "Ijegwa David Acheme",
            department: "Department of Computer Science",
            university: "Edo State University",
            location: "Nigeria"
        },
        {
            name: "Asghar Ali Shah",
            department: "Department of Computer Science",
            university: "Bahria university",
            location: "Pakistan"
        },
        {
            name: "P. Rajesh",
            department: "Department of Computer Science and Engineering",
            university: "Institute of Science and Technolog",
            location: "India"
        },
        {
            name: "Theopilus Bayu Sasongko",
            department: "Department of Informatics",
            university: "University of Amikom Yogyakarta",
            location: "Indonesia"
        },
        {
            name: "K. Kishore Kumar",
            department: "Department of Computer Science and Engineering",
            university: "Institute of Science and Technolog",
            location: "India"
        },
        {
            name: "Joseph",
            department: "Department of Electrical and Electronics Engineering",
            university: "Joseph Sarwuan Tarka University",
            location: "Nigeria"
        },
        {
            name: "Thendral Puyalnithi",
            department: "Department of Computer Science and Engineering",
            university: "Kalasalingam Academy of Research and Education",
            location: "India"
        },
        {
            name: "Samir Hallaci",
            department: "Department of Computer Science",
            university: "Guelma University",
            location: "Algeria"
        },
        {
            name: "Rogério Espíndola",
            department: "Department of Civil Engineering Program",
            university: "Federal University of Rio de Janeiro",
            location: "Brazil"
        },
        {
            name: "Theopilus Bayu Sasongko",
            department: "Department of Informatics",
            university: "University of Amikom Yogyakarta",
            location: "Indonesia"
        },

        {
            name: "Daban Kadhim Omar Dabbagh",
            department: "Department of Geography",
            university: "Salahaddin University",
            location: "Iraq"
        },
        {
            name: "Ajanthaa Lakkshmanan",
            department: "Department of Computer Science",
            university: "Sathyabama Institute of Science and Technology",
            location: "India"
        },
        {
            name: "Yogi Pratama",
            department: "Department of Medical Informatics",
            university: "Al Insyirah Institute of Health and Technology",
            location: "Indonesia"
        },

        {
            name: "Ziquan Feng",
            department: "Department of Multicultural Pedagogy",
            university: "Hanyang University",
            location: "South Korea"
        },

        {
            name: "D. Angeline Benitta",
            department: "Department of Computer Applications",
            university: "Hindustan Institute of Technology and Science",
            location: "India"
        },
        {
            name: "Muhammd Umer Farooq",
            department: "Department of Computer Science and Information Technology",
            university: "NED University of Engineering and Technology",
            location: "Pakistan"
        },
        {
            name: "M. Sathish kumar",
            department: "Department of Computer Application",
            university: " Hindustan Institute of Technology and Science",
            location: "India"
        },
        {
            name: "Argha Chandra Dhar",
            department: "Department of Computer Science and Engineering",
            university: "Khulna University of Engineering and Technology",
            location: "Bangladesh"
        },
        {
            name: "Tusar Kanti Dash",
            department: "Department of Electronics & Communication Engineering",
            university: "C V Raman Global University",
            location: "India"
        },
        {
            name: "Dheeraj Kumar Joshi",
            department: "Department of Mathematics",
            university: "DIT University",
            location: "India"
        },
        {
            name: " Idowu-Bismark Olabode",
            department: "Department of Electrical and Information Engineering",
            university: "Covenant University",
            location: "Nigeria"
        },
        {
            name: "Hung Nguyen",
            department: "Department of Information Technology",
            university: "Nha Trang university",
            location: "Vietnam"
        },





    ];
    return (
        <>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-10 py-5" >
                <div className='flex flex-col gap-3 '>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                        Organizing Committee
                    </h1>
                    <p className=" md:text-base text-sm "> Our conference is led by a dedicated team of professionals and academicians from diverse institutions and research backgrounds, working together to ensure a high-quality, impactful, and smooth conference experience.
                    </p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                        Roles and Responsibilities
                    </h1>
                    <p className="  md:text-base text-sm">  The Organizing Committee plays a crucial role in the successful execution of the International Conference on Intelligent Systems and Computational Methods. Their responsibilities include strategic planning, coordinating with keynote speakers and session chairs, managing paper submissions and peer reviews, and overseeing the publication process. They ensure smooth logistics, including venue arrangements, registration, sponsorships, and publicity. Additionally, the committee fosters collaboration among academic, industrial, and research communities, aiming to provide a platform for knowledge exchange, networking, and innovation in the field of intelligent systems and computational methods.

                    </p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                        Significance of the Committee
                    </h1>
                    <p className=" md:text-base text-sm ">
                        The Organizing Committee serves as the backbone of the conference, bringing together diverse expertise to ensure academic excellence and operational efficiency. Their involvement reflects a commitment to fostering meaningful discourse in the fields of intelligent systems and computational methods. By coordinating across various domains—from technical content to international collaborations—they ensure the conference meets global standards and creates lasting impact for researchers, students, and practitioners alike.
                    </p>
                </div>

                {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <EditTeam key={index} position={member.position} Name={member.Name} location={member.location} dataAos="flip-left" />
                    ))}
                </div> */}
                <div>
                </div>
            </section>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[60rem]  bg-gray-100 mb-10 md:px-5 px-3 mx-auto  md:py-10 py-5" >
                <h1 className="  mx-auto font-semibold lg:text-2xl text-lg text-[#269C52]">
                    Editorial Board
                </h1>
                <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <Edit key={index} position={member.position} name={member.name} university={member.university} department={member.department} location={member.location} />
                    ))}
                </div>
            </section>


            <LastSection />
        </>
    )
}

export default EditorialBoard
