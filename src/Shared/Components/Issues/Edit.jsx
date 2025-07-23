import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, name, location, department, university }) {
    return (
        <>
            <div className=" relative      transition-all duration-500  overflow-hidden">
                <div className="relative z-10   space-y-2">
                    <div>
                        <h3 className="md:text-lg font-bold text-gray-800 -hover:text-blue-600 transition-colors duration-300">
                            Dr. {name}
                        </h3>
                    </div>
                    <div className="flex items-center   gap-2 text-gray-600">

                        <p className="text-sm font-medium">{department}, {university}, {location}</p>
                    </div>
                    {/* <div className="flex items-center   gap-2 text-gray-600">

                        <p className="text-sm font-medium">{university}</p>
                    </div>
                    <div className="flex items-center   gap-2 text-gray-500">
                        <MapPin className="w-4 h-4 text-[#14AE5C]" />
                        <p className="text-sm">{location}</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Edit
