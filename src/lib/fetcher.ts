import axios, { AxiosInstance } from "axios";

import { getURL } from "./helper";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: getURL(),
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
