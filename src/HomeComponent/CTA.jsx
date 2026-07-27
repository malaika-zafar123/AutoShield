import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import car from "../assets/car1.avif";

function CTA() {
  return (
    <section
      className="relative py-28 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${car})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Shield Icon */}
        <div className="flex justify-center mb-6">
          <div className=" flex items-center justify-center">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-[#a07d14] text-4xl"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-6xl font-bold text-white leading-tight">
          Ready to{" "}
          <span className="md:text-5xl text-2xl bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent font-bold">
            Elevate
          </span>{" "}
          Your Drive?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-8">
          Schedule a consultation today. Our team will guide you through
          every option and provide a detailed, obligation-free quote.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">

          <button className="bg-[#c9a227] hover:bg-[#e8c96d] transition duration-300 text-black font-semibold px-10 py-4 rounded-2xl flex items-center gap-3">
            Book Your Consultation
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <span className="text-white text-lg hover:text-[#c9a227]">
            Or call +92 300 1234567
          </span>

        </div>

      </div>
    </section>
  );
}

export default CTA;