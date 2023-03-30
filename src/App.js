import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import FtArtists from "./Components/Artists/FtArtists";

function App() {
  const message = "Sorry! No featured artists yet!";

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route exact path="/FtArtist" element={<FtArtists message={message} />}/>
          <Route exact path="/" element={<Landing />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
