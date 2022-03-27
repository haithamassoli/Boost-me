import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
import MobileGames from "../Components/MobileGames";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
function Home() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [complateData, setComplateData] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/games/").then((res) => {
      const pcGames = res.data.filter((game) => {
        return game.category === "PC";
      });
      setGames(pcGames);
      setComplateData(true);
    });
  }, []);
  return (
    <>
      {complateData === false ? <Spinner /> : ""}
      <div className="bg-[#11141D]  pb-10 ">
        <div className="flex items-center justify-between px-10 pt-6 pb-4 text-white">
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
            // centeredSlides="true"
            slidesPerView={1}
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
              400: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            className="mySwiper pb-10"
          >
            {games.slice(0, 10).map((game, index) => (
              <SwiperSlide key={index} className="group cursor-pointer">
                <div
                  className="flex items-center justify-center"
                  onClick={() => navigate(`/game/${game.id}/`)}
                >
                  <h4
                    className="absolute top-2 left-2 z-10 rounded-2xl bg-slate-500/70
                              px-3 py-1 text-sm font-semibold text-white"
                  >
                    {game.tags}
                  </h4>
                  <img
                    className="transition-opacity duration-500 group-hover:opacity-60"
                    src={game.cover_image}
                    alt={game.name}
                  />
                  <h3 className="absolute bottom-6 z-10 text-2xl font-semibold text-white  shadow-2xl hover:text-green-400 group-hover:text-green-400">
                    {game.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <MobileGames system="android" />
        <MobileGames system="ios" />
        <div className="mt-12 grid grid-cols-2 gap-2 px-4 md:grid-cols-4 md:px-20 lg:grid-cols-5">
          {games.slice(0, 10).map((game, index) => (
            <div
              key={game.id}
              className="group relative cursor-pointer"
              onClick={() => navigate(`/game/${game.id}/`)}
            >
              <div
                className="absolute bottom-0 left-0 h-44 w-full "
                style={{
                  background:
                    "linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(107,107,107,0) 100%)",
                }}
              ></div>
              <img
                className="z-10 transition-opacity duration-500 group-hover:opacity-75"
                src={game.cover_image}
                alt={game.name}
              />

              <h3 className="absolute bottom-6 left-auto z-40 w-full text-center text-xl font-semibold  text-white hover:text-green-400 group-hover:text-green-400">
                {game.name}
              </h3>
            </div>
          ))}
        </div>
        <button className="m-auto mt-10 flex justify-center rounded-tr-3xl rounded-bl-3xl px-10 py-3 text-center ring-2 ring-green-400">
          LOAD MORE GAMES
        </button>
      </div>
    </>
  );
}

export default Home;
