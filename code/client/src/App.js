import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Game from "./Pages/Game";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="app bg-[ #11141d] text-white">
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
