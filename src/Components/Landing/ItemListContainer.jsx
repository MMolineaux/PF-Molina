import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import getList from '../Utils/products';


const ItemListContainer = () => {

  const [arrayList, setArrayList] = useState([]);


  useEffect(() => {
    getList()
      .then((response) => setArrayList(response))
      .catch((err) => console.error(err))
      .finally()
  }, [])

  return (
    <div className='listContainer'>
      <ItemList products={ arrayList } />
    </div>
  )
}

export default ItemListContainer
