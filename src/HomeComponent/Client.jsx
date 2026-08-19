import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";

const client = [
    {
        id: 1,
        name: "Ahmed Raza",
        car: "BMW 5 Series 2024",
        service: "Premium PPF",
        review:
            "Absolute perfection. The PPF installation on my BMW is invisible — you can't even tell it's there until a stone chip tries and fails. These guys are artists.",
    },
    {
        id: 2,
        name: "Fatima Khan",
        car: "Mercedes E-Class 2023",
        service: "Ceramic Coating",
        review:
            "The gloss after the ceramic coating is unreal. Water beads off like magic and washing takes half the time. Best investment for my car's paint.",
    },
    {
        id: 3,
        name: "Omar Hassan",
        car: "Toyota Fortuner 2024",
        service: "Custom Leather Seat Covers",
        review:
            "The diamond-stitched Nappa leather transformed my Fortuner's interior. Feels like a Lexus now. The fitment is absolutely factory-perfect.",
    },
    {
        id: 4,
        name: "Zara Ali",
        car: "Honda Civic RS 2024",
        service: "Sound System",
        review:
            "I spend 2 hours commuting daily — now I actually look forward to it. The sound stage is incredible. Crystal clear at any volume.",
    },
];


function Client() {

    return (
        <section className="bg-[#0D0D0D]  py-24">

            <div className="max-w-2xl mx-auto px-5 text-center" >
                <h2 className="md:text-5xl text-2xl font-bold text-white">What Our{"  "}
                    <span className="md:text-5xl text-2xl bg-gradient-to-r from-[#FFF4B0] via-[#F4D35E] to-[#A07D14] bg-clip-text text-transparent font-bold">Clients Say</span>
                </h2>
                <p className="text-gray-400 m-5 text-lg">
                    Real feedback from vehicle owners we've served
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 m-8 md:m-25">

                {client.map((item) => (

                    <div
                        key={item.id}
                        className="relative bg-[#1b1d23] border border-gray-700 rounded-2xl px-8 py-8 hover:border-[#A07D14]"
                    >
                        {/* Stars */}

                        <div className="flex gap-1 text-sm mb-6">
                            <div className="flex  text-[#A07D14] mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        className="text-lg"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Review */}

                        <p className="italic text-gray-300 leading-8 text-lg">
                            "{item.review}"
                        </p>

                        {/* Bottom */}

                        <div className="mt-8">
                            <h3 className="font-bold text-white">
                                {item.name}
                            </h3>

                            <p className="text-sm text-gray-300">
                                {item.car} •{" "}
                                <span className="text-gray-300">
                                    {item.service}
                                </span>
                            </p>
                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}
export default Client;