import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

function RequiredAuth({ children }) {
  const location = useLocation();

  if (!Cookies.get("auth")) {
    return <Navigate to={"/login"} state={{ path: location.pathname }} />;
  }
  return children;
}

export function NotRequiredAuth({ children }) {
  const location = useLocation();

  if (!Cookies.get("auth")) {
    return children;
  } else {
    return <Navigate to={"/"} state={{ path: location.pathname }} />;
  }
}

export default RequiredAuth;
