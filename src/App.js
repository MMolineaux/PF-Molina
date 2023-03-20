import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import FtArtists from './Components/Artists/FtArtists';


function App() {

  const message = "Sorry! No featured artists yet!";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route exact path="/" element={<Landing />} />

          <Route exact path="/FtArtists" element={<FtArtists message={message} />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;