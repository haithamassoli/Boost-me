import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

function Game() {
  const { id } = useParams();
  return (
    <div className="mt-10 px-10">
      <h1 className="mb-10 text-4xl">Assassin's Creed® Valhalla</h1>
      <div className="grid grid-cols-4 gap-5">
        <Swiper
          // effect="coverflow"
          // slidesOffsetAfter={20}
          // allowSlideNext={true}
          // grabCursor="true"
          centeredSlides="true"
          slidesPerView={1}
          // spaceBetween={10}

          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          className=" col-span-3"
        >
          <SwiperSlide>
            <img
              // width={400}
              height={200}
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JGRgqSTqKmO1Bveq5p1WO/4ebac6e2922869a4bec387b402977540/acb_searchthumb_Mobile.jpg"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              height={200}
              width={200}
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://s3.gaming-cdn.com/images/products/6878/orig/jogo-steam-yakuza-like-a-dragon-cover.jpg"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              height={200}
              width={200}
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" transition-opacity duration-500 group-hover:opacity-75"
              src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640"
              alt="SIFU"
            />
          </SwiperSlide>
        </Swiper>
        <div>
          <img
            src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fassassins-creed-valhalla%2Fhome%2FAC-KINGDOM-PREORDER_STANDARD-EDITION_EPIC_Game_Logo_whiteblue_1000x375-1000x375-baa332e9500ef71697f4a31924488fe309c4784d.png?h=270&resize=1&w=480"
            alt="game"
          />
          <div className="mt-5 mb-3 flex items-center gap-3">
            <div className="rounded-md bg-green-400 px-2 py-1 font-semibold text-black">
              -40%
            </div>
            <div className="text-gray-400 line-through">$59.99</div>
            <div className="font-semibold">$23.99</div>
          </div>
          <p>Sale ends 3/17/2022 at 6:00 PM</p>
          <button className="mt-3 w-full rounded-lg bg-green-300 px-4 py-2 font-semibold text-black">
            BOOST ME
          </button>
          <div className="flex justify-center ">
            <div className="mb-3 xl:w-96">
              <select
                className="form-select focus:text-white-700 mt-5
      block
      w-full
      appearance-none
      rounded-lg
      border
      border-solid
      bg-black bg-clip-padding bg-no-repeat
      px-4 py-2
      font-normal
      text-white
      transition
      ease-in-out focus:border-green-300 focus:bg-black focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
