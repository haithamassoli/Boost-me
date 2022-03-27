import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Game from "./Pages/Game";
import SuccessOrder from "./Pages/SuccessOrder";
import Error from "./Pages/Error";
import Spinner from "./Components/Spinner/Spinner";
import { AuthProvider } from "./util/Auth";
import RequiredAuth, { NotRequiredAuth } from "./util/RequiredAuth";

function App() {
  return (
    <AuthProvider>
      <div className="app bg-[ #11141d] text-white">
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <NotRequiredAuth>
                  <Login />
                </NotRequiredAuth>
              }
            />
            <Route
              path="/signup"
              element={
                <NotRequiredAuth>
                  <Signup />
                </NotRequiredAuth>
              }
            />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/spinner" element={<Spinner />} />
            <Route
              path="/successorder"
              element={
                <RequiredAuth>
                  <SuccessOrder />
                </RequiredAuth>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
