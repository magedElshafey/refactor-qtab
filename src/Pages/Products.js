import React from "react";
import Website from "../Components/Layouts/WebsiteLayout/Website";
import HeroProducts from "../Components/products/hero/HeroProducts";
import AllProducts from "../Components/products/allProducts/AllProducts";

const Products = () => {
  return (
    <div>
      <Website>
        <HeroProducts />
        <AllProducts />
      </Website>
    </div>
  );
};

export default Products;
