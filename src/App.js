import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import FtArtists from "./Components/Artists/FtArtists";
import CartProvider from "./Components/Context/CartContext";

function App() {
  const message = "Sorry! No featured artists yet!";

  return (
    <>
      <CartProvider>

        <BrowserRouter>
          <Navbar />

          <Routes>

            <Route exact path="/" element={<Landing />} />

            <Route exact path="/FtArtist" element={<FtArtists message={message} />} />

          </Routes>
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
