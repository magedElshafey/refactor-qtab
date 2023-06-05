import axios from "axios";
const token = window.localStorage.getItem("userToken")
  ? JSON.parse(window.localStorage.getItem("userToken"))
  : null;
const client = axios.create({
  baseURL: "https://qtap-dashboard.qutap.co/api",
  headers: {
    "X-CSRF-Token": document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content"),
    "Access-Control-Allow-Credentials": "true",
    credentials: "include",
    "Content-Type": "application/json",
    lang: "en",
    Authorization: `Bearer ${token}`,
  },
});
export const request = ({ ...options }) => {
  const onSuccess = (response) => {
    return response;
  };
  const onError = (error) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
