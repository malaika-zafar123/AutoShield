import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faCarSide,
  faTruck,
  faVanShuttle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const vehicleTypes = [
  {
    id: 1,
    name: "Hatchback",
    icon: faCarSide,
    desc: "Swift, Alto, Aqua",
    multiplier: 1,
  },
  {
    id: 2,
    name: "Sedan",
    icon: faCarSide,
    desc: "Civic, City, Yaris",
    multiplier: 1.2,
  },
  {
    id: 3,
    name: "SUV",
    icon: faTruck,
    desc: "Sportage, Tucson",
    multiplier: 1.5,
  },
];

const services = [
  {
    id: 1,
    name: "PPF",
    price: 120000,
  },
  {
    id: 2,
    name: "PPS",
    price: 95000,
  },
  {
    id: 3,
    name: "Ceramic Coating",
    price: 85000,
  },
  {
    id: 4,
    name: "Seat Covers",
    price: 35000,
  },
  {
    id: 5,
    name: "Sound Systems",
    price: 60000,
  },
];

function CostEstimator() {
  const [vehicle, setVehicle] = useState(vehicleTypes[1]);
  const [service, setService] = useState(null);
const estimatedPrice = service
  ? Math.round(service.price * vehicle.multiplier)
  : 0;

  return (
    <section className="bg-[#0D0D0D]  py-24">
      <div className="max-w-5xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center">

          <div className=" mx-auto  flex items-center justify-center mb-5">
            <FontAwesomeIcon
              icon={faCalculator}
              className="text-[#A07D14] text-4xl"
            />
          </div>

          <h2 className="text-5xl font-bold text-white">
            Cost{" "}
            <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
              Estimator
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Select your vehicle type and desired
            service for an instant estimate.
          </p>

        </div>

        {/* Main Card */}

        <div className="mt-12 bg-[#1b1d23] border border-gray-700 rounded-3xl p-8">
                  {/* Vehicle Type */}
          <h3 className="text-gray-300 font-bold uppercase tracking-wide text-sm mb-5">
            1. Select Vehicle Type
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {vehicleTypes.map((item) => (
              <button
                key={item.id}
                onClick={() => setVehicle(item)}
                className={`rounded-2xl border p-6 text-center transition-all duration-300 ${
                  vehicle.id === item.id
                    ? " border-gray-700 hover:border-[#A07D14]"
                    : "border-gray-700 hover:border-[#A07D14]"
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-2xl mb-3 ${
                    vehicle.id === item.id
                      ? "text-gray-300"
                      : "text-gray-300"
                  }`}
                />

                <h4 className="text-gray-300 font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Services */}
          <h3 className="text-gray-300 font-bold uppercase tracking-wide text-sm mt-10 mb-5">
            2. Choose Service
          </h3>

    <div className="grid md:grid-cols-3 gap-4">
  {services.map((item) => (
    <button
      key={item.id}
      onClick={() => setService(item)}
      className={`rounded-xl border py-4 font-semibold transition-all duration-300 ${
        service?.id === item.id
          ? "border-[#A07D14] text-gray-300 text-border-[#A07D14]"
          : "border-gray-700 text-gray-300 hover:border-[#A07D14]"
      }`}
    >
      {item.name}
    </button>
  ))}
</div>

          {/* Price Box */}
          {service && (
  <div className="mt-10 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">

    <div>
      <p className="text-gray-300">
        Estimated Price
      </p>

      <h2 className="text-5xl bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent font-bold  mt-2">
        PKR{""} {estimatedPrice.toLocaleString()}
      </h2>

      <p className="text-gray-300 text-sm mt-2">
        *Final price may vary based on vehicle condition and requirements.
      </p>
    </div>

    <button className=" bg-[#c9a227] hover:bg-[#e8c96d] transition px-8 py-4 rounded-xl text-black font-bold flex items-center gap-3">
      Claim Quote
      <FontAwesomeIcon icon={faArrowRight} />
    </button>

  </div>
)}

        </div>
      </div>
    </section>
  );
}

export default CostEstimator;