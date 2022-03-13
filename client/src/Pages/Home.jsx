import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

function Home() {
  return (
    <>
      <div className="mt-6 flex items-center justify-between px-10">
        <h3 className="text-4xl">EXCLUSIVE GAMES</h3>
        <h3 className="text-4xl">
          SEE MORE
          <img
            className="ml-3 inline-block w-5 -rotate-90 cursor-pointer"
            src="/assets/icons/angle-down.svg"
            alt="see more"
          />
        </h3>
      </div>
      <div className="  bg-black">
        <Swiper
          // effect="coverflow"
          // slidesOffsetAfter={20}
          // allowSlideNext={true}
          grabCursor="true"
          centeredSlides="true"
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            // el: ".customized-swiper-pagination",
            clickable: true,
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          // coverflowEffect={{
          //   rotate: 0, // slide rotation degree
          //   stretch: 0, // stretches the space between the slides in px
          //   depth: 0, // offsets the depth of neighboring slides
          //   modifier: 1, // effect multiplier
          //   slideShadows: false, // disables the shadow around the slide container
          // }}
          breakpoints={{
            1000: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          className="mySwiper pb-10"
        >
          <SwiperSlide>
            <img
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3.gaming-cdn.com/images/products/6878/orig/jogo-steam-yakuza-like-a-dragon-cover.jpg"
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
        </Swiper>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        explicabo aliquid quas dicta nemo vel. Tenetur, laboriosam at optio
        blanditiis voluptate tempora culpa? Voluptates incidunt numquam
        inventore animi, neque eaque!
      </div>
    </>
  );
}

export default Home;
