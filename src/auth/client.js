import axios from 'axios';
import settings from "./settings";

const apiClient = axios.create({
  baseURL: settings.API_BASE_URL,
});

export default apiClient;
