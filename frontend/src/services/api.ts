import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
  headers: { ["Content-Type"]: "application/json" },
});

export default api;
