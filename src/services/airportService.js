import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://api.innotraveltech.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    apikey: "S10944771678913327924",
    secretecode: "dxbz4eCVjJ5U6TevfIUqMVD1LbMG3eWfLdJ14qjQZRy5j",
  },
});



export const fetchAirportSuggestions = async (query) => {
  const response = await apiClient.get(`/tools/airport-autosuggetion-data`, {
    params: { search: query },
  });
  return response.data;
};
