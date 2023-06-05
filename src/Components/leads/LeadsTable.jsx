import React from "react";
import style from "./leadstable.module.css";
const LeadsTable = ({ data }) => {
  return (
    <table className={`table py-2 ${style.mainContainer}`}>
      <thead>
        <tr>
          <th scope="col">#</th>

          <th scope="col">Email</th>
          <th scope="col">content</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th>{++index}</th>
            <td>{item.email}</td>
            <td>{item.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadsTable;
