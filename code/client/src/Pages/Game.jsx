import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../Components/Spinner/Spinner";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
import Cookies from "js-cookie";

function Game() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState([]);
  const [option, setOption] = useState([]);
  const [complateData, setComplateData] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/game/${id}`).then((res) => {
      setGame(res.data);
      setTotalPrice(+(+res.data[0]?.price - +res.data[0]?.discount).toFixed(2));
    });

    axios.get(`http://127.0.0.1:8000/api/option`).then((res) => {
      setOption(res.data);
      setComplateData(true);
    });
  }, [id]);

  const handleChange = (e) => {
    let optionPrice = e.target.alt;
    console.log(e.target.checked);
    if (e.target.checked) {
      setTotalPrice((e) => (+e + +optionPrice).toFixed(2));
    } else {
      setTotalPrice((e) => (+e - +optionPrice).toFixed(2));
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/buy",
      data: formData,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          navigate("/login");
        } else {
          navigate("/successorder", { replace: true });
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      {complateData === false ? <Spinner /> : ""}
      <div className="mt-10 px-10">
        <h1 className="mb-10 text-4xl">{game[0]?.name}</h1>
        <div className="grid grid-cols-5 justify-center gap-5">
          <Swiper
            // effect="coverflow"
            // slidesOffsetAfter={20}
            // allowSlideNext={true}
            // grabCursor="true"
            centeredSlides="true"
            slidesPerView={1}
            // spaceBetween={10}
            // autoHeight={true}
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
            {game[0]?.images.split(",").map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  // width={400}
                  height={200}
                  className=" transition-opacity duration-500 group-hover:opacity-75"
                  src={image}
                  alt={game[0]?.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <form
            onSubmit={formSubmit}
            className="col-span-5 sm:m-10 md:col-span-2 md:m-0 lg:mx-5 lg:mb-5 xl:mx-10 xl:mb-10"
          >
            <div className="flex justify-center ">
              <img src={game[0]?.main_image} alt={game[0]?.name} />
            </div>
            <div className="mt-5 mb-3 flex items-center gap-3">
              {game[0]?.discount ? (
                <div className="rounded-md bg-[#3FB9BE] px-2 py-1 font-semibold text-black">
                  -%{Math.round((+game[0]?.discount / +game[0]?.price) * 100)}
                </div>
              ) : (
                ""
              )}
              <div
                className={
                  game[0]?.discount === 0 ? "" : "text-gray-400 line-through"
                }
              >
                {game[0]?.price !== 0 ? `$${game[0]?.price}` : "Free"}
              </div>
              {game[0]?.discount ? (
                <div className="font-semibold">
                  ${(+game[0]?.price - +game[0]?.discount).toFixed(2)}
                </div>
              ) : (
                ""
              )}
            </div>
            {game[0]?.discount ? <p>Sale ends 4/17/2022 at 6:00 PM</p> : ""}
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
                      name="currentDivision"
                    >
                      {game[0]?.currentDivision.split(",").map((e, index) => (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      ))}
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
                     after:text-[#979aae] after:content-['Desired-Division']"
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
                      name="desiredDivision"
                    >
                      {game[0]?.desiredDivision.split(",").map((e, index) => (
                        <option key={index} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-1 items-center justify-center gap-3 lg:grid-cols-2">
                  {option?.map((e, index) => (
                    <div
                      key={index}
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
                    >
                      <div className="z-100 absolute -right-10 -top-52 hidden w-48 rounded-xl bg-black p-5 group-hover:block">
                        <div>
                          <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3FB9BE]">
                            <i className="fa-solid fa-info"></i>
                          </span>
                          <h5 className="ml-2 inline font-medium text-[#3FB9BE]">
                            INFO
                          </h5>
                        </div>
                        <p className="text-sm">{e.description}</p>
                      </div>
                      <label>
                        <div className="form-check form-check-inline cursor-pointer rounded-lg border border-gray-600 bg-slate-800 py-3 px-2">
                          <input
                            className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-black bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-green-300 checked:bg-green-300 focus:outline-none"
                            type="checkbox"
                            id={e.option}
                            name={e.option}
                            value={e.option}
                            alt={e.price}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                          {e.option}
                          <span
                            className={
                              e.tags === null && e.price === 0
                                ? "ml-3 rounded-xl bg-blue-500 px-2 text-sm font-semibold"
                                : e.tags === null && e.price !== 0
                                ? ""
                                : "ml-3 rounded-xl bg-red-500 px-2 text-sm font-semibold"
                            }
                          >
                            {e.tags === null && e.price === 0 ? "Free" : e.tags}
                          </span>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
                <input type="hidden" name="game_id" value={id} />
                <div className="mt-5  w-full items-center justify-center">
                  <h4 className="mb-2 text-xl font-semibold">
                    Total Price:
                    <span className="text-[#3FB9BE]">${totalPrice}</span>
                  </h4>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#3FB9BE] px-4 py-2 text-xl font-semibold text-black"
                  >
                    BOOST ME
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Game;
