import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShieldHalved, faCheck

} from "@fortawesome/free-solid-svg-icons";
import sound1 from "../assets/sound1.avif";
import Process from "../PPF/Process";
import Specification from "../PPF/Specification";
import Footer from "../Components/Footer";
const benefits = [
    "Advanced self-healing tech — fine scratches disappear under the Pakistani sun",
    "Blocks 99% of harsh UV rays to prevent premium paint fading and oxidation",
    "Invisible laser-cut installation with a mirror-like high-gloss or sleek satin finish",
    "Elite hydrophobic surface layer makes dealing with Lahore dust and mud effortless",
    "Safely removable without causing any damage to your vehicle's original factory paint",
    "Backed by an official 10-year manufacturer warranty against yellowing or peeling",
];

function AudioModification(){
    return(
                <div className="min-h-screen bg-[#0d0d0d]  pt-28">
            <div className="flex justify-center">

                <div className="border border-[#cda731] w-full text-center max-w-xs rounded-full px-5 py-2 text-[#e5c66c]  mt-4 md:mb-8">
                    <FontAwesomeIcon
                        icon={faShieldHalved}
                        className="text-[#e5c66c] md:text-xs"
                    />Premium Service
                </div>
            </div>
            {/* <div className="flex flex-col text-center"> */}

            <h2 className="md:text-7xl text-2xl md:max-w-4xl md:m-auto m-10 font-bold  text-white text-center">
High-Fidelity Car Sound Systems & Tuning

            </h2>
            <p className="text-center text-xl md:mt-6 text-gray-300 max-w-2xl  m-10 md:mx-auto">
                Our premium Paint Protection Film (PPF) is the gold standard for automotive paint preservation across Pakistan. Specially engineered to withstand Pakistan's extreme heat, UV radiation, and intense road dust, this optically clear film acts as an invisible shield. Featuring elite self-healing technology, minor scratches and swirl marks instantly vanish when exposed to sunlight or heat.
            </p>
            {/* Buttons */}

            <div className="flex md:flex-row m-4 justify-center md:m-10 flex-col gap-5 mt-10">

                <button className="bg-[#a07d14] text-lg hover:bg-[#e8c96d] duration-300 px-8 py-4 rounded-xl font-semibold">
                    Book Appointment
                </button>

                <button className="border border-[#a07d14] text-[#a07d14]  hover:bg-[#a07d14]  hover:text-black duration-300 px-8 py-4 rounded-xl text-lg font-semibold">
                    Get  Quote
                </button>
            </div>

            <div className="max-w-7xl  md:m-28 px-6 mb-10">

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left */}

                    <div>

                        <h2 className="text-4xl  font-bold text-white mb-10">
                            Why Choose {" "}
                            <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
                                This Service
                            </span>
                        </h2>

                        <div className="space-y-7">

                            {benefits.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >

                                    <div
                                        className="w-9 h-9 rounded-full bg-[#1d1d1d]
                    border border-[#d4af37]/30 flex items-center
                    justify-center flex-shrink-0"
                                    >

                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-[#d4af37] text-sm"
                                        />

                                    </div>

                                    <p className="text-gray-300 leading-7">
                                        {item}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Right */}

                    <div
                        className="bg-[#1b1d23] border border-gray-700
            rounded-2xl p-5 shadow-xl "
                    >

                        <h3 className="text-white font-bold text-xl mb-5">
                            Premium Paint Protection Film (PPF) in Lahore
                        </h3>

                        <img
                            src={sound1}
                            alt="PPF"
                            className="rounded-xl w-full md:h-[450px] object-cover"
                        />

                    </div>

                </div>

            </div>
            <Process/>
            <Specification/>
            <Footer />

        </div>

    )
}
export default AudioModification;