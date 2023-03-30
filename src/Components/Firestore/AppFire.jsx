import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Products from "../Products/Products";

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

  return <Products products={items} />;
};

export default AppFire;

