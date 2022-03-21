import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

function Game() {
  const { id } = useParams();
  return (
    <div className="mt-10 px-10">
      <h1 className="mb-10 text-4xl">Assassin's Creed® Valhalla</h1>
      <div className="grid grid-cols-5 justify-around gap-5">
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
          className="col-span-5 md:col-span-3"
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
        <div className="col-span-5 m-10 md:col-span-2 md:m-0 lg:m-5 xl:m-10">
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

          <div className="flex justify-center ">
            <div className="mb-3 w-full">
              <div>
                <div
                  className="relative mt-5 flex w-full items-center justify-evenly
                            rounded-lg
                            border-2
                            border-solid
                            border-[#232b46]
                            after:absolute after:top-1 after:left-[75px]
                            after:text-[15px]
                            after:text-[#979aae] after:content-['Current-Division']"
                >
                  <img
                    className="h-[60px] border-r-2 border-[#232b46] object-contain p-2"
                    src="https://eloking.com/img/icons/valorant/ranks/matchmaking/18@2x.png"
                    alt=""
                  />
                  <select
                    className="form-select focus:text-white-700 w-full cursor-pointer bg-[#080F28] px-4 py-5 pb-2 font-normal
                            text-white
                            focus:border-green-300 focus:outline-none"
                  >
                    <option value="1">Bronze |</option>
                    <option value="2">Bronze ||</option>
                    <option value="3">Bronze |||</option>
                    <option value="3">Silver |</option>
                    <option value="3">Silver ||</option>
                    <option value="3">Silver |||</option>
                    <option value="3">Gold |</option>
                    <option value="3">Gold ||</option>
                    <option value="3">Gold |||</option>
                  </select>
                </div>
                <div
                  className="relative mt-5 flex w-full items-center justify-evenly
                     rounded-lg
                     border-2
                     border-solid
                     border-[#232b46]
                     after:absolute after:top-1 after:left-[75px]
                     after:text-[15px]
                     after:text-[#979aae] after:content-['Current-Division']"
                >
                  <img
                    className="h-[60px] border-r-2 border-[#232b46] object-contain p-2"
                    src="https://eloking.com/img/icons/valorant/ranks/matchmaking/18@2x.png"
                    alt=""
                  />
                  <select
                    className="form-select focus:text-white-700 w-full cursor-pointer bg-[#080F28] px-4 py-5 pb-2 font-normal
                    text-white
                    focus:border-green-300 focus:outline-none"
                  >
                    <option value="1">Bronze |</option>
                    <option value="2">Bronze ||</option>
                    <option value="3">Bronze |||</option>
                    <option value="3">Silver |</option>
                    <option value="3">Silver ||</option>
                    <option value="3">Silver |||</option>
                    <option value="3">Gold |</option>
                    <option value="3">Gold ||</option>
                    <option value="3">Gold |||</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 items-center justify-center gap-3 lg:grid-cols-2">
                <label
                  className="form-check-label
                   group relative inline-block
                    text-white after:absolute
                    after:top-0 after:right-0
                    after:flex after:h-5
                    after:w-1 after:items-center 
                    after:justify-center after:rounded-tr-md
                    after:rounded-bl-md
                    after:border-2
                    after:border-green-500/20
                    after:bg-[#3FB9BE] 
                    after:px-2 after:text-[13px]
                    after:font-bold 
                    after:text-black 
                    after:content-['i']"
                  htmlFor="inlineCheckbox1"
                >
                  <div className="z-100 absolute -right-44 -top-48 hidden h-48 w-48 rounded-xl bg-black p-5 group-hover:block">
                    <div>
                      <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3FB9BE]">
                        <i className="fa-solid fa-info"></i>
                      </span>
                      <h5 className="ml-2 inline font-medium text-[#3FB9BE]">
                        INFO
                      </h5>
                    </div>
                    <p className="text-sm">
                      You will not need to share your account credentials with
                      the booster. Instead, the booster will play together with
                      you in a shared lobby
                    </p>
                  </div>
                  <div className="form-check form-check-inline cursor-pointer rounded-lg border border-gray-600 bg-slate-800 py-3 px-2">
                    <input
                      className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-black bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-green-300 checked:bg-green-300 focus:outline-none"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    Live Stream
                  </div>
                </label>
                <label
                  className="form-check-label
                   group relative
                    inline-block
                     text-white
                      after:absolute 
                      after:top-0 after:right-0 
                      after:flex after:h-5 
                      after:w-1 after:items-center 
                      after:justify-center 
                      after:rounded-tr-md 
                      after:rounded-bl-md 
                      after:border-2 
                      after:border-green-500/20 
                      after:bg-[#3FB9BE] 
                      after:px-2 
                      after:text-[13px] 
                      after:font-bold 
                      after:text-black
                   after:content-['i']"
                  htmlFor="inlineCheckbox2"
                >
                  <div className="z-100 absolute -right-44 -top-48 hidden h-48 w-48 rounded-xl bg-black p-5 group-hover:block">
                    <div>
                      <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3FB9BE]">
                        <i className="fa-solid fa-info"></i>
                      </span>
                      <h5 className="ml-2 inline font-medium text-[#3FB9BE]">
                        INFO
                      </h5>
                    </div>
                    <p className="text-sm">
                      You will not need to share your account credentials with
                      the booster. Instead, the booster will play together with
                      you in a shared lobby
                    </p>
                  </div>
                  <div className="form-check form-check-inline cursor-pointer rounded-lg border border-gray-600 bg-slate-800 px-2 py-3">
                    <input
                      className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-black bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-green-300 checked:bg-green-300 focus:outline-none"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    Appear Online
                    <span className="ml-3 rounded-xl bg-blue-500 px-2 font-semibold">
                      Free
                    </span>
                  </div>
                </label>
                <label
                  className="form-check-label group relative inline-block text-white after:absolute after:top-0 after:right-0 after:flex after:h-5 after:w-1 after:items-center after:justify-center after:rounded-tr-md after:rounded-bl-md after:border-2 after:border-green-500/20 after:bg-[#3FB9BE] after:px-2 after:text-[13px] after:font-bold after:text-black after:content-['i']"
                  htmlFor="inlineCheckbox3"
                >
                  <div className="z-100 absolute -right-44 -top-48 hidden h-48 w-48 rounded-xl bg-black p-5 group-hover:block">
                    <div>
                      <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3FB9BE]">
                        <i className="fa-solid fa-info"></i>
                      </span>
                      <h5 className="ml-2 inline font-medium text-[#3FB9BE]">
                        INFO
                      </h5>
                    </div>
                    <p className="text-sm">
                      You will not need to share your account credentials with
                      the booster. Instead, the booster will play together with
                      you in a shared lobby
                    </p>
                  </div>
                  <div className="form-check form-check-inline cursor-pointer rounded-lg border border-gray-600 bg-slate-800 px-2 py-3">
                    <input
                      className="form-check-input float-left mr-2 mt-[2px] h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-black bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-green-300 checked:bg-green-300 focus:outline-none"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option2"
                    />
                    Play with Booster
                    <span className="ml-3 rounded-xl bg-red-500 px-2 text-sm font-semibold">
                      Hot
                    </span>
                  </div>
                </label>
              </div>
              <div className="mt-5  w-full items-center justify-center">
                <h4 className="mb-2 text-xl font-semibold">
                  Total Price: <span className="text-[#3FB9BE]">$50.33</span>
                </h4>
                <button className="w-full rounded-lg bg-green-300 px-4 py-2 text-2xl font-semibold text-black">
                  BOOST ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
