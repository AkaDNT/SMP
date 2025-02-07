import axios, { AxiosResponse } from "axios";
import { Activity } from "../app/models/Activity";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  create: <T>(url: string, body: Activity) =>
    axios.post<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: Activity) =>
    axios.patch<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
  create: (body: Activity) => request.create<Activity>(`activities`, body),
  detail: (id: string) => request.get<Activity>(`activities/${id}`),
  list: () => request.get<Activity[]>(`activities`),
  patch: (id: string, body: Activity) =>
    request.patch<Activity>(`activities/${id}`, body),
  delete: (id: string) => request.del<Activity>(`activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
