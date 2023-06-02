import React from "react";
import Website from "../Components/Layouts/WebsiteLayout/Website";
import MainDetails from "../Components/product/mainDetails/MainDetails";
import { useQuery, useQueryClient } from "react-query";
import { request } from "../Components/utils/axios-utils";
import { useParams } from "react-router-dom";
import Spinner from "../Components/spinner/Spinner";
import Tabs from "../Components/product/tabs/Tabs";
const fetchDetails = (id) => {
  return request({ url: `/products/${id}/details` });
};
const Product = () => {
  const params = useParams();

  const { isLoading, data } = useQuery(
    ["product-details", params.id],
    () => fetchDetails(params.id),
    {
      cacheTime: 900000,
      staleTime: 450000,
    }
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Website>
            <MainDetails data={data?.data?.data} />
            <Tabs
              video={data?.data?.data?.video}
              desc={data?.data?.data?.description}
            />
          </Website>
        </div>
      )}
    </>
  );
};

export default Product;
