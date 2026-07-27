import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
    faLocationDot,
    faPhone,
    faEnvelope,
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        vehicle: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className="min-h-screen bg-[#0D0D0D]  pt-28">
            <h2 className="md:text-6xl text-3xl font-bold m-4 text-white text-center">
                Get in {" "}
                <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
                    Touch
                </span>
            </h2>
            <p className="text-center text-xl text-gray-300 max-w-2xl mx-auto">
                Have a question or ready to get started? Reach out and we'll respond within 24 hours.</p>

            <div className="max-w-7xl m-24  grid lg:grid-cols-2 gap-10">

                {/* LEFT SIDE */}

                <div>

                    <h2 className="text-4xl font-bold text-white mb-10">
                        Send Us a Message
                    </h2>

                    {/* Name & Phone */}

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-white mb-2 font-medium">
                                Your Name *
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-[#1B1D22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-[#A07D14]"
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2 font-medium">
                                Phone Number *
                            </label>

                            <input
                                type="text"
                                name="phone"
                                placeholder="03XX-XXXXXXX"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-[#1B1D22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-[#A07D14]"
                            />
                        </div>

                    </div>

                    {/* Vehicle & Service */}

                    <div className="grid md:grid-cols-2 gap-6 mt-6">

                        <div>
                            <label className="block text-white mb-2 font-medium">
                                Vehicle Model
                            </label>

                            <input
                                type="text"
                                name="vehicle"
                                placeholder="Toyota Corolla 2024"
                                value={formData.vehicle}
                                onChange={handleChange}
                                className="w-full bg-[#1B1D22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-[#A07D14]"
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2 font-medium">
                                Service Interested In
                            </label>

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-[#1B1D22] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-[#A07D14]"
                            >
                                <option value="">Select a service</option>
                                <option>Paint Protection Film</option>
                                <option>Ceramic Coating</option>
                                <option>Ceramic Spray</option>
                                <option>Car Polish</option>
                                <option>Audio Modification</option>
                                <option>Seat Covers</option>
                            </select>
                        </div>

                    </div>

                    {/* Message */}

                    <div className="mt-6">

                        <label className="block text-white mb-2 font-medium">
                            Message
                        </label>

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Tell us about your requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-[#1B1D22] border border-gray-700 rounded-xl px-5 py-4 text-white resize-none outline-none focus:border-[#A07D14]"
                        />

                    </div>

                    {/* WhatsApp Button */}

                    <button className="w-full mt-8 bg-[#A07D14] hover:bg-[#c79d24] duration-300 rounded-xl py-4 text-lg font-semibold text-black flex items-center justify-center gap-3">

                        <FontAwesomeIcon icon={faPaperPlane} />

                        Send via WhatsApp

                    </button>

                </div>

                {/* RIGHT SIDE */}

                <div>

                    <h2 className="text-4xl font-bold text-white mb-10">
                        Contact Information
                    </h2>
                    <div className="space-y-6">

                        {/* Address */}

                        <div className="bg-[#1B1D22] border border-gray-700 rounded-2xl p-6 flex items-start gap-5">

                            <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center">

                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="text-[#A07D14] text-xl"
                                />

                            </div>

                            <div>

                                <p className="text-gray-400 uppercase text-sm tracking-wider">
                                    Address
                                </p>

                                <h3 className="text-gray-300 text-lg mt-1">
                                    Lahore, Pakistan
                                </h3>

                            </div>

                        </div>

                        {/* Phone */}

                        <div className="bg-[#1B1D22] border border-gray-700 rounded-2xl p-6 flex items-start gap-5">

                            <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center">

                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-[#A07D14] text-xl"
                                />

                            </div>

                            <div>

                                <p className="text-gray-400 uppercase text-sm tracking-wider">
                                    Phone / WhatsApp
                                </p>

                                <h3 className="text-gray-300 text-lg  mt-1">
                                    +92 300 1234567
                                </h3>

                            </div>

                        </div>

                        {/* Email */}

                        <div className="bg-[#1B1D22] border border-gray-700 rounded-2xl p-6 flex items-start gap-5">

                            <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center">

                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-[#A07D14] text-xl"
                                />

                            </div>

                            <div>

                                <p className="text-gray-400 uppercase text-sm tracking-wider">
                                    Email
                                </p>

                                <h3 className="text-gray-300 text-lg  mt-1 break-all">
                                    info@autoshield.pk
                                </h3>

                            </div>

                        </div>

                        {/* Business Hours */}

                        <div className="bg-[#1B1D22] border border-gray-700 rounded-2xl p-6 flex items-start gap-5">

                            <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center">

                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="text-[#A07D14] text-xl"
                                />

                            </div>

                            <div>

                                <p className="text-gray-400 uppercase text-sm tracking-wider">
                                    Business Hours
                                </p>

                                <h3 className="text-gray-300 text-lg mt-1">
                                    Mon - Sat: 10:00 AM - 8:00 PM
                                </h3>

                            </div>

                        </div>

                        {/* Google Map */}

                        <div className="bg-[#1B1D22] border border-gray-700 rounded-2xl p-6">

                            <h3 className="text-white font-bold mb-4 uppercase">
                                Find Us
                            </h3>

                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-72 rounded-xl border-0"
                                loading="lazy"
                            ></iframe>

                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Contact;