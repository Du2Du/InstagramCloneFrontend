import axios from "axios";

export const Backend = axios.create({
  baseURL: "http://localhost:3000/api",
});
Backend.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");

    if (token)
      return {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
      };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
