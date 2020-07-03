import store from "store";
import * as axiosClient from "axios";

export const axios = axiosClient.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    Authorization: store.get("token"),
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, Authorization, Content-Type, Accept",
  },
});
