"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";
// import Fade from 'react-reveal'

const Collection = () => {
  const router = useRouter();

  const handleTypeClick = (type: string) => {
    router.push(`/shop/breadcrumb1?type=${type}`);
  };

  return (
    <>
      <div className="collection-block md:pt-20 pt-10">
        <div className="container">
          <div className="heading3 text-center">Explore Collections</div>
        </div>
        <div className="list-collection section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            navigation
            loop={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="h-full"
          >
            <SwiperSlide>
              <div
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleTypeClick("streaming")}
              >
                <div className="bg-img">
                  <Image
                    src={"/images/collection/streaming.png"}
                    width={1000}
                    height={600}
                    alt="streaming"
                  />
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  streaming
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleTypeClick("top")}
              >
                <div className="bg-img">
                  <Image
                    src={"/images/collection/top.png"}
                    width={1000}
                    height={600}
                    alt="top"
                  />
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  top
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleTypeClick("SofTools")}
              >
                <div className="bg-img">
                  <Image
                    src={"/images/collection/SofTools.png"}
                    width={1000}
                    height={600}
                    alt="SofTools"
                  />
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  SofTools
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleTypeClick("OnlineServices")}
              >
                <div className="bg-img">
                  <Image
                    src={"/images/collection/OnlineServices.png"}
                    width={1000}
                    height={600}
                    alt="OnlineServices"
                  />
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  OnlineServices
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleTypeClick("BusinessTools")}
              >
                <div className="bg-img">
                  <Image
                    src={"/images/collection/BusinessTools.png"}
                    width={1000}
                    height={600}
                    alt="BusinessTools"
                  />
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  BusinessTools
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleTypeClick("d-apps")}
              >
                <div className="bg-img">
                  <Image
                    src={"/images/collection/t-shirt.png"}
                    width={1000}
                    height={600}
                    alt="d-apps"
                  />
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  d-apps
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Collection;
