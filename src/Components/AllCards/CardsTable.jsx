import React from "react";
import style from "./cardTable.module.css";
import DeleteCardBtn from "../utils/deleteCardBtn/DeleteCardBtn";
const CardsTable = ({ data }) => {
  return (
    <table
      className={`text-center m-0 p-0 table col-12 col-md-6 py-2 ${style.mainContainer}`}
    >
      <thead>
        <tr>
          <th>id</th>

          <th>Name</th>
          <th>Email</th>
          <th>Card Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th>{++index}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.theme}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CardsTable;
