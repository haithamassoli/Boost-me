import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
function MobileGames({ system }) {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/games/").then((res) => {
      const systemGame = res.data.filter((game) => {
        return game.category === system;
      });
      setGames(systemGame);
    });
  }, []);

  useEffect(() => {
    if (windowDimensions >= 778) {
      setGames(games.splice(1));
    }
  }, [windowDimensions]);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-2 text-xl font-semibold text-white md:px-10">
        <h4>
          {system === "ios" ? (
            <i className="fa-brands fa-apple mr-2"></i>
          ) : (
            <i className="fa-brands fa-android mr-2"></i>
          )}
          {system === "ios" ? "Apple " : "Android "}
          Games
        </h4>
        <h4 className="cursor-pointer  text-green-400">
          SEE MORE
          <img
            className="ml-3 inline-block w-4 -rotate-90"
            style={{ filter: "invert(100%)" }}
            src="/assets/icons/angle-down.svg"
            alt="see more"
          />
        </h4>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4 px-4 md:grid-cols-3 md:px-20 lg:grid-cols-4 xl:grid-cols-5">
        {games?.map((game) => {
          return (
            <div onClick={() => navigate(`/game/${game.id}/`)} key={game.id}>
              <div className="flex cursor-pointer">
                <img
                  className="mr-3 h-16 w-16"
                  src={game.cover_image}
                  alt={game.name}
                />
                <div>
                  <h5 className="break-all">{game.name}</h5>
                  <p>{game.tags}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <i className="fa-regular  fa-star text-sm"></i>
                      <i className="fa-regular  fa-star text-sm"></i>
                      <i className="fa-regular  fa-star text-sm"></i>
                      <i className="fa-regular  fa-star text-sm"></i>
                      <i className="fa-regular  fa-star text-sm"></i>
                    </div>
                    {system === "ios" ? (
                      <i className="fa-brands fa-apple ml-3 mr-2 text-green-400"></i>
                    ) : (
                      <i className="fa-brands fa-android ml-3 mr-2 text-green-400"></i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileGames;
