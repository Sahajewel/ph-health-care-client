import Image from "next/image";
import svgPaths2 from "@/assests/svg/svg2";
import imgImage from "@/assests/image/doctor-consultation.png";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4 md:gap-[60px]">
      <div className="flex-shrink-0 bg-blue-100 rounded-[7px] w-[45px] h-[45px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function AIConsultationSection() {
  const features = [
    {
      icon: (
        <svg className="w-[22.5px] h-[22.5px]" fill="none" viewBox="0 0 23 23">
          <g>
            <path
              d="M11.25 7.5V3.75H7.5"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths2.p388f4780}
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M1.875 13.125H3.75"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M18.75 13.125H20.625"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M14.0625 12.1875V14.0625"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M8.4375 12.1875V14.0625"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
      title: "AI-Powered Triage",
      description:
        "Our AI analyzes your symptoms and connects you with the right specialist instantly",
    },
    {
      icon: (
        <svg className="w-[22.5px] h-[22.5px]" fill="none" viewBox="0 0 23 23">
          <g>
            <path
              d={svgPaths2.p2f7d6200}
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths2.p27df7df0}
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
      title: "Video Consultations",
      description:
        "Face-to-face consultations from the comfort of your home with HD video quality",
    },
    {
      icon: (
        <svg className="w-[22.5px] h-[22.5px]" fill="none" viewBox="0 0 23 23">
          <g>
            <path
              d={svgPaths2.p2049a700}
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
      title: "Chat Support",
      description:
        "Get instant responses to your health queries through our AI chat assistant",
    },
    {
      icon: (
        <svg className="w-[22.5px] h-[22.5px]" fill="none" viewBox="0 0 23 23">
          <g>
            <path
              d={svgPaths2.pe78d940}
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths2.p12e3b980}
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M9.375 8.4375H7.5"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M15 12.1875H7.5"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M15 15.9375H7.5"
              stroke="#2563EB"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
      title: "Digital Prescriptions",
      description:
        "Receive and manage your prescriptions digitally with easy pharmacy integration",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-3 md:mb-4">
            AI-Driven Doctor Consultation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of healthcare with our intelligent
            consultation system
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Features List */}
          <div className="space-y-6 md:space-y-8 lg:space-y-[101.25px]">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Image with Card Overlay */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-[15px] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden">
              <Image
                src={imgImage}
                alt="Doctor using smartphone for consultation"
                className="w-full h-auto object-cover rounded-[15px]"
              />
            </div>

            {/* Consultation Time Card */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:-left-4 bg-white rounded-[11px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-5 md:p-6">
              <p className="text-gray-600 mb-2">Consultation Time</p>
              <p className="text-blue-600">~15 mins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
