import axios, { AxiosInstance } from "axios";

const APP_BASE_URI = "https://api.hnpwa.com/v0/";
const options = {};

const create = (url: string, option = {}): AxiosInstance => {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
};

const createWithAuth = (url: string, option = {}) => {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
};
