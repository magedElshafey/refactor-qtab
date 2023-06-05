import React from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import { useQuery } from "react-query";
import { request } from "../Components/utils/axios-utils";
import Spinner from "../Components/spinner/Spinner.jsx";
import Swal from "sweetalert2";
import CardDetails from "../Components/dashboard/cardDetails/CardDetails";
import Icons from "../Components/dashboard/icons/Icons";
import Stats from "../Components/dashboard/stats/Stats";
const getCards = () => {
  return request({ url: "/statistics/card" });
};
const Dashboard = () => {
  const { isLoading, data, isError, error } = useQuery("get-cards", getCards);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return Swal.fire({
      icon: "error",
      showCancelButton: false,
      title: error.message,
    });
  }

  return (
    <div>
      <Dashboardlayout>
        {data?.data?.data.length ? (
          data.data.data.map((item, index) => (
            <div key={index} className="row  mb-4 justify-content-center">
              <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-0">
                <CardDetails data={item} />
              </div>
              <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column gap-3 align-items-center">
                <Icons
                  message={item.message}
                  visits={item.visits}
                  share={item.share}
                />
                <Stats charts={item.stats} />
              </div>
            </div>
          ))
        ) : (
          <p className=" fs-3 fw-bold mt-5 pt-5 d-flex justify-content-center align-items-center">
            No Cards Yet
          </p>
        )}
      </Dashboardlayout>
    </div>
  );
};

export default Dashboard;
