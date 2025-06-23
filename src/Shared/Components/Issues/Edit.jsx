import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, Name, location }) {
    return (
        <>
            <div className=" relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative z-10 text-center space-y-4">
                    <div className="relative mx-auto w-14 h-14 mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                        <div className="relative flex items-center justify-center w-full h-full bg-[#269C52] rounded-full shadow-lg">
                            <User className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 -hover:opacity-30"></div>
                    </div>
                    <div>
                        <h3 className="md:text-lg font-bold text-gray-800 -hover:text-blue-600 transition-colors duration-300">
                            {Name}
                        </h3>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                            <Building2 className="w-4 h-4 text-blue-500" />
                        <p className="text-sm font-medium">{position}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4 text-[#14AE5C]" />
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div>
            </div>
        </>
    )
}

export default Edit
