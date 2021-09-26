import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Spot.css'

const Spot = () => {
    const [spots, setSpots] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./spots.json')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, [])

    const addToCart = (spot) => {
        const newCart = [...cart, spot];
        setCart(newCart);
    }

    return (
        <div className="spot-container">
            <div className="card-container">
                {
                    spots.map(card => <Card
                        key={card.id}
                        card={card}
                        addToCart={addToCart}
                    ></Card>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Spot;