import React from "react";
import Website from "../Components/Layouts/WebsiteLayout/Website";
import { useQuery } from "react-query";
import axios from "axios";
import Spinner from "../Components/spinner/Spinner";
// fetch home page data
const fetchData = (api) => {
  return axios.get(`${api}/mainpage`, {
    headers: {
      lang: "en",
    },
  });
};
const Home = ({ api }) => {
  const { data, isLoading } = useQuery("home page", () => fetchData(api), {
    cacheTime: 1800000,
    staleTime: 1800000,
  });
  console.log("home page data is", data?.data);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Website>
          <p className="text-white">home page</p>
        </Website>
      )}
    </div>
  );
};

export default Home;
