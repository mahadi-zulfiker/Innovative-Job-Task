// Updated Banner Component
import img1 from "../../assets/Images/Banner/banner3.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Flight from "../Flight/Flight";

const Banner = () => {
  return (
    <div>
      <div
        className="relative h-[600px]"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative p-20 text-white space-y-6">
          <p className="text-5xl font-semibold">
            Hey Buddy! Where are you <br />
            <span className="font-bold text-yellow-400">Flying to?</span>
          </p>
          <p className="flex items-center gap-4 text-lg font-medium">
            Explore Now
            <span className="text-3xl">
              <IoIosArrowRoundForward />
            </span>
          </p>
        </div>

        {/* Flight component */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-48 w-[90%]">
          <Flight />
        </div>
      </div>
    </div>
  );
};

export default Banner;