import car from "../assets/car2.avif";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faAward,
  faUsers,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="bg-[#0D0D0D]  py-24">

      <div className="md:max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div className="relative">

          <img
            src={car}
            alt=""
            className="rounded-3xl md:w-full h-[550px] object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-[#1B1D22] rounded-2xl px-6 py-5 flex items-center gap-4">

            <h2 className="md:text-5xl  font-bold text-[#A07D14]">
              10+
            </h2>

            <div>
              <h4 className="text-white md:font-semibold">
                Years of Excellence
              </h4>

              <p className="text-gray-400 text-sm">
                Trusted across Pakistan
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div>

          <p className="uppercase tracking-[2px] md:text-lg font-bold mb-4 text-[#A07D14]  ">
            ABOUT AutoShield
          </p>

          <h2 className="md:text-6xl text-3xl font-bold text-white leading-tight">

            Pakistan's Premier

            <br />

            <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
              Automotive Studio
            </span>

          </h2>

          <p className="text-gray-400 mt-8 md:w-xl leading-8">
            At AutoShield, we believe your vehicle deserves more than just protection — it deserves distinction. Since 2015, we've been Pakistan's destination for premium automotive care, combining world-class materials with masterful craftsmanship.

            From self-healing PPF and nano-ceramic coatings to bespoke leather interiors and audiophile sound systems, every service we deliver reflects an uncompromising commitment to quality. We don't just service cars — we preserve legacies.


          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

            <div className="flex gap-4">

              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-[#A07D14] bg-[#221f16] rounded-xl p-2 text-xl mt-1"
              />

              <div>
                <h3 className="text-white font-semibold">
                  Premium Materials
                </h3>

                <p className="text-gray-400 text-sm">
                  World's best PPF & coatings
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <FontAwesomeIcon
                icon={faAward}
                className="text-[#A07D14] bg-[#221f16] rounded-xl p-2 text-xl mt-1"
              />

              <div>

                <h3 className="text-white font-semibold">
                  Certified Installers
                </h3>

                <p className="text-gray-400 text-sm">
                  Factory trained experts
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <FontAwesomeIcon
                icon={faUsers}
                className="text-[#A07D14] bg-[#221f16] rounded-xl p-2 text-xl mt-1"
              />

              <div>

                <h3 className="text-white font-semibold">
                  500+ Vehicles
                </h3>

                <p className="text-gray-400 text-sm">
                  Trusted by owners
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="text-[#A07D14] bg-[#221f16] rounded-xl p-2 text-xl mt-1"
              />

              <div>

                <h3 className="text-white font-semibold">
                  End-to-End Service
                </h3>

                <p className="text-gray-400 text-sm">
                  Consultation to delivery
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;  