export const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://api:3001"
    : "http://localhost:4000";
