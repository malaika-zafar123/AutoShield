import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faMoon,
  faSun,
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
 
function Header() {
  const [dark, setDark] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#15151a] dark:bg-[#0D0D0D] shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-2">

          <FontAwesomeIcon
            icon={faShieldHalved}
            className="text-[#a07d14] text-3xl"
          />

          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-white">Auto</span>
            <span className="text-[#a07d14]">Shield</span>
          </h1>

        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-7 font-medium">

          <li>
            <Link
              to="/"
              className="text-[#a07d14]"
            >
              Home
            </Link>
          </li>

          {/* Services */}

          <li className="relative">

         <button
  onClick={() => setDropdown(!dropdown)}
  className="flex items-center gap-2 text-gray-300 hover:text-white"
>
  Services
  <FontAwesomeIcon
    icon={faChevronDown}
    className={`transition-transform duration-300 ${
      dropdown ? "rotate-180" : ""
    }`}
  />
</button>


            {dropdown && (

              <div className="absolute top-full left-0 mt-3 w-64 rounded-xl bg-[#1B1D22] border border-gray-700 overflow-hidden">

                <Link
                  to="/ppf"
                  onClick={() => setDropdown(false)}
                  className="block px-5 py-4 text-gray-300 hover:text-white"
                >
                  PPF Pakistan
                </Link>

                <Link
                  to="/ceramic-spray"
                  onClick={() => setDropdown(false)}
                  className="block px-5 py-4 text-gray-300 hover:text-white"
                >
                  Ceramic Spray
                </Link>

                <Link
                  to="/ceramic-coating"
                  onClick={() => setDropdown(false)}
                  className="block px-5 py-4 text-gray-300 hover:text-white"
                >
                  Ceramic Coating
                </Link>

                <Link
                  to="/car-polish"
                  onClick={() => setDropdown(false)}
                  className="block px-5 py-4 text-gray-300 hover:text-white"
                >
                  Car Polish
                </Link>

                <Link
                  to="/audio-modification"
                  onClick={() => setDropdown(false)}
                  className="block px-5 py-4 text-gray-300 hover:text-white"
                >
                  Audio Modification
                </Link>

              </div>

            )}

          </li>

          <li>
            <Link
              to="/accessories-catalog"
              className="text-gray-300 hover:text-white"
            >
              Accessories
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              className="text-gray-300 hover:text-white"
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-xl border border-gray-600 text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button>

          <button className="hidden lg:block bg-[#a07d14] hover:bg-[#c79d24] px-6 py-3 rounded-xl font-semibold duration-300">
            Book Appointment
          </button>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white text-2xl"
          >
            <FontAwesomeIcon
              icon={mobileMenu ? faXmark : faBars}
            />
          </button>

        </div>

      </div>
            {/* Mobile Menu */}

      {mobileMenu && (
        <div className="lg:hidden border-t border-gray-800 bg-[#15151a] dark:bg-[#0D0D0D]">

          <div className="flex flex-col p-6 space-y-4">

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Home
            </Link>

            <Link
              to="/ppf"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              PPF Pakistan
            </Link>

            <Link
              to="/ceramic-spray"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Ceramic Spray
            </Link>

            <Link
              to="/ceramic-coating"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Ceramic Coating
            </Link>

            <Link
              to="/car-polish"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Car Polish
            </Link>

            <Link
              to="/audio-modification"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Audio Modification
            </Link>

            <Link
              to="/accessories-catalog"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Accessories
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-[#a07d14] duration-300"
            >
              Contact
            </Link>

            <button
              onClick={() => setMobileMenu(false)}
              className="mt-3 bg-[#a07d14] hover:bg-[#c79d24] duration-300 rounded-xl py-3 font-semibold text-black"
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