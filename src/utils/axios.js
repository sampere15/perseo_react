import axios from "axios";

const API = "https://dev.perseo.tv/ws";

const instance = axios.create({
  baseURL: API,
});

const axiosClient = {
  //  Our own axios configured
  post: (url, data) => {
    return instance.post(API + url, data);
  },
};

export default axiosClient;
