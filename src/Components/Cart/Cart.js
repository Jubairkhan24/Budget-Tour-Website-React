import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const processed = Math.random(props.id);
    // console.log(processed)
    const { cart } = props;
    let total = 0;
    for (const spot of cart) {
        total = total + spot.cost
    }
    return (
        <div className="cart-box">
            <div className="text-styles">
                <h3 className="heading-style">Choosen Places</h3>
                <h5>Places Booking: {props.cart.length} {props.id}</h5>
                <h2>{props.cart.name}</h2>
                {
                    cart.map(places => <ul key={places.processed}

                    > <li className="text-style">{places.name} </li> </ul>)
                }
                <br />
                <p>Total Cost: {total} Bdt</p>
            </div>

        </div>
    );
};

export default Cart;