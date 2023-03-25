import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import FtArtists from "./Components/Artists/FtArtists";
import AppFire from "./Components/Firestore/AppFire";

function App() {
  const message = "Sorry! No featured artists yet!";

  return (
    <>
      <BrowserRouter>

        <Navbar />


        <Routes>

          <Route exact path="/" element={<Landing />} />

          <Route exact path="/FtArtist" element={<FtArtists message={message} />}/>

        </Routes>
        <AppFire />
      </BrowserRouter>
    </>
  );
}

export default App;
