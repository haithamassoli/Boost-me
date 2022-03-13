import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Home() {
  return (
    <>
      <div className="mt-6 flex items-center justify-between px-10">
        <h3>EXCLUSIVE GAMES</h3>
        <h3>
          SEE MORE
          <img
            className="ml-3 inline-block w-5 -rotate-90 cursor-pointer"
            src="/assets/icons/angle-down.svg"
            alt="see more"
          />
        </h3>
      </div>

      <Swiper
        slidesPerView={
          window.innerWidth > 1000 ? 4 : window.innerWidth > 600 ? 3 : 2
        }
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="swiper--overlay">
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default Home;
