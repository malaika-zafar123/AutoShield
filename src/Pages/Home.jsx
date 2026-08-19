import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

{/*files name */ }
import About from "../HomeComponent/About";
import Services from "../HomeComponent/Services";
import Project from "../HomeComponent/Project";
import Accessories from "../HomeComponent/Accesories";
import CostEstimator from "../HomeComponent/CostEstimator";
import Client from "../HomeComponent/Client";
import FAQ from "../HomeComponent/FAQ";
import CTA from "../HomeComponent/CTA";
import Footer from "../Components/Footer";
import ScrollToTop from "../HomeComponent/ScrollToTop";

{/*images */ }
import car1 from "../assets/car1.avif";
import car2 from "../assets/car2.avif";
import PPS1 from "../assets/PPS1.avif";
import PPS2 from "../assets/PPS2.avif";
import sound1 from "../assets/sound1.avif";
import sound2 from "../assets/sound2.avif";

const slides = [
  {
    image: car1,
    title: "Precision Protection for",
    highlight: "Your Legacy",
    desc: "From premium PPF and ceramic coating to bespoke interiors and audiophile sound — we treat every vehicle as a masterpiece.",
  },
  {
    image: car2,
    title: "Precision Protection for",
    highlight: "Your Legacy",
    desc: "From premium PPF and ceramic coating to bespoke interiors and audiophile sound — we treat every vehicle as a masterpiece.",
  },
  {
    image: PPS1,
    title: "Precision Protection for",
    highlight: "Your Legacy",
    desc: "From premium PPF and ceramic coating to bespoke interiors and audiophile sound — we treat every vehicle as a masterpiece.",
  },

  {
    image: PPS2,
    title: "Precision Protection for",
    highlight: "Your Legacy",
    desc: "From premium PPF and ceramic coating to bespoke interiors and audiophile sound — we treat every vehicle as a masterpiece.",
  },
  {
    image: sound1,
    title: "Precision Protection for",
    highlight: "Your Legacy",
    desc: "From premium PPF and ceramic coating to bespoke interiors and audiophile sound — we treat every vehicle as a masterpiece.",
  },
  {
    image: sound2,
    title: "Precision Protection for",
    highlight: "Your Legacy",
    desc: "From premium PPF and ceramic coating to bespoke interiors and audiophile sound — we treat every vehicle as a masterpiece.",
  },
];
function Home() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(slider);
  }, []);

  return (
    <>
      <section className="relative mt-20 h-screen overflow-hidden">

        {/* Background Image */}

        <img
          src={slides[current].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover duration-1000"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-8">

          {/* Badge */}

          <div className="border border-[#cda731]  rounded-full px-5 py-2 text-[#e5c66c]  mt-28 md:mb-8">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-[#e5c66c] md:text-xs"
            />Luxury Automotive Protection
          </div>

          {/* Heading */}

          <h1 className="text-2xl md:text-7xl mt-2 font-bold text-white leading-tight">

            {slides[current].title}

            <br />

            <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
              {slides[current].highlight}
            </span>

          </h1>

          {/* Description */}

          <p className="text-gray-300 text-xl max-w-3xl mt-8 leading-9">

            {slides[current].desc}

          </p>

          {/* Buttons */}

          <div className="flex md:flex-row flex-col gap-5 m-2">

            <button className="bg-[#a07d14] text-sm hover:bg-[#e8c96d] duration-300 px-8 py-4 rounded-xl font-semibold">
              Book Appointment
            </button>

            <button className="border border-[#a07d14] text-[#a07d14]  hover:bg-[#a07d14]  hover:text-black duration-300 px-8 py-4 rounded-xl text-sm font-semibold">
              Get WhatsApp Quote
            </button>

          </div>

          {/* Bottom Tags */}

          <div className="flex flex-wrap justify-center gap-5 m-4">

            <span className="bg-white/10 px-5 py-3 rounded-full text-white">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#A07D14] text-lg"
              /> Self-Healing PPF
            </span>

            <span className="bg-white/10 px-5 py-3 rounded-full text-white">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#A07D14] text-lg"
              /> Premium Brands
            </span>

            <span className="bg-white/10 px-5 py-3 rounded-full text-white">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#A07D14] text-lg"
              /> Warranty Available
            </span>

            <span className="bg-white/10 px-5 py-3 rounded-full text-white">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#A07D14] text-lg"
              /> Expert Installation
            </span>

          </div>

          {/* Slider Dots */}

          <div className="flex gap-2 mt-8">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full ${current === index
                  ? "bg-[#A07D14]"
                  : "bg-white/40"
                  }`}
              />
            ))}

          </div>

        </div>

      </section>
      <Services />
      <About />
      <Project />
      <Accessories />
      <CostEstimator />
      <Client />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}
export default Home;