import Edit from './Edit';
import LastSection from '../Last/LastSection';

function Issues({ }) {
    const Tech = [

        {
            name: "A.V.L.N. SUJITH",
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
            department: "Department of computer science",
            university: "Bahria university",
            location: "Pakistan"
        },



    ];
    return (
        <>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-10 py-5" >
                <h1 className="  mx-auto font-semibold lg:text-2xl text-lg text-[#269C52]">
                    Editorial Board
                </h1>
                <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 ">
                    {Tech.map((member, index) => (
                        <Edit key={index} position={member.position} name={member.name} university={member.university} department={member.department} location={member.location} />
                    ))}
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default Issues;
