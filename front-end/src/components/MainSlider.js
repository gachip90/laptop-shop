import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
// import required modules
import { Pagination } from "swiper/modules";
// img
import SaleLaptop1 from "../img/sale_latop_1.png";
import SaleLaptop2 from "../img/sale_laptop_2.png";
import SaleLaptop3 from "../img/sale_laptop_3.jpg";

// data
const sliderData = [
  {
    img: SaleLaptop1,
    pretitle: "Ưu đãi đặc biệt",
    titlePart1: "Flash Sale",
    titlePart2: "Giảm đến",
    titlePart3: "40%",
    btnText: "Mua ngay",
  },
  {
    img: SaleLaptop2,
    pretitle: "Ưu đãi đặc biệt",
    titlePart1: "Giảm",
    titlePart2: "Trực tiếp",
    titlePart3: "200.000đ",
    btnText: "Shop now",
  },
  {
    img: SaleLaptop3,
    pretitle: "Ưu đãi đặc biệt",
    titlePart1: "Tặng Balo",
    titlePart2: "Trị giá",
    titlePart3: "300.000đ",
    btnText: "Shop now",
  },
];
const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-white xl:bg-mainSlider xl:bg-no-repeat
      max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2x1"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                {/* text */}
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {slide.pretitle}
                  </div>
                  <div
                    className="text-3xl md:text-[46px] font-semibold uppercase
                    leading-tight text-center lg:text-left mb-8 xl:mb-20"
                  >
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <a href="#">
                    <button className="btn btn-accent mx-auto lg:mx-0">
                      Mua ngay
                    </button>
                  </a>
                </div>
                {/* img */}
                <div className="flex-1">
                  <img
                    className="xl:absolute lg:w-[320px] lg:h-[320px] my-5 lg:my-0"
                    src={slide.img}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
