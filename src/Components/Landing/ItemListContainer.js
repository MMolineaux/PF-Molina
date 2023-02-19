import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div class="greeting-container">
            <h1>{props.greeting}</h1>
        </div>
        
    );
};

export default ItemListContainer;