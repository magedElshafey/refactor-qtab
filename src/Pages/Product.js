import React from "react";
import Website from "../Components/Layouts/WebsiteLayout/Website";
import MainDetails from "../Components/product/mainDetails/MainDetails";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../Components/spinner/Spinner";
const fetchDetails = (api, id) => {
  return axios.get(`${api}/products/${id}/details`, {
    headers: {
      lang: "en",
    },
  });
};
const Product = ({ api }) => {
  const params = useParams();
  const { isLoading, data } = useQuery(
    ["product-details", params.id],
    () => fetchDetails(api, params.id),
    {
      cacheTime: 900000,
      staleTime: 450000,
    }
  );
  console.log("product details data is", data?.data);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Website>
            <MainDetails data={data?.data?.data} />
          </Website>
        </div>
      )}
    </>
  );
};

export default Product;
