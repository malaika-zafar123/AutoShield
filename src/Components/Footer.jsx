import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="bg-[#0d0d0d] text-white pt-20 pb-8 px-6 border-t border-gray-800">

      <div className="max-w-7xl mx-auto">

        {/* Top */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-[#a07d14] text-3xl"
              />

              <h2 className="text-3xl font-bold">
                Auto<span className="text-[#a07d14]">Shield</span>
              </h2>

            </div>

            <p className="text-gray-300 leading-8">
              Pakistan's premier luxury automotive protection studio.
              We safeguard and elevate the finest automobiles with
              world-class craftsmanship.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl text-gray-300  font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <Link to="/" className="hover:text-[#a07d14] text-gray-300 transition-all duration-300">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-[#a07d14] text-gray-300 transition-all duration-300">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/accessories" className="hover:text-[#a07d14] text-gray-300 transition-all duration-300">
                  Accessories
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-[#a07d14] text-gray-300 transition-all duration-300">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#a07d14] text-gray-300 transition-all duration-300">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl text-gray-300 font-bold uppercase tracking-wider mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li className="hover:text-[#a07d14] cursor-pointer">
                PPF Pakistan
              </li>

              <li className="hover:text-[#a07d14] cursor-pointer">
                Ceramic Spray
              </li>

              <li className="hover:text-[#a07d14] cursor-pointer">
                Ceramic Coating
              </li>

              <li className="hover:text-[#a07d14] cursor-pointer">
                Car Polish Lahore
              </li>

              <li className="hover:text-[#a07d14] cursor-pointer">
                Audio Modifications
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl text-gray-300 font-bold uppercase tracking-wider mb-6">
              Follow Us
            </h3>

            {/* Social Icons */}

            <div className="flex gap-4 mb-8">

              <a
                href=""
                className="w-12 h-12 rounded-xl border border-gray-700 flex justify-center items-center hover:text-[#a07d14]  duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href=""
                className="w-12 h-12 rounded-xl border border-gray-700 flex justify-center items-center hover:text-[#a07d14]  duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href=""
                className="w-12 h-12 rounded-xl border border-gray-700 flex justify-center items-center hover:text-[#a07d14]  duration-300"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>

            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#a07d14]"
                />
                <span className="text-gray-300">Lahore, Pakistan</span>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#a07d14]"
                />
                <span className="text-gray-300">+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#a07d14]"
                />
                <span className="text-gray-300">info@autoshield.pk</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">

          <p>
            © 2026 AutoShield. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Built with Precision in Pakistan
          </p>

        </div>

      </div>

    </section>
  );
}
export default Footer;