const specification = [
  {
    title: "Thickness",
    value: "8 mil (Standard Defense) / 10 mil (Heavy-Duty Premium)",
  },
  {
    title: "Finish Options",
    value: "Ultra High-Gloss / Stealth Satin / Rich Matte",
  },
  {
    title: "Warranty Coverage",
    value: "Up to 10 Years International Warranty",
  },
  {
    title: "Turnaround Time",
    value: "3–5 Days (Full Body Wrap & Edge Tucking)",
  },
  {
    title: "Authorized Brands",
    value: "XPEL, STEK, 3M Automotive",
  },
];
function Specification (){
    return(
        <section className="bg-[#0d0d0f] py-20">

    <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left Side */}

            <div>

                <h2 className="text-4xl font-bold text-white mb-8">

                    Technical

                    <span className=" bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent ">
                        {" "}Specifications
                    </span>

                </h2>

                <div className="space-y-4">

                    {specification.map((item, index) => (

                        <div
                            key={index}
                            className="bg-[#1c1e24]
                            border border-gray-700
                            rounded-xl
                            px-5 py-5
                            flex justify-between items-center
                          "
                        >

                            <span className="text-gray-300">
                                {item.title}
                            </span>

                            <span className="text-white font-semibold text-right">
                                {item.value}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

            {/* Right Side */}

            <div
                className="bg-[#1c1e24]
                border border-gray-700
                rounded-2xl
                p-8
                text-center
                mt-24
               "
            >

                <h3 className="text-3xl font-bold text-white">

                    Get a Custom Quote

                </h3>

                <p className="text-gray-400 leading-7 mt-5">

                    Pricing varies by vehicle type and specific requirements.
                    Contact us for a detailed, obligation-free estimate for
                    Premium Paint Protection Film (PPF) in Lahore.

                </p>

                <button
                    className="w-full mt-8
                    bg-[#d4af37]
                    hover:bg-yellow-500
                    text-black
                    font-bold
                    py-4
                    rounded-xl
"
                >

                    Request Quote

                </button>

                <p className="text-gray-500 text-sm mt-5">

                    Response within 30 minutes during business hours

                </p>

            </div>

        </div>

    </div>

</section>
    )}

    export default Specification;