import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Footer from "../Components/Footer";
import car1 from "../assets/car1.avif";
import car2 from "../assets/car2.avif";
import PPS1 from "../assets/PPS1.avif";
import PPS2 from "../assets/PPS2.avif";
import Cover1 from "../assets/Cover1.avif";
import Cover2 from "../assets/Cover2.avif";
import sound1 from "../assets/sound1.avif";
import sound2 from "../assets/sound2.avif";
import Ceramic1 from "../assets/ceramic1.avif";
import Ceramic2 from "../assets/ceramic2.avif";

const categories = [
  "All",
  "PPF",
  "PPS",
  "Ceramic",
  "Seat Covers",
  "Sound",
];

const cards = [
  {
    id: 1,
    category: "PPF",
    text: "Premium Paint Protection Film",
    image: car1,
  },
  {
    id: 2,
    category: "PPF",
    text: "Long-lasting paint protection",
    image: car2,
  },
  {
    id: 3,
    category: "PPS",
    text: "Professional Paint Protection",
    image: PPS1,
  },
  {
    id: 4,
    category: "PPS",
    text: "High quality protection service",
    image: PPS2,
  },
  {
    id: 5,
    category: "Seat Covers",
    text: "Luxury leather seat covers",
    image: Cover1,
  },
  {
    id: 6,
    category: "Seat Covers",
    text: "Comfortable custom seat covers",
    image: Cover2,
  },
  {
    id: 7,
    category: "Ceramic",
    text: "Ceramic coating for shine",
    image: Ceramic1,
  },
  {
    id: 8,
    category: "Ceramic",
    text: "Ultimate gloss protection",
    image: Ceramic2,
  },
  {
    id: 9,
    category: "Sound",
    text: "Premium sound system",
    image: sound1,
  },
  {
    id: 10,
    category: "Sound",
    text: "Crystal clear audio upgrade",
    image: sound2,
  },
];


function Gallery() {
    const [active, setActive] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);
    
    const filtered =
      active === "All"
        ? cards
        : cards.filter((item) => item.category === active);
  return (
    <div  className="min-h-screen bg-[#0d0d0d]  pt-28">
      <h2 className="md:text-6xl text-3xl font-bold m-4 text-white text-center">
          Our{" "}
          <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
            Work
          </span>
        </h2>
        <p className="text-center text-xl text-gray-300 max-w-2xl mx-auto">Browse our portfolio of completed projects. Each vehicle reflects our commitment to precision and excellence.</p>
        <div>
<div className="flex flex-wrap gap-3  m-22">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
                active === item
                  ? "bg-[#A07D14]  text-black"
                  : "bg-[#1f1f1f] text-gray-300  hover:text-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid gap-6 sm:grid-cols-2  m-10 md:m-24 lg:grid-cols-3">
          {filtered.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedImage(card.image)}
              className="overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src={card.image}
                alt={card.category}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
    
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-[#A07D14] transition"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
      <Footer/>
    </div>
    
  );
}

export default Gallery;
    
    

