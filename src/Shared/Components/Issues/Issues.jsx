import Edit from './Edit';
import LastSection from '../Last/LastSection';

function Issues({ }) {
    const Tech = [
        { Name: 'Sunil Kumar Alavilli', position: 'Sephora', location: 'California, USA' },
        { Name: 'Deepa Bhadana', position: 'CCS Univeristy', location: 'UP, India' },
        { Name: 'Nagendra Kumar Musham', position: 'Celer Systems Inc', location: 'California, USA' },
        { Name: 'Xi Zhang', position: 'Lecturer(University of KU Leuven)', location: 'Belgium' },
        { Name: 'Rajya Lakshmi Gudivaka', position: 'Wipro', location: 'Hyderabad, India' },
    ];
    return (
        <>
            <section className="flex flex-col md:gap-10 gap-5 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-20 py-10" >
                <h1 className="  mx-auto font-semibold lg:text-2xl text-lg text-[#269C52]">
                    Editorial Board
                </h1>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <Edit key={index} position={member.position} Name={member.Name} location={member.location} />
                    ))}
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default Issues;
