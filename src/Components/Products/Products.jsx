import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const Products = ({ products }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-md-4">
        {products.map((product) => (
          <div className="col mb-4" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <div className="d-flex">
                  <button
                    className="btn mx-1"
                    style={{ backgroundColor: "#CFCEB6" }}
                    onClick={() => addToCart(product, 1)}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn mx-1" style={{border: "1px solid #CFCEB6", opacity: 0.7 }}
                    onClick={() => removeFromCart(product.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
