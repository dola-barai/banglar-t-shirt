import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {_id, picture, name, price} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button className='btn-buy' onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;