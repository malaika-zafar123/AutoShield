import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "How long does PPF installation take?",
    answer:
      "A full-body PPF installation typically takes 3-5 days depending on the vehicle size and complexity. Partial installations (hood, bumper, mirrors) can be completed in 1-2 days. We provide a precise timeline after your initial consultation.",
  },
  {
    question: "How long does ceramic coating last?",
    answer:
      "Our multi-layer ceramic coating lasts 3-5 years with proper maintenance. It bonds permanently with your clear coat and is backed by a manufacturer warranty. Annual maintenance checks ensure optimal performance throughout its lifespan.",
  },
  {
    question: "Can you match my car's original interior color?",
    answer:
      "Yes. We offer a wide variety of OEM-style leather colors and stitching options to perfectly match your vehicle.",
  },
  {
    question: "Will PPF damage my paint when removed?",
    answer:
    " No. Premium PPF is designed for safe removal without affecting the original paint. In fact, it preserves the paint underneath by protecting it from UV damage and environmental contaminants. Our films are from trusted brands like XPEL, 3M, and STEK.",
  },
  {
    question: "Do you offer warranties on your services?",
    answer:
      "Yes. All our services come with comprehensive warranties. PPF and ceramic coatings include manufacturer-backed warranties ranging from 5–10 years. Seat covers and audio installations carry a 2-year workmanship warranty. Terms vary by service and are fully explained before work begins.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, and credit/debit cards. For larger installations, we offer a 50% advance payment structure with the balance due upon completion. Financing options may be available — please inquire during your consultation.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#0d0d0d] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-2xl font-bold text-white">
            Frequently Asked{" "}
            <span className="md:text-5xl text-2xl bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent font-bold">Questions</span>
          </h2>

          <p className="text-gray-400 mt-3 text-lg">
            Everything you need to know about our services
          </p>
        </div>

        {/* Accordion */}

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-700 bg-[#1b1d23] overflow-hidden transition duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >
                <h3 className="text-white font-semibold text-lg">
                  {item.question}
                </h3>

                <FontAwesomeIcon
                  icon={active === "" ? faChevronUp : faChevronDown}
                  className="text-[#A07D14]"
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === index
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-gray-700 px-8 py-6">
                  <p className="text-gray-300 leading-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}