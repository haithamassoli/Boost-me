import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    Cookies.get("token") ? true : false
  );

  const login = () => {
    setIsAuthenticated(Cookies.get("token") ? true : false);
  };

  const logout = () => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/logout",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setIsAuthenticated(Cookies.get("token") ? true : false);
        Cookies.remove("token");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
