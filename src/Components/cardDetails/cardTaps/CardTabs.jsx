import React, { useState } from "react";
import style from "./cardTabs.module.css";
import ProductCard from "../../utils/ProductCard/ProductCard";
import Stats from "../../dashboard/stats/Stats";
const CardTabs = ({ products, leads, charts }) => {
  const [showProducts, setShowProducts] = useState(true);
  const [showLeads, setShowLeads] = useState(false);
  const [showCharts, setShowCharts] = useState(false);

  return (
    <div className="container py-5">
      <div className="pb-2 d-flex justify-content-center gap-4">
        <button
          className={`${style.btn} ${showProducts ? style.active : null}`}
          onClick={() => {
            setShowProducts(true);
            setShowLeads(false);
            setShowCharts(false);
          }}
        >
          Products
        </button>
        <button
          className={`${style.btn} ${showLeads ? style.active : null}`}
          onClick={() => {
            setShowProducts(false);
            setShowLeads(true);
            setShowCharts(false);
          }}
        >
          leads
        </button>
        <button
          className={`${style.btn} ${showCharts ? style.active : null}`}
          onClick={() => {
            setShowProducts(false);
            setShowLeads(false);
            setShowCharts(true);
          }}
        >
          statistics
        </button>
      </div>
      <div className="py-3">
        {showProducts && (
          <div className="row">
            {products?.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        )}
        {showCharts && <Stats charts={charts} />}
        {showLeads && leads.length && (
          <table className={`table py-2 ${style.mainContainer}`}>
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col">Email</th>
                <th scope="col">content</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((item, index) => (
                <tr key={index}>
                  <th>{++index}</th>
                  <td>{item.email}</td>
                  <td>{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {showLeads && !leads.length && (
          <h3 className="py-5 text-center fw-bold fs-3">No leads Yet</h3>
        )}
      </div>
    </div>
  );
};

export default CardTabs;
