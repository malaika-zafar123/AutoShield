import {
  faShieldHalved,
  faBagShopping,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const products = [
  {
    id: 1,
    title: "7D Premium Floor Mats",

    badge: "Popular",
    sale: "Sale",
    status: "In Stock",
    statusColor: "bg-green-600",
    price: "PKR 12,999",
    oldPrice: "PKR 14,999",
    description:
      "Custom-molded 7-layer floor protection with deep channels.",
    features: [
      "7-layer heavy-duty TPE construction",
      "Custom-molded to vehicle-specific floor pans",
      "Deep anti-slip channels trap dirt and spills",
    ],
  },

  {
    id: 2,
    title: "Custom Ambient Lighting Kit",
    badge: "Popular",
    status: "In Stock",
    statusColor: "bg-green-600",
    price: "PKR 8,999",
    oldPrice: "",
    description:
      "64-color customizable cabin lighting with app control.",
    features: [
      "64-color RGB LED with 20+ dynamic lighting modes",
      "Smartphone app control with music sync feature",
      "Premium fiber-optic strips with zero hot spots",
    ],
  },

  {
    id: 3,
    title: "Android CarPlay Screen/ Android Auto Screen",
    badge: "Popular",
    sale: "Sale",
    status: "In Stock",
    statusColor: "bg-green-600",
    price: "PKR 29,999",
    oldPrice: "PKR 34,999",
    description:
      "High-resolution Android Auto & Apple CarPlay display.",
    features: [
      "9–10 inch QLED 2K resolution touchscreen",
      "Wireless Apple CarPlay & Android Auto",
      "Built-in GPS navigation with offline maps",
      ,
    ],
  },

  {
    id: 4,
    title: "Custom Body Kit",
    badge: "Popular",
    sale: "Sale",
    status: "Pre-Order",
    statusColor: "bg-yellow-600",
    price: "PKR 44,999",
    oldPrice: "PKR 49,999",
    description:
      "Premium PU body kit with spoiler & diffuser.",
    features: [
      "Premium PU material — flexible yet durable",
      "Includes front lip, side skirts, rear diffuser",
      "Trunk spoiler with built-in LED brake light",
    ],
  },
];

function Accessories() {
  return (
    <section className="bg-[#0D0D0D]  py-24">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <h2 className="md:text-5xl text-2xl font-bold text-center text-white">
          Premium{" "}
          <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
            Accessories
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          Curated upgrades to personalize your drive —
          from floor mats to dash cams.
        </p>

        {/* Cards */}

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-[#1a1b20] border border-gray-700 rounded-2xl p-4 hover:border-[#A07D14] transition-all duration-300 ">
              {/* Image */}
              <div className="relative rounded-xl border border-gray-700 h-48 flex items-center justify-center bg-[#1f2026]">

                {/* Badges */}
                <span className="absolute top-3 left-3 bg-[#A07D14] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {item.badge}
                </span>

                {item.sale && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.sale}
                  </span>
                )}

                {/* Shield Icon */}
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-[#A07D14] text-5xl font-light "
                />
              </div>

              {/* Title */}
              <div className="mt-5 flex justify-between items-start gap-2">
                <h3 className="text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <span
                  className={`${item.statusColor} text-xs px-2 py-1 rounded-full text-white whitespace-nowrap`}
                >
                  {item.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-3">
                {item.description}
              </p>

              {/* Price */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[#A07D14] text-2xl font-bold">
                  {item.price}
                </span>

                {item.oldPrice && (
                  <span className="text-gray-500 line-through">
                    {item.oldPrice}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="mt-5 space-y-2">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#A07D14] mt-1"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full mt-6 bg-[#c9a227] hover:bg-[#e8c96d] text-gray-800 font-bold py-3 rounded-xl  flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faBagShopping} />
                Send Inquiry
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-14">
          <button className="border border-[#A07D14] text-[#A07D14] hover:bg-[#A07D14] hover:text-black px-8 py-3 rounded-xl font-semibold transition duration-300">
            View Full Catalog →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Accessories;