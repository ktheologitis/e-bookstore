import axios, { AxiosResponse } from "axios";

export async function getProducts() {
  const response: AxiosResponse = await axios.get(
    "https://frozen-wave-24832.herokuapp.com/items/"
  );

  return response.data;
}
