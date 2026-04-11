"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";

const Collection = () => {
  const router = useRouter();

  const handleTypeClick = (type: string) => {
    router.push(`/shop/breadcrumb1?type=${type}`);
  };

  return (
    <>
      <div className="collection-block style-six md:pt-20 pt-10">
        <div className="container">
          <div className="heading flex items-center justify-between gap-4 gap-y-2 flex-wrap">
            <div className="heading3">Explore Collections</div>
            <Link
              href={"/shop/collection"}
              className="text-button pb-1 border-b-2 border-black"
            >
              View All Collection
            </Link>
          </div>
          <div className="list-collection md:mt-10 mt-6">
            <Swiper
              spaceBetween={12}
              slidesPerView={2}
              loop={true}
              scrollbar={{
                hide: false,
              }}
              modules={[Navigation, Autoplay, Scrollbar]}
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
              className="h-full pb-6"
            >
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
                      alt="OnlineServices"
                    />
                  </div>
                  <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                    d-apps
                  </div>
                </div>
              </SwiperSlide>
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
                      alt="clothes"
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
                      alt="accessories"
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
                      alt="lingerie"
                    />
                  </div>
                  <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                    BusinessTools
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
