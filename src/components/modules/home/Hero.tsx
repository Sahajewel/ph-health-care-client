import imgImage from "@/assests/image/pexels-1222300-2324837.jpg";
import svgPaths from "@/assests/svg/svg";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
        }}
      />
      <div className="min-h-screen  bg-gray-50 flex items-center justify-center px-4 py-4 md:py-16 lg:py-20">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 z-50 lg:order-1 space-y-6">
              {/* Heading */}
              <div>
                <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-[47.6px] leading-tight">
                  Your Health, Our <br />
                  Priority
                </h1>
              </div>

              {/* Paragraph */}
              <div>
                <p className="text-gray-600 text-sm md:text-base lg:text-[13.6px] leading-relaxed">
                  Access quality healthcare anytime, anywhere. Connect with
                  experienced doctors through our AI-powered platform for
                  instant consultations and personalized care.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Consult Now
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {/* 24/7 Available */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 19 19">
                      <g clipPath="url(#clip0_1_57)">
                        <path
                          d="M6.25 1.5625V4.6875"
                          stroke="#2563EB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M12.5 1.5625V4.6875"
                          stroke="#2563EB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d={svgPaths.p2036ff80}
                          stroke="#2563EB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M2.34375 7.8125H16.4062"
                          stroke="#2563EB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_57">
                          <rect fill="white" height="18.75" width="18.75" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-xs md:text-sm">
                    24/7 Available
                  </span>
                </div>

                {/* Quick Response */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 19 19">
                      <g clipPath="url(#clip0_1_53)">
                        <path
                          d={svgPaths.p1e9f100}
                          stroke="#2563EB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d={svgPaths.p1d21b648}
                          stroke="#2563EB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_53">
                          <rect fill="white" height="18.75" width="18.75" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-xs md:text-sm">
                    Quick Response
                  </span>
                </div>

                {/* Secure & Private */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 19 19">
                      <g clipPath="url(#clip0_1_50)">
                        <path
                          d={svgPaths.p2ffee4f2}
                          stroke="#2563EB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_50">
                          <rect fill="white" height="18.75" width="18.75" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-xs md:text-sm">
                    Secure & Private
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full">
                <Image
                  src={imgImage}
                  alt="Healthcare professional consulting with patient"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
