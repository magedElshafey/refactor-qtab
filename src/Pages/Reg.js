import React from "react";
import Website from "../Components/Layouts/WebsiteLayout/Website";
import RegForm from "../Components/Reg/RegForm";

const Reg = () => {
  return (
    <div>
      <Website>
        <div className="pt-5">
          <RegForm />
        </div>
      </Website>
    </div>
  );
};

export default Reg;
