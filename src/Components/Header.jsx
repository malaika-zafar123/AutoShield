import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShieldHalved,
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#15151a] shadow-lg">

  

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">


        <Link
          to="/"
          onClick={() => setMobileMenu(false)}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <FontAwesomeIcon
            icon={faShieldHalved}
            className="text-[#a07d14] text-3xl"
          />

          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-white">Auto</span>
            <span className="text-[#a07d14]">Shield</span>
          </h1>
        </Link>


      

        <div className="flex items-center gap-8">


          <ul className="hidden lg:flex items-center gap-7 font-medium">

            {/* HOME */}

            <li>
              <Link
                to="/"
                className="text-[#a07d14] hover:text-[#c79d24] transition duration-300"
              >
                Home
              </Link>
            </li>


            {/* services*/}

            <li className="relative">

              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300"
              >
                Services

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-sm transition-transform duration-300 ${
                    dropdown ? "rotate-180" : ""
                  }`}
                />
              </button>


              {/* Dropdown */}

              {dropdown && (
                <div
                  className="
                    absolute
                    top-full
                    right-0
                    mt-4
                    w-64
                    rounded-xl
                    bg-[#1B1D22]
                    border
                    border-gray-700
                    overflow-hidden
                    shadow-2xl
                  "
                >

                  {/* PPF */}

                  <Link
                    to="/ppf"
                    onClick={() => setDropdown(false)}
                    className="
                      block
                      px-5
                      py-4
                      text-gray-300
                      hover:text-[#c79d24]
                      hover:bg-[#24262c]
                      transition
                      duration-300
                    "
                  >
                    PPF Pakistan
                  </Link>


                  {/* CERAMIC SPRAY */}

                  <Link
                    to="/ceramic-spray"
                    onClick={() => setDropdown(false)}
                    className="
                      block
                      px-5
                      py-4
                      text-gray-300
                      hover:text-[#c79d24]
                      hover:bg-[#24262c]
                      transition
                      duration-300
                    "
                  >
                    Ceramic Spray
                  </Link>


                  {/* CERAMIC COATING */}

                  <Link
                    to="/ceramic-coating"
                    onClick={() => setDropdown(false)}
                    className="
                      block
                      px-5
                      py-4
                      text-gray-300
                      hover:text-[#c79d24]
                      hover:bg-[#24262c]
                      transition
                      duration-300
                    "
                  >
                    Ceramic Coating
                  </Link>


                  {/* CAR POLISH */}

                  <Link
                    to="/car-polish"
                    onClick={() => setDropdown(false)}
                    className="
                      block
                      px-5
                      py-4
                      text-gray-300
                      hover:text-[#c79d24]
                      hover:bg-[#24262c]
                      transition
                      duration-300
                    "
                  >
                    Car Polish
                  </Link>


                  {/* AUDIO MODIFICATION */}

                  <Link
                    to="/audio-modification"
                    onClick={() => setDropdown(false)}
                    className="
                      block
                      px-5
                      py-4
                      text-gray-300
                      hover:text-[#c79d24]
                      hover:bg-[#24262c]
                      transition
                      duration-300
                    "
                  >
                    Audio Modification
                  </Link>

                </div>
              )}

            </li>


            {/*  ACCESSORIES  */}

            <li>
              <Link
                to="/accessories-catalog"
                className="
                  text-gray-300
                  hover:text-white
                  transition
                  duration-300
                "
              >
                Accessories
              </Link>
            </li>


            {/*  GALLERY  */}

            <li>
              <Link
                to="/gallery"
                className="
                  text-gray-300
                  hover:text-white
                  transition
                  duration-300
                "
              >
                Gallery
              </Link>
            </li>


            {/*  CONTACT  */}

            <li>
              <Link
                to="/contact"
                className="
                  text-gray-300
                  hover:text-white
                  transition
                  duration-300
                "
              >
                Contact
              </Link>
            </li>

          </ul>




          <button
            className="
              hidden
              lg:block
              bg-[#a07d14]
              hover:bg-[#c79d24]
              px-6
              py-3
              rounded-xl
              font-semibold
              text-black
              whitespace-nowrap
              transition
              duration-300
              hover:-translate-y-0.5
            "
          >
            Book Appointment
          </button>



          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
              setDropdown(false);
            }}
            className="
              lg:hidden
              text-white
              text-2xl
              w-10
              h-10
              flex
              items-center
              justify-center
            "
          >
            <FontAwesomeIcon
              icon={mobileMenu ? faXmark : faBars}
            />
          </button>

        </div>

      </div>


      {/* mobile menu */}
 

      {mobileMenu && (

        <div
          className="
            lg:hidden
            border-t
            border-gray-800
            bg-[#15151a]
            shadow-xl
          "
        >

          <div className="flex flex-col p-6 space-y-4">


            {/* HOME */}

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="
                text-gray-300
                hover:text-[#a07d14]
                transition
                duration-300
              "
            >
              Home
            </Link>


            {/*  MOBILE SERVICES */}

            <div>

              <button
                onClick={() => setDropdown(!dropdown)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-gray-300
                  hover:text-[#a07d14]
                  transition
                  duration-300
                "
              >

                <span>Services</span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    dropdown ? "rotate-180" : ""
                  }`}
                />

              </button>


              {/* MOBILE SERVICE LINKS */}

              {dropdown && (

                <div className="mt-3 ml-4 flex flex-col space-y-3 border-l border-gray-700 pl-4">

                  <Link
                    to="/ppf"
                    onClick={() => {
                      setMobileMenu(false);
                      setDropdown(false);
                    }}
                    className="
                      text-gray-400
                      hover:text-[#a07d14]
                      transition
                      duration-300
                    "
                  >
                    PPF Pakistan
                  </Link>


                  <Link
                    to="/ceramic-spray"
                    onClick={() => {
                      setMobileMenu(false);
                      setDropdown(false);
                    }}
                    className="
                      text-gray-400
                      hover:text-[#a07d14]
                      transition
                      duration-300
                    "
                  >
                    Ceramic Spray
                  </Link>


                  <Link
                    to="/ceramic-coating"
                    onClick={() => {
                      setMobileMenu(false);
                      setDropdown(false);
                    }}
                    className="
                      text-gray-400
                      hover:text-[#a07d14]
                      transition
                      duration-300
                    "
                  >
                    Ceramic Coating
                  </Link>


                  <Link
                    to="/car-polish"
                    onClick={() => {
                      setMobileMenu(false);
                      setDropdown(false);
                    }}
                    className="
                      text-gray-400
                      hover:text-[#a07d14]
                      transition
                      duration-300
                    "
                  >
                    Car Polish
                  </Link>


                  <Link
                    to="/audio-modification"
                    onClick={() => {
                      setMobileMenu(false);
                      setDropdown(false);
                    }}
                    className="
                      text-gray-400
                      hover:text-[#a07d14]
                      transition
                      duration-300
                    "
                  >
                    Audio Modification
                  </Link>

                </div>

              )}

            </div>



            <Link
              to="/accessories-catalog"
              onClick={() => setMobileMenu(false)}
              className="
                text-gray-300
                hover:text-[#a07d14]
                transition
                duration-300
              "
            >
              Accessories
            </Link>



            <Link
              to="/gallery"
              onClick={() => setMobileMenu(false)}
              className="
                text-gray-300
                hover:text-[#a07d14]
                transition
                duration-300
              "
            >
              Gallery
            </Link>



            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="
                text-gray-300
                hover:text-[#a07d14]
                transition
                duration-300
              "
            >
              Contact
            </Link>



            <button
              onClick={() => setMobileMenu(false)}
              className="
                mt-3
                bg-[#a07d14]
                hover:bg-[#c79d24]
                text-black
                rounded-xl
                py-3
                font-semibold
                transition
                duration-300
              "
            >
              Book Appointment
            </button>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Header;