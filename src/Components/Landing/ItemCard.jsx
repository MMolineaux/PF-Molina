import React from 'react'

const ItemCard = ({ product }) => {
    return (
        <div className='col'>
            <div className="card text-center" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" style={{ display: "block", margin: "auto" }} alt={product.name} />
                <div className="card-body">
                    <p className="card-title">{product.name}</p>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Price: ${product.price}</p>
                    <a href="#" className="btn" style={{ backgroundColor: '#CFCEB6' }}>Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default ItemCard

