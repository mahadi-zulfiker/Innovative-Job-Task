import axios from 'axios';

export const searchFlights = async (searchPayload) => {
  try {
    const response = await axios.post(`/flight/search`, searchPayload);
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};

