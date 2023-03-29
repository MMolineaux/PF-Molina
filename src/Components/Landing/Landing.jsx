import React from 'react'
import ItemListContainer from './ItemListContainer'
import Banner from './Banner'
import AppFire from '../Firestore/AppFire'


const Landing = () => {
  return (
<>
    <Banner />
    <AppFire />
    <ItemListContainer />
</>

  )
}

export default Landing