import React from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { request } from "../Components/utils/axios-utils";
import Spinner from "../Components/spinner/Spinner";
import Stats from "../Components/dashboard/stats/Stats";
import Icons from "../Components/dashboard/icons/Icons";
import CardTabs from "../Components/cardDetails/cardTaps/CardTabs";
const getDetails = (id) => {
  request({
    url: "/Dashboard/view/card",
    headers: {
      card: id,
    },
  });
};

const CardDetails = () => {
  const params = useParams();
  const { isLoading, data } = useQuery(
    ["card-details", params.id],
    () => getDetails(params.id),
    {
      cacheTime: 1800000,
      staleTime: 1800000,
    }
  );

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Dashboardlayout>
          <div className="mb-4">
            <CardTabs
              products={data?.data?.data?.products}
              leads={data?.data?.data?.leades}
            />
          </div>
          <div className="mb-4">
            <Stats charts={data?.data?.data?.stats} />
          </div>
          <Icons
            visits={data?.data?.data?.visits}
            message={data?.data?.data?.message}
            share={data?.data?.data?.share}
          />
        </Dashboardlayout>
      )}
    </div>
  );
};

export default CardDetails;
/*
   
*/
