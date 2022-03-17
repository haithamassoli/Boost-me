import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Game />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
