import React, { useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../../utilits/ProductCard/ProductCard";
import { useProducts } from "../../Hooks/useProducts";
import Spinner from "../../spinner/Spinner";
const AllProducts = () => {
  const { isLoading, data } = useProducts();
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = data?.data?.data?.length / usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const sectionRef = useRef(null);
  const handleClick = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container pb-4">
          <div ref={sectionRef} className="row">
            {data?.data?.data
              ?.slice(pagesVisited, pagesVisited + usersPerPage)
              .map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            breakLabel="..."
            onClick={handleClick}
          />
        </div>
      )}
    </>
  );
};

export default AllProducts;
