import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../util/Auth";
import axios from "axios";
import Cookies from "js-cookie";

function Signup() {
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/signup",
      data: formData,
    })
      .then((res) => {
        if (res.data.errors[0]) {
          setError(res.data.errors[0]);
        } else {
          Cookies.set("auth", res.data.token, { expires: 30 });
          auth.login();
          navigate(redirectPath, { replace: true });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <main>
        <section className="absolute h-full w-full">
          <div
            className="absolute top-0 h-screen w-full bg-black"
            style={{
              backgroundImage: "url('/assets/TOURNAMENTS-BG.jpg')",
              backgroundSize: "100% 100hv",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute top-0 h-screen w-full bg-black/40"></div>
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full content-center items-center justify-center">
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-gray-300 shadow-lg">
                  <div className="mb-0 rounded-t px-6 py-6">
                    <div className="mb-3 text-center">
                      <h6 className="text-sm font-bold text-gray-600">
                        Sign up with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="mr-2 mb-1 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-normal font-bold uppercase text-gray-800 shadow outline-none hover:shadow-md focus:outline-none active:bg-gray-100"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="github"
                          className="mr-1 w-5"
                          src="https://raw.githubusercontent.com/creativetimofficial/tailwind-starter-kit/830f9267ad556745e6fd7857260c020dcd9dacea/Login%20Page/react-login-page/src/assets/img/github.svg"
                        />
                        Github
                      </button>
                      <button
                        className="mr-1 mb-1 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-normal font-bold uppercase text-gray-800 shadow outline-none hover:shadow-md focus:outline-none active:bg-gray-100"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="google"
                          className="mr-1 w-5"
                          src="https://raw.githubusercontent.com/creativetimofficial/tailwind-starter-kit/830f9267ad556745e6fd7857260c020dcd9dacea/Login%20Page/react-login-page/src/assets/img/google.svg"
                        />
                        Google
                      </button>
                    </div>
                    <hr className="border-b-1 mt-6 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                    <div className="mb-3 text-center font-bold text-gray-500">
                      <small>Or sign up with credentials</small>
                    </div>
                    <form onSubmit={formSubmit}>
                      {error && (
                        <div className="mb-3 w-full rounded-2xl bg-red-400 p-4 text-center text-black">
                          {error}
                        </div>
                      )}
                      <div className="relative mb-3 w-full">
                        <label
                          className="mb-2 block text-xs font-bold uppercase text-gray-700"
                          htmlFor="grid-password"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative mb-3 w-full">
                        <label
                          className="mb-2 block text-xs font-bold uppercase text-gray-700"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative mb-3 w-full">
                        <label
                          className="mb-2 block text-xs font-bold uppercase text-gray-700"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex cursor-pointer items-center">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox ml-1 h-5 w-5 rounded border-0 text-gray-800"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="mt-6 text-center">
                        <button
                          className="mr-1 mb-1 w-full rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign Up
                        </button>
                      </div>
                      <Link to={"/login"} className="text-black">
                        Do you have an account?
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Signup;
