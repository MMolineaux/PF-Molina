import React from "react";
import "../../index.css";

const Banner = () => {
  const scrollToProducts = () => {
    const products = document.getElementById("products");
    products.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div style={{ position: "relative", backgroundColor: "#373730" }}>
        <img
          src="https://live.staticflickr.com/65535/52751660217_7723614ca5_k.jpg"
          className="d-block w-100"
          alt="girl standing in an art gallery"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "4rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            Welcome to the UAG
          </h1>
          <button
            onClick={scrollToProducts}
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#CFCEB6",
              color: "#000",
              padding: "1rem",
              fontSize: "1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            View pieces
          </button>
        </div>
      </div>
      <div
        id="products"
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "inline-block" }}>
          <h2
            className="pieces-h2"
            style={{ display: "inline", marginTop: "20px" }}
          >
            Available Pieces
          </h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
