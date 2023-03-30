import React from 'react';

const Products = ({ products }) => {
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
                <a href="#" className="btn" style={{ backgroundColor: "#CFCEB6" }}>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
