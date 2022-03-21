import { Routes, Route } from "react-router-dom";
// import Footer from "./Components/Footer";
// import AdminFooter from "./Components/Admin/Footers/FooterAdmin";
// import Navbar from "./Components/Navbar";
// import AdminNavbar from "./Components/Admin/Navbars/AdminNavbar";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Game from "./Pages/Game";
import Error from "./Pages/Error";
import AdminDashboard from "./Pages/Admin/Dashboard";
import { matchPath, useLocation } from "react-router-dom";
import './css/style.scss';
import './charts/ChartjsConfig';

// const routes = [ ':state/:city', ...otherRoutes ];

function App() {
  const { pathname } = useLocation();

  return (
    <div className={pathname.includes("admin") ? "app"  : "app text-white bg-[ #11141d]" } >
      {/* {pathname.includes("admin") ? <AdminNavbar /> : <Navbar />} */}
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* {pathname.includes("admin") ? <AdminFooter /> : <Footer />} */}
    </div>
  );
}

export default App;
