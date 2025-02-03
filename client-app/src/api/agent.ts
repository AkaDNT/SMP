import axios, { AxiosResponse } from "axios";
import { Activity } from "../app/models/Activity";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  create: (url: string, body: Activity) =>
    axios.post(url, body).then(responseBody),
  patch: (url: string, body: Activity) =>
    axios.patch(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Activities = {
  detail: (id: string) => request.get(`activities/${id}`),
  list: () => request.get(`activities`),
};

const agent = {
  Activities,
};

export default agent;
