import {
  faShieldHalved,
  faSprayCanSparkles,
  faGem,
  faCouch,
  faVolumeHigh,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

import ServiceCard from "../Components/ServiceCard";

function Services() {
  const services = [
    {
      icon: faShieldHalved,
      title: "Premium Paint Protection Film (PPF) in Lahore",
      description:
        "Looking for the best PPF price in Pakistan? Protect your car from Lahore's harsh road debris and stone chips with our premium self-healing Paint Protection Film.",
    },

    {
      icon: faSprayCanSparkles,
      title: "Ceramic Paint Protection Spray (PPS)",
      description:
        "Get professional-grade hydrophobic protection quickly. Perfect for everyday drivers seeking an affordable shield against dust, rain and grime.",
    },

    {
      icon: faGem,
      title: "Professional 9H Ceramic Coating Services",
      description:
        "Experience the ultimate deep gloss and 9H hardness. Permanent nano-ceramic coating shielding your car from scratches, acid rain and bird droppings.",
    },

    {
      icon: faCouch,
      title: "Custom Car Seat Covers",
      description:
        "Premium leather seat covers with custom stitching and luxury interior upgrades.",
    },

    {
      icon: faVolumeHigh,
      title: "High-Fidelity Car Sound Systems",
      description:
        "Upgrade your driving experience with premium speakers and professional tuning.",
    },

    {
      icon: faCar,
      title: "Luxury Car Detailing",
      description:
        "Complete interior and exterior detailing with premium imported products.",
    },
  ];

  return (
    <section className="bg-[#0D0D0D]   py-24">

      <div className="max-w-7xl mx-auto  px-6">

        {/* Heading */}

       <h2 className="md:text-5xl font-bold text-center text-white">
  Our{" "}
  <span className="bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent">
    Services
  </span>
</h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Comprehensive automotive protection and customization,
          delivered with uncompromising quality.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;