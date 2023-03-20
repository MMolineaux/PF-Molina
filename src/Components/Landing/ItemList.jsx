import React from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
