import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({ products }) => {
    return (
        <div className='row'>
            {products.map(product => (
                <ItemCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ItemList
