import React from "react";
import "../../index.css";

const Banner = () => {
  return (
    <>
      <div style={{ backgroundColor: "373730" }}>
        <img
          src="https://live.staticflickr.com/65535/52751660217_7723614ca5_k.jpg"
          className="d-block w-100"
          alt="girl standing in an art gallery"
        />
      </div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "20px", marginBottom: "20px"  }}>
        <div style={{ display: "inline-block" }}>
          <h2 className="pieces-h2" style={{ display: "inline", marginTop: "20px" }}>
            Available Pieces
          </h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
