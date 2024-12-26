import { Store } from "pullstate";

export const FlightStore = new Store({
  searchParams: {
    journey_type: "OneWay",
    departure_airport: "",
    arrival_airport: "",
    departure_date: "",
    travelers: {
      adult: 1,
      child: 0,
      infant: 0,
    },
    travel_class: "Economy",
  },
  searchResults: [],
});
