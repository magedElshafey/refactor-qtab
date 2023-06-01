import React from "react";
import style from "./store.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Spinner from "../../spinner/Spinner";
import { HashLink } from "react-router-hash-link";
import AddToCartBtn from "../../utilits/addToCartBtn/AddToCartBtn";
import { useProducts } from "../../Hooks/useProducts";
const Store = ({ api }) => {
  const { isLoading, data } = useProducts();

  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 20,
    navigation: true,
    autoplay: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="store" className="py-5 container-fluid">
          <Swiper
            data-aos="fade-up"
            data-aos-offset="200"
            {...swiperOptions}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data?.data?.data?.map((item, index) => (
              <SwiperSlide className="slider position-relative" key={index}>
                <HashLink to={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt="product/img"
                    loading="lazy"
                    className={style.mainImg}
                  />
                </HashLink>
                <div className="text-white">
                  <HashLink to={`/products/${item.id}`} className="t-none">
                    <p className={`mb-3 ${style.title}`}>{item.title}</p>
                  </HashLink>
                  <p className={`mb-3 ${style.desc}`}>
                    {item.description.substring(0, 20)}....
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className={`text-white fs-4 ${style.price}`}>
                    {item.price}
                  </p>
                  <AddToCartBtn api={api} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Store;
