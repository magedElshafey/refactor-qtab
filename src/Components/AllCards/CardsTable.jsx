import React from "react";
import style from "./cardTable.module.css";
import DeleteCardBtn from "../utils/deleteCardBtn/DeleteCardBtn";
const CardsTable = ({ data }) => {
  return (
    <table className={`table py-2 ${style.mainContainer}`}>
      <thead>
        <tr>
          <th scope="col">id</th>

          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Card Type</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th>{++index}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.theme}</td>
            <td>
              <DeleteCardBtn item={item} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CardsTable;
