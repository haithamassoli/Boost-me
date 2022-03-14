import React from "react";

function MobileGames({ system }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-2 text-xl font-semibold text-white md:px-10">
        <h4>
          {system === "ios" ? (
            <i className="fa-brands fa-apple mr-2"></i>
          ) : (
            <i class="fa-brands fa-android mr-2"></i>
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
      <div className="mt-5 grid grid-cols-2 px-4 md:grid-cols-3 md:px-20 lg:grid-cols-4  xl:grid-cols-5">
        <div>
          <div className="flex">
            <img
              className="mr-3 h-16 w-16"
              src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png"
              alt="game"
            />
            <div>
              <h5>TEMPLE RUN 2</h5>
              <p>ACTION</p>
              <div className="flex items-center justify-between">
                <div>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                {system === "ios" ? (
                  <i className="fa-brands fa-apple ml-3 mr-2 text-green-400"></i>
                ) : (
                  <i class="fa-brands fa-android ml-3 mr-2 text-green-400"></i>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <img
              className="mr-3 h-16 w-16"
              src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png"
              alt="game"
            />
            <div>
              <h5>TEMPLE RUN 2</h5>
              <p>ACTION</p>
              <div className="flex items-center justify-between">
                <div>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                {system === "ios" ? (
                  <i className="fa-brands fa-apple ml-3 mr-2 text-green-400"></i>
                ) : (
                  <i class="fa-brands fa-android ml-3 mr-2 text-green-400"></i>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex">
            <img
              className="mr-3 h-16 w-16"
              src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png"
              alt="game"
            />
            <div>
              <h5>TEMPLE RUN 2</h5>
              <p>ACTION</p>
              <div className="flex items-center justify-between">
                <div>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                {system === "ios" ? (
                  <i className="fa-brands fa-apple ml-3 mr-2 text-green-400"></i>
                ) : (
                  <i class="fa-brands fa-android ml-3 mr-2 text-green-400"></i>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex">
            <img
              className="mr-3 h-16 w-16"
              src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png"
              alt="game"
            />
            <div>
              <h5>TEMPLE RUN 2</h5>
              <p>ACTION</p>
              <div className="flex items-center justify-between">
                <div>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                {system === "ios" ? (
                  <i className="fa-brands fa-apple ml-3 mr-2 text-green-400"></i>
                ) : (
                  <i class="fa-brands fa-android ml-3 mr-2 text-green-400"></i>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex">
            <img
              className="mr-3 h-16 w-16"
              src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png"
              alt="game"
            />
            <div>
              <h5>TEMPLE RUN 2</h5>
              <p>ACTION</p>
              <div className="flex items-center justify-between">
                <div>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                {system === "ios" ? (
                  <i className="fa-brands fa-apple ml-3 mr-2 text-green-400"></i>
                ) : (
                  <i class="fa-brands fa-android ml-3 mr-2 text-green-400"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileGames;
