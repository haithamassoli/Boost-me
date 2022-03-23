import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
import MobileGames from "../Components/MobileGames";

function Home() {
  return (
    <div className="pb-10  bg-[#11141D] ">
      <div className="pt-6 pb-4 flex items-center justify-between px-10 text-white">
        <h3 className="text-xl md:text-4xl">EXCLUSIVE GAMES</h3>
        <h3 className="flex cursor-pointer items-center text-xl md:text-4xl">
          SEE MORE
          <img
            className="ml-3 inline-block w-5 -rotate-90"
            style={{ filter: "invert(100%)" }}
            src="/assets/icons/angle-down.svg"
            alt="see more"
          />
        </h3>
      </div>
      <div className="  bg-[#11141D]">
        <Swiper
          // effect="coverflow"
          // slidesOffsetAfter={20}
          // allowSlideNext={true}
          // grabCursor="true"
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
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://s3.gaming-cdn.com/images/products/6878/orig/jogo-steam-yakuza-like-a-dragon-cover.jpg"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
          <SwiperSlide className="group cursor-pointer">
            <h4
              className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/60
             px-3 py-1 text-sm font-semibold text-white"
            >
              ACTION
            </h4>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
            <h3 className="absolute bottom-6 left-auto z-10 text-3xl  font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
              DAYS GONE
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
      <MobileGames system="android" />
      <MobileGames system="ios" />
      <div className="mt-12 grid grid-cols-2 gap-2  px-4 md:grid-cols-4 md:px-20 lg:grid-cols-5">
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className="z-10 transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />

          <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
        <div className="group relative cursor-pointer">
          <div
            className="absolute bottom-0 left-0 h-44 w-full "
            style={{
              background:
                "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
            }}
          ></div>
          <img
            className=" transition-opacity duration-500 group-hover:opacity-75"
            src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
            alt="SIFU"
          />
          <h3 className="absolute bottom-6 z-10 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
            DAYS GONE
          </h3>
        </div>
      </div>
      <button className="m-auto mt-10 flex justify-center rounded-tr-3xl rounded-bl-3xl px-10 py-3 text-center ring-2 ring-green-400">
        LOAD MORE GAMES
      </button>
    </div>
  );
}

export default Home;
