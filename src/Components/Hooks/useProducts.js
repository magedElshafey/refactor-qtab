import { useQuery } from "react-query";
import axios from "axios";
const fetchProducts = () => {
  return axios.get("https://qtap-dashboard.qutap.co/api/products", {
    headers: {
      lang: "en",
    },
  });
};
export const useProducts = () => {
  return useQuery("products", fetchProducts, {
    cacheTime: 900000,
    staleTime: 450000,
  });
};
