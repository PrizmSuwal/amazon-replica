import axios from "axios";

const instance = axios.create({
  baseUrl: '...' //The api clous function url
});

export default instance;