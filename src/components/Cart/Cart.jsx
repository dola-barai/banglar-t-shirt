import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloxxxx</h3>
            <p><small>Thanks for wasting your money :D</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order summary: {cart.length}</h2>
            {cart.length > 2
                ? <span className='orange'>Aro Kino</span> 
                : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                    >{tshirt.name} 
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }
            {
                cart.length === 2 && <p>Double bonanzaa!!!</p>
            }
            {
                cart.length === 3 || <h3>Tin ta to hoilo na Boss!!</h3>
            }
        </div>
    );
};

export default Cart;