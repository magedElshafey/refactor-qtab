import React, { useState } from "react";
import style from "./cardTabs.module.css";
import ProductCard from "../../utils/ProductCard/ProductCard";
const CardTabs = ({ products, leads }) => {
  const [showProducts, setShowProducts] = useState(true);
  const [showLeads, setShowLeads] = useState(false);
  return (
    <div className="pb-2 d-flex justify-content-center gap-4">
      <button
        className={`${style.btn} ${showProducts ? style.active : null}`}
        onClick={() => {
          setShowProducts(true);
          setShowLeads(false);
        }}
      >
        Products
      </button>
      <button
        className={`${style.btn} ${showLeads ? style.active : null}`}
        onClick={() => {
          setShowProducts(false);
          setShowLeads(true);
        }}
      >
        leads
      </button>
      <div className="py-3">
        {showProducts && (
          <div className="row">
            {products?.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTabs;
