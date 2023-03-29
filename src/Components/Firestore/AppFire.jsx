import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const AppFire = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const artRef = collection(db, "items");

    getDocs(artRef).then((snapshot) => {
      if (snapshot.size > 0) {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    });
  }, []);

  console.log(items);

  return (
    <div>
      {items.map((product) => (
        <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.id}>
          <div
            className="card text-center"
            style={{
              width: "100%",
              margin: "auto",
              marginBottom: "1rem",
              padding: "0.5rem",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top"
              style={{ display: "block", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#CFCEB6" }}
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppFire;
