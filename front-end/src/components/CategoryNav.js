import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch";
// link
import { Link, useParams } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");
  const { id } = useParams();
  return (
    <aside className="hidden xl:flex">
      <div className="bg-white flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Danh mục sản phẩm
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className={`${
                  id == category.id ? "text-[#e00] font-semibold" : "text-black"
                } cursor-pointer uppercase`}
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
