import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

const AppFire = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const db = getFirestore();
    const artRef = collection(db, 'items');

    getDocs(artRef).then((snapshot) => {
      if (snapshot.size > 0) {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      } else {
        console.log("No hay resultados.");
      }
    })
  }, [])

  console.log(items);

  return <div>AppFire</div>;
};

export default AppFire;
