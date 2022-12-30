import axios from "axios";
import { DUMMY_JSON_API_URL } from "src/common/constants";

const api = axios.create({
  baseURL: DUMMY_JSON_API_URL,
});

export default api;
