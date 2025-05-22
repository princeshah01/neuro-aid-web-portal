import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com/api", // Replace with your actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional: request timeout in ms
});

export default axiosInstance;
