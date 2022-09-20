import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: "87dfa1c669eea853da609d4968d294be",
  },
});

export default instance;
