import React from "react";
// import components
import CategoryNav from "../components/CategoryNav";
import MainSlider from "../components/MainSlider";
// images
import PromoAcer from "../img/promo_img_acer.jpg";
import PromoAsus from "../img/promo_img_asus.jpg";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0 bg-pink-50/10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promos*/}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/* promo 1 */}
            <div className="grad flex flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full ssm:mt-1 xl:justify-center">
                <div className="text-[20px] w-[120px] uppercase font-medium leading-snug mb-4 z-30">
                  Giảm 15% tất cả laptop acer
                </div>
                <a
                  href="products/1"
                  className="uppercase text-[#e00] font-medium"
                >
                  Mua ngay
                </a>
              </div>
              {/* img */}
              <img
                className="absolute right-0 w-[150px] h-[150px] ssm:w-[200px] ssm:h-[200px] justify-center z-20"
                src={PromoAcer}
                alt=""
              />
            </div>
            {/* promo 2 */}
            <div className="grad flex flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full ssm:mt-1 xl:justify-center">
                <div className="text-[20px] w-[120px] uppercase font-medium leading-snug mb-4 z-30">
                  Giảm 10% tất cả laptop asus
                </div>
                <a
                  href="products/2"
                  className="uppercase text-[#e00] font-medium"
                >
                  Mua ngay
                </a>
              </div>
              {/* img */}
              <img
                className="absolute right-0 w-[150px] h-[150px] ssm:w-[200px] ssm:h-[200px] z-20"
                src={PromoAsus}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
