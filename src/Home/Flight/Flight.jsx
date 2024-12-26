import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiMiniCube } from "react-icons/hi2";
import { MdFlight, MdFlightTakeoff } from "react-icons/md";
import { RiPassportLine } from "react-icons/ri";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FlightStore } from "../../store/FlightStore"; // Adjust path as needed
import { searchFlights } from "../../services/flightService"; // Adjust path as needed

const Flight = () => {
  const [loading, setLoading] = useState(false);

  // Update store on form change
  const handleInputChange = (field, value) => {
    FlightStore.update((s) => {
      s.searchParams[field] = value;
    });
  };

  const handleTravelersChange = (type, value) => {
    FlightStore.update((s) => {
      s.searchParams.travelers[type] = value;
    });
  };

  // Search button handler
  const handleSearch = async () => {
    setLoading(true);
    const searchParams = FlightStore.getRawState().searchParams;

    try {
      const results = await searchFlights(searchParams);
      FlightStore.update((s) => {
        s.searchResults = results;
      });
    } catch (error) {
      console.error("Error searching flights:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full rounded-lg shadow-xl mx-auto">
      {/* Tabs Section */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-lg font-semibold flex items-center gap-2">
          <MdFlight className="text-blue-500" /> Flight
        </div>
        <div className="flex gap-4">
          <p className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500">
            <RiPassportLine /> Visa
          </p>
          <p className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500">
            <HiMiniCube /> Umrah
          </p>
        </div>
      </div>

      {/* Search Filters Section */}
      <div className="bg-gray-100 px-6 py-4 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm flex-1">
            <MdFlightTakeoff className="text-blue-500" />
            <select
              className="outline-none bg-transparent w-full"
              onChange={(e) => handleInputChange("journey_type", e.target.value)}
            >
              <option value="OneWay">One Way</option>
              <option value="RoundTrip">Round Trip</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm flex-1">
            <FaRegUser className="text-blue-500" />
            <input
              type="number"
              min="1"
              className="outline-none bg-transparent w-full"
              placeholder="1 Passenger"
              onChange={(e) =>
                handleTravelersChange("adult", parseInt(e.target.value, 10))
              }
            />
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm flex-1">
            <MdAirlineSeatReclineNormal className="text-blue-500" />
            <select
              className="outline-none bg-transparent w-full"
              onChange={(e) => handleInputChange("travel_class", e.target.value)}
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="FirstClass">First Class</option>
            </select>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="From (City or Airport)"
              className="w-full md:flex-1 p-3 border rounded-md outline-none"
              onChange={(e) => handleInputChange("departure_airport", e.target.value)}
            />
            <input
              type="text"
              placeholder="To (City or Airport)"
              className="w-full md:flex-1 p-3 border rounded-md outline-none"
              onChange={(e) => handleInputChange("arrival_airport", e.target.value)}
            />
            <input
              type="date"
              className="w-full md:flex-1 p-3 border rounded-md outline-none"
              onChange={(e) => handleInputChange("departure_date", e.target.value)}
            />
          </div>
          <div className="mt-4 text-right">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search Flights"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
