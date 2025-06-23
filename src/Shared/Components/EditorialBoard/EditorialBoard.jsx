import EditTeam from './EditTeam'
import LastSection from '../Last/LastSection';

function EditorialBoard({ position, Name, location }) {
    const Tech = [
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },

    ];
    return (
        <>
            <section className="flex flex-col md:gap-5 gap-3 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-10 py-5" >
                <div className='flex flex-col gap-3 '>
                    <h1 className="text-center text-[#269C52] font-semibold lg:text-2xl text-lg">
                        Organizing Committee
                    </h1>
                    <p className=" text-center"> Our conference is led by a dedicated team of professionals and academicians from diverse institutions and research backgrounds, working together to ensure a high-quality, impactful, and smooth conference experience.
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <EditTeam key={index} position={member.position} Name={member.Name} location={member.location} dataAos="flip-left" />
                    ))}
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default EditorialBoard
