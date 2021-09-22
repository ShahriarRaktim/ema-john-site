import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="information">
                <h1>{name}</h1>
                <h3>By:{seller}</h3>
                <h2>${price}</h2>
                <h3>Only {stock} left in stock- order soon</h3>
                <button onClick={()=>props.handleAddtoCart(props.product)} className="btn-regular">add to cart</button>
            </div>
        </div>
    );
};

export default Product;