import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const processSteps = [
  {
    id: "1",
    title: "Detailing & Multi-Stage Paint Correction",
    description:
      "We deep-clean panels and perform paint correction to eliminate swirl marks, establishing a flawless foundation.",
  },
  {
    id: "2",
    title: "Precision Digital Plotter Cutting",
    description:
      "Using exact templates for Pakistani variants (Civic, Corolla, Sportage, Fortuner), we pre-cut panels with sub-millimeter accuracy.",
  },
  {
    id: "3",
    title: "Certified Wet-Grip Film Application",
    description:
      "Our certified technicians wrap and tuck edges meticulously, leaving an invisible, edge-free finish.",
  },
  {
    id: "4",
    title: "Controlled Curing & Multi-Angle Quality Audit",
    description:
      "The film cures in a climate-controlled bay for 24–48 hours before undergoing an intense inspection under studio lighting.",
  },
];
function Process (){
    return(

<section className="bg-[#0d0d0f] py-24">

    <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

            <h2 className="text-5xl  font-bold text-white">
                The{" "} 
                 <span className="text-5xl  bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent font-bold">Process</span>
            </h2>

            <p className="text-gray-400 mt-4">
                Our proven workflow ensures consistent, exceptional results every time
            </p>

        </div>

        <div className="relative">

            {/* Vertical Line */}

            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-[#2b2b2b]"></div>

            <div className="space-y-10">

                {processSteps.map((step) => (

                    <div
                        key={step.id}
                        className="relative flex items-start gap-8"
                    >

                        {/* Number */}

                        <div
                            className="w-12 h-12 rounded-xl border border-[#8b6b16]
                            bg-[#181818] text-[#d4af37]
                            flex items-center justify-center
                            font-bold text-lg z-10"
                        >
                            {step.id}
                        </div>

                        {/* Card */}

                        <div
                            className="flex-1 bg-[#1c1e24]
                            border border-gray-700
                            rounded-2xl p-8"
                        >

                            <div className="flex items-center gap-3 mb-3">

                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-[#d4af37]"
                                />

                                <h3 className="text-white font-bold text-2xl">
                                    {step.title}
                                </h3>

                            </div>

                            <p className="text-gray-400 leading-8">
                                {step.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    </div>

</section>
    )
}
export default Process;