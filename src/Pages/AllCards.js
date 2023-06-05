import React from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import { request } from "../Components/utils/axios-utils";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Spinner from "../Components/spinner/Spinner";
import CardsTable from "../Components/AllCards/CardsTable";
const getCards = () => {
  return request({ url: "/statistics/card" });
};
const AllCards = () => {
  const { isLoading, data, isError, error } = useQuery("cards", getCards);
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
        <div className="py-5">
          {!data.data.data.length && (
            <div className="fw-bold text-center fs-4">No cards Yet</div>
          )}
          {data.data.data.length && (
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-8">
                <CardsTable data={data.data.data} />
              </div>
            </div>
          )}
        </div>
      </Dashboardlayout>
    </div>
  );
};

export default AllCards;
