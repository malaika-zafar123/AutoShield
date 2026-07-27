import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faMagnifyingGlass,
  faCheck,
  faBagShopping
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../Components/Footer";
const categories = [
  "All Products",
  "Interior Accessories",
  "Exterior Accessories",
  "Electronics",
  "Audio Products",
];

const products = [
  {
    id: 1,
    name: "7D Premium Floor Mats",
    category: "Interior Accessories",
    price: 12999,
    oldPrice: 14999,
    popular: true,
    sale: true,
    stock: "In Stock",
    description:
      "Custom-molded 7-layer floor protection with deep channels.",
    features: [
      "7-layer heavy-duty TPE construction",
      "Vehicle specific fitting",
      "Water & dust protection",
    ],
  },
  {
    id: 2,
    name: "Custom Ambient Lighting Kit",
    category: "Interior Accessories",
    price: 8999,
    oldPrice: null,
    popular: true,
    sale: false,
    stock: "In Stock",
    description:
      "64-color customizable cabin lighting with app control.",
    features: [
      "64 RGB colours",
      "Music sync",
      "Premium fibre optics",
    ],
  },
  {
    id: 3,
    name: "Android CarPlay Screen",
    category: "Electronics",
    price: 29999,
    oldPrice: 34999,
    popular: true,
    sale: true,
    stock: "In Stock",
    description:
      "9-inch HD Android Auto & Apple CarPlay screen.",
    features: [
      "Wireless CarPlay",
      "Android Auto",
      "Built-in GPS",
    ],
  },
  {
    id: 4,
    name: "Leather Steering Cover",
    category: "Interior Accessories",
    price: 4499,
    oldPrice: 5499,
    popular: false,
    sale: true,
    stock: "In Stock",
    description:
      "Premium stitched leather steering cover.",
    features: [
      "Nappa leather",
      "Anti-slip grip",
      "Easy installation",
    ],
  },
  {
    id: 5,
    name: "Rear Spoiler",
    category: "Exterior Accessories",
    price: 8999,
    oldPrice: 9999,
    popular: true,
    sale: false,
    stock: "In Stock",
    description:
      "Sporty rear spoiler with glossy finish.",
    features: [
      "ABS Material",
      "Gloss Black",
      "Easy Fit",
    ],
  },
  {
    id: 6,
    name: "Front Bumper Lip",
    category: "Exterior Accessories",
    price: 9999,
    oldPrice: 11999,
    popular: false,
    sale: true,
    stock: "In Stock",
    description:
      "Aggressive front splitter for modern cars.",
    features: [
      "ABS Plastic",
      "Scratch Resistant",
      "Universal Fit",
    ],
  },
  {
    id: 7,
    name: "LED Headlights",
    category: "Electronics",
    price: 13999,
    oldPrice: 15999,
    popular: true,
    sale: true,
    stock: "In Stock",
    description:
      "High brightness LED projector headlights.",
    features: [
      "6000K White",
      "Waterproof",
      "Long Life",
    ],
  },
  {
    id: 8,
    name: "Reverse Camera",
    category: "Electronics",
    price: 4999,
    oldPrice: 6499,
    popular: false,
    sale: true,
    stock: "In Stock",
    description:
      "HD parking camera with night vision.",
    features: [
      "Night Vision",
      "Waterproof",
      "170° View",
    ],
  },
  {
    id: 9,
    name: "Door Visors",
    category: "Exterior Accessories",
    price: 3999,
    oldPrice: null,
    popular: true,
    sale: false,
    stock: "In Stock",
    description:
      "Premium smoke door visors.",
    features: [
      "Weather Protection",
      "Easy Install",
      "Gloss Finish",
    ],
  },
  {
    id: 10,
    name: "Roof Rails",
    category: "Exterior Accessories",
    price: 14999,
    oldPrice: 16999,
    popular: false,
    sale: true,
    stock: "In Stock",
    description:
      "Heavy-duty aluminium roof rails.",
    features: [
      "Premium Alloy",
      "Rust Free",
      "Strong Build",
    ],
  },
  {
    id: 11,
    name: "Subwoofer Box",
    category: "Audio Products",
    price: 18999,
    oldPrice: 21999,
    popular: true,
    sale: true,
    stock: "In Stock",
    description:
      "Deep bass active subwoofer.",
    features: [
      "1000W Peak",
      "Powerful Bass",
      "Compact Design",
    ],
  },
  {
    id: 12,
    name: "Component Speakers",
    category: "Audio Products",
    price: 15999,
    oldPrice: null,
    popular: false,
    sale: false,
    stock: "In Stock",
    description:
      "Crystal-clear premium speakers.",
    features: [
      "High Clarity",
      "Powerful Output",
      "Premium Build",
    ],
  },
  {
    id: 13,
    name: "Amplifier 4 Channel",
    category: "Audio Products",
    price: 24999,
    oldPrice: 27999,
    popular: true,
    sale: true,
    stock: "In Stock",
    description:
      "4-channel Class D amplifier.",
    features: [
      "High Efficiency",
      "Low Distortion",
      "Compact",
    ],
  },
  {
    id: 14,
    name: "Dash Camera",
    category: "Electronics",
    price: 8999,
    oldPrice: 10999,
    popular: false,
    sale: true,
    stock: "In Stock",
    description:
      "1080P dash camera with loop recording.",
    features: [
      "Night Vision",
      "Wide Angle",
      "Loop Recording",
    ],
  },
  {
    id: 15,
    name: "Seat Covers",
    category: "Interior Accessories",
    price: 17999,
    oldPrice: 19999,
    popular: true,
    sale: false,
    stock: "In Stock",
    description:
      "Premium stitched leather seat covers.",
    features: [
      "Custom Fit",
      "Comfort Foam",
      "Luxury Finish",
    ],
  },
  {
    id: 16,
    name: "Wireless Charger",
    category: "Electronics",
    price: 3499,
    oldPrice: 4499,
    popular: false,
    sale: true,
    stock: "In Stock",
    description:
      "15W fast wireless charging mount.",
    features: [
      "Fast Charge",
      "Auto Clamp",
      "Universal",
    ],
  },
  {
    id: 17,
    name: "Chrome Door Handles",
    category: "Exterior Accessories",
    price: 5499,
    oldPrice: null,
    popular: true,
    sale: false,
    stock: "In Stock",
    description:
      "Premium chrome handle covers.",
    features: [
      "Rust Free",
      "3M Tape",
      "Mirror Finish",
    ],
  },
  {
    id: 18,
    name: "Premium Horn Set",
    category: "Audio Products",
    price: 6999,
    oldPrice: 7999,
    popular: true,
    sale: true,
    stock: "In Stock",
    description:
      "Loud dual-tone premium horn.",
    features: [
      "Dual Tone",
      "Weatherproof",
      "Easy Install",
    ],
  },
];

function AccessoriesCatalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = products.filter((item) => {
    const matchCategory =
      activeCategory === "All Products" ||
      item.category === activeCategory;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0d0d0d]  pt-28">
<div className="flex justify-center">

      <div className="border border-[#cda731] w-full text-center max-w-md rounded-full px-5 py-2 text-[#e5c66c]  mt-4 md:mb-8">
        <FontAwesomeIcon
          icon={faShieldHalved}
          className="text-[#e5c66c] md:text-xs"
        />Luxury Automotive Protection
      </div>
</div>

      <h2 className="md:text-6xl text-3xl font-bold m-4 text-white text-center">
        Accessories{" "}
        <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
          Catalog
        </span>
      </h2>
      <p className="text-center text-xl text-gray-300 max-w-2xl mx-auto">Browse our portfolio of completed projects. Each vehicle reflects our commitment to precision and excellence.</p>
      <div className="flex justify-center">
        <div className="relative w-full mt-24 max-w-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search accessories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1b1d23] border border-gray-700 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>
      </div>

      {/* Categories */}

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition

            ${activeCategory === cat
                ? "bg-[#A07D14] text-black"
                : "bg-[#1b1d23] border border-gray-700 text-white hover:border-[#A07D14]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}

      <p className="text-gray-300  ml-18 mb-4 mt-8">
        Showing 18
        products in
        <span className="font-bold text-white">
          {" "}
          {activeCategory}
        </span>
      </p>

      {/* Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 ml-18 mr-18">

        {filteredProducts.map((item) => (

          <div
            key={item.id}
            className="bg-[#1b1d23] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#A07D14] mb-8"
          >

            {/* Image */}

            <div className="relative p-5">

              {item.popular && (
                <span className="absolute left-5 top-5 bg-[#A07D14] text-black text-xs px-3 py-1 rounded-full font-bold">
                  Popular
                </span>
              )}

              {item.sale && (
                <span className="absolute right-5 top-5 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  Sale
                </span>
              )}

              <div className="h-36 rounded-xl border border-gray-700 flex items-center justify-center">

                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-[#A07D14] text-6xl"
                />

              </div>

            </div>

            {/* Body */}

            <div className="px-6 pb-6">

              <div className="flex justify-between items-center">

                <h2 className="text-white font-bold text-xl w-2/3">
                  {item.name}
                </h2>

                <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded-full">
                  {item.stock}
                </span>

              </div>

              <p className="text-gray-400 mt-3 text-sm leading-6">
                {item.description}
              </p>

              <div className="mt-4">

                <span className="text-[#A07D14] font-bold text-2xl">
                  PKR {item.price.toLocaleString()}
                </span>

                {item.oldPrice && (

                  <span className="text-gray-500 line-through ml-3">

                    PKR {item.oldPrice.toLocaleString()}

                  </span>

                )}

              </div>

              <div className="space-y-2 mt-6">

                {item.features.map((feature, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >

                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#A07D14] text-lg"
                    />

                    {feature}

                  </div>

                ))}

              </div>

              <button className="mt-8 w-full bg-[#c9a227] hover:bg-[#e8c96d] text-black py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition">



                <FontAwesomeIcon icon={faBagShopping} className="text-lg" />
                Send Inquiry

              </button>
            </div>

          </div>
        ))}
      </div>
      <Footer/>
    </div>

  )
}
export default AccessoriesCatalog;