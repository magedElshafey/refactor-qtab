import React from "react";
import { request } from "../Components/utils/axios-utils";
import { useQuery } from "react-query";
import Spinner from "../Components/spinner/Spinner";
import Swal from "sweetalert2";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import LeadsTable from "../Components/leads/LeadsTable";
const getLeads = () => {
  return request({ url: "/Dashboard/leads" });
};
const Leads = () => {
  const { isLoading, isError, error, data } = useQuery("get-leads", getLeads, {
    cacheTime: 1800000,
    staleTime: 180000,
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return Swal.fire({
      icon: error,
      title: error.message,
    });
  } else {
    console.log("leads page", data?.data);
  }
  return (
    <div>
      <Dashboardlayout>
        <div className="container py-3">
          {!data?.data.data.length && (
            <div className="text-center fw-bold fs-3">No Leads Yet</div>
          )}
          {data?.data.data.length && (
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-8">
                <LeadsTable data={data.data.data} />
              </div>
            </div>
          )}
        </div>
      </Dashboardlayout>
    </div>
  );
};

export default Leads;
