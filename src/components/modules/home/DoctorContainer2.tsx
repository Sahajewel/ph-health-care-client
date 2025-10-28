import imgImage from "@/assests/image/dr-sarah-johnson.png";
import imgImage1 from "@/assests/image/dr-michael-chen.png";
import imgImage2 from "@/assests/image/dr-emily-rodriguez.png";
import imgImage3 from "@/assests/image/dr-james-wilson.png";
import { DoctorCard } from "./DoctorCard";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15 years",
    rating: "4.9",
    image: imgImage,
    imageName: "dr-sarah-johnson",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    experience: "12 years",
    rating: "4.8",
    image: imgImage1,
    imageName: "dr-michael-chen",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatologist",
    experience: "10 years",
    rating: "4.9",
    image: imgImage2,
    imageName: "dr-emily-rodriguez",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    experience: "18 years",
    rating: "5",
    image: imgImage3,
    imageName: "dr-james-wilson",
  },
];

export default function DoctorContainer() {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[28.05px] sm:text-[32px] lg:text-[36px] text-gray-900 leading-[37px] mb-4">
            Meet Our Expert Doctors
          </h1>
          <p className="font-['Inter:Regular',_sans-serif] font-normal text-[13.6px] sm:text-[14px] lg:text-[15px] text-gray-600 leading-[26px] max-w-[630px] mx-auto">
            Experienced healthcare professionals ready to provide you with the
            best care
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              rating={doctor.rating}
              image={doctor.image}
              imageName={doctor.imageName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
