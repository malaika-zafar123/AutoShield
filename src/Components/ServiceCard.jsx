import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ServiceCard({ service }) {
  return (
    <div className="bg-[#1B1D22] border border-gray-700 rounded-2xl p-8 hover:border-[#a07d14] duration-300">
      <FontAwesomeIcon
        icon={service.icon}
        className="md:text-2xl text-[#a07d14] bg-[#221f16] rounded-xl p-4 mb-5"
      />

      <h3 className="md:text-2xl font-bold text-white mb-4">
        {service.title}
      </h3>

      <p className="text-gray-400 leading-7">
        {service.description}
      </p>
            <button className="flex items-center gap-2 text-[#a07d14] font-semibold transition-all hover:text-[#a07d25] hover:translate-x-2 duration-300">

        Learn More

        <FontAwesomeIcon
          icon={faArrowRight}
        />

      </button>

    </div>
  );
}

export default ServiceCard;