import React from "react";
import Website from "../Components/Layouts/WebsiteLayout/Website";
import { useQuery } from "react-query";
import axios from "axios";
import Spinner from "../Components/spinner/Spinner";
import Hero from "../Components/home/hero/Hero";
import Feat from "../Components/home/featuers/Feat";
import About from "../Components/home/about/About";
import Store from "../Components/home/store/Store";
import Contact from "../Components/home/Contact/Contact";
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
  console.log("data from home page", data?.data);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Website>
          <Hero data={data?.data?.data?.mainpage} />
          <Feat data={data?.data?.data?.features} />
          <About data={data?.data?.data?.aboutus} />
          <Store api={api} />
          <Contact data={data?.data?.data?.followUs} />
        </Website>
      )}
    </div>
  );
};

export default Home;
