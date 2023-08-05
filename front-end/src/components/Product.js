import React from "react";
// link
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-full h-[375px] rounded-[4px] overflow-hidden relative group">
        {/* badge */}
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-1 right-2 px-2 rounded-full z-10 ">
            Mới
          </div>
        ) : (
          ""
        )}
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[240px] h-auto group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="px-6 pb-8 ml-6 flex flex-col">
          {/* category title */}
          <div className="text-[18px] text-primary font-medium capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          <div className="text-[16px] text-[#333] font-normal capitalize mb-4 lg:mb-9">
            {product.attributes.title}
          </div>
          {/* price */}
          <div className="text-lg text-primary font-semibold">
            {product.attributes.price} $
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
