import React from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { request } from "../Components/utils/axios-utils";
import Spinner from "../Components/spinner/Spinner";
import Stats from "../Components/dashboard/stats/Stats";
import Icons from "../Components/dashboard/icons/Icons";
import CardTabs from "../Components/cardDetails/cardTaps/CardTabs";
import axios from "axios";
import Swal from "sweetalert2";
const token = JSON.parse(window.localStorage.getItem("userToken"));

const CardDetails = () => {
  const params = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["card-details", parseInt(params.id)],
    () => {
      return axios.get(
        `https://qtap-dashboard.qutap.co/api/Dashboard/view/card`,
        {
          headers: {
            "X-CSRF-Token": document
              .querySelector('meta[name="csrf-token"]')
              .getAttribute("content"),
            "Access-Control-Allow-Credentials": "true",
            credentials: "include",
            "Content-Type": "application/json",
            lang: "en",
            Authorization: `Bearer ${token}`,
            card: parseInt(params.id),
          },
        }
      );
    },
    {
      cacheTime: 1800000,
      staleTime: 1800000,
    }
  );
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return Swal.fire({
      icon: error,
      title: error.message,
    });
  } else {
    console.log(data?.data?.data);
  }
  return (
    <div>
      <Dashboardlayout>
        <div className="mb-4">
          <CardTabs
            products={data?.data?.data.products}
            leads={data?.data?.data.leads}
            charts={data?.data?.data.stats}
          />
        </div>

        <Icons
          visits={data?.data?.data.visits}
          message={data?.data?.data.message}
          share={data?.data?.data.share}
        />
      </Dashboardlayout>
    </div>
  );
};

export default CardDetails;
/*
     <div>
      {isLoading ? (
        <Spinner />
      ) : (
       
      )}
    </div>
*/
