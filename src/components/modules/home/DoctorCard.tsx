"use client";
import { Download } from "lucide-react";
import svgPaths3 from "@/assests/svg/sbg3";
import Image, { StaticImageData } from "next/image";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  rating: string;
  image: string | StaticImageData;
  imageName: string;
}

export function DoctorCard({
  name,
  specialty,
  experience,
  rating,
  image,
  imageName,
}: DoctorCardProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    const imageUrl = typeof image === "string" ? image : image.src;
    link.href = imageUrl;
    link.download = `${imageName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-[11px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] overflow-hidden w-full max-w-[420px] mx-auto">
      {/* Image Container with Download Button */}
      <div className="relative w-full aspect-[262.5/240] group">
        <Image
          alt={name}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={image}
        />
        {/* Download Button Overlay */}
        <button
          onClick={handleDownload}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          aria-label={`Download ${name}'s photo`}
        >
          <Download className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Doctor Name */}
        <div className="mb-3">
          <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[15.3px] text-gray-900 leading-[26px]">
            {name}
          </h3>
        </div>

        {/* Specialty */}
        <div className="mb-4">
          <p className="font-['Inter:Medium',_sans-serif] font-medium text-[12.75px] text-blue-600 leading-[22px]">
            {specialty}
          </p>
        </div>

        {/* Experience and Rating */}
        <div className="flex items-center justify-between mb-5">
          {/* Experience */}
          <div className="flex items-center gap-2">
            <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 15 15">
              <g>
                <path
                  d={svgPaths3.p143b0800}
                  stroke="#9CA3AF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths3.p23297d80}
                  stroke="#9CA3AF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
            <span className="font-['Inter:Regular',_sans-serif] font-normal text-[11.05px] text-gray-600 leading-[18px]">
              {experience}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 15 15">
              <g clipPath="url(#clip0_1_103)">
                <path
                  d={svgPaths3.p3ab39580}
                  stroke="#FACC15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_103">
                  <rect fill="white" height="15" width="15" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[11.05px] text-gray-900 leading-[18px]">
              {rating}
            </span>
          </div>
        </div>

        {/* Book Appointment Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors rounded-[7px] h-[37.5px] flex items-center justify-center">
          <span className="font-['Inter:Regular',_sans-serif] font-normal text-[12.75px] text-white leading-[22px]">
            Book Appointment
          </span>
        </button>
      </div>
    </div>
  );
}
