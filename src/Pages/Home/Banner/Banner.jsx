import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/Images/banner/img1.jpg";
import img2 from "../../../assets/Images/banner/img2.jpg";
import img3 from "../../../assets/Images/banner/img3.jpg";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[600px]"
      >
        <SwiperSlide>
          <div
            alt="Slide 1"
            className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-white px-5">
              <h1 className="text-3xl md:text-5xl font-bold">
                Welcome to Our Store
              </h1>
              <p className="mt-3 text-lg md:text-xl">
                Discover the best products at amazing prices.
              </p>
              <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            alt="Slide 1"
            className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-white px-5">
              <h1 className="text-3xl md:text-5xl font-bold">
                Welcome to Our Store
              </h1>
              <p className="mt-3 text-lg md:text-xl">
                Discover the best products at amazing prices.
              </p>
              <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            alt="Slide 1"
            className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-white px-5">
              <h1 className="text-3xl md:text-5xl font-bold">
                Welcome to Our Store
              </h1>
              <p className="mt-3 text-lg md:text-xl">
                Discover the best products at amazing prices.
              </p>
              <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
