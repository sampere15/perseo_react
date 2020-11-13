import axios from "axios";

const API = "https://dev.perseo.tv/ws";

const instance = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const myaxios = {
  //  Our own axios configured
  post: (url, data) => {
    return instance.post(API + url, data);
  },
};

// export myaxios;
