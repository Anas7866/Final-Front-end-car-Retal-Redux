import axios from "axios";
const BASE_URL_API = "http://127.0.0.1:8000/api";

const axiosConfig = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    // "X-Requested-With": "XMLHttpRequest",
  },
});

axiosConfig.interceptors.response.use(function (response) {
  return response;
});

export default axiosConfig;
