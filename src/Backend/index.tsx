import axios from "axios";

export const Backend = axios.create({
  baseURL: "http://localhost:3000/api",
});
