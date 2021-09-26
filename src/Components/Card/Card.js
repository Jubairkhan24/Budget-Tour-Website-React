import React from 'react';
import './Card.css'
const Card = (props) => {
    // console.log(props.card);
    const { name, img, division, cost, duration, type } = props.card
    return (
        <div className="card-body">
            <div>
                <img className="img-resize" src={img} alt="" />
            </div>
            <div className="text-resize">
                <h4>Place: {name}</h4>
                <p>Division: {division}</p>
                <p>Price: {cost}</p>
                <p><small>Duration: {duration}</small></p>
                <p><small>Area Type: {type}</small></p>
                <button
                    onClick={() => props.addToCart(props.card)}
                    className="purchase-button fas fa-cart-plus"
                >Add </button>
            </div>

        </div>
    );
};

export default Card;