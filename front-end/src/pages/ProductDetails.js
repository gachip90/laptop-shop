import React, { useContext } from "react";
// useParams hook
import { useParams } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import RelatedProducts from "../components/RelatedProducts";
// context
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  // get product data based on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return <div className="container mx-auto">loading...</div>;
  }
  // convert array from string
  const desArr = data[0].attributes.description.split("\n");
  // category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row lg:gap-[30px] mb-[30px]">
          <div
            className="flex-1 my-10 lg:my-0 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex 
          justify-center items-center"
          >
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=""
              className="w-full max-w-[65%] py-10 lg:py-0"
            />
          </div>
          <div
            className="flex-1 bg-white p-6 sm:p-12 xl:p-20 rounded-lg
          flex flex-col justify-center"
          >
            {/* category title */}
            <div className="uppercase text-primary text-[18px] md:text-[20px] font-medium mb-2">
              Laptop {data[0].attributes.categories.data[0].attributes.title}
            </div>
            {/* title */}
            <h2 className="h2 text-[24px] md:text-[30px] mb-4">
              {data[0].attributes.title}
            </h2>
            {/* description */}
            {desArr?.map((item, id) => {
              return (
                <p className="text-base md:text-lg" key={id}>
                  - {item}
                  <br />
                </p>
              );
            })}
            {/* price & btn */}
            <div className="flex items-center gap-x-4 ssm:gap-x-8 mt-8">
              {/* price */}
              <div className="text-xl ssm:text-2xl md:text-3xl text-primary font-semibold min-w-[60px]">
                {data[0].attributes.price} $
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent text-[12px] sm:text-[14px] px-5 sm:px-10"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
