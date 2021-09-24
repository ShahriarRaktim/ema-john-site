import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller, price, stock, star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
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
                <Rating
                  initialRating={star}
                  emptySymbol="far fa-star rating"
                  fullSymbol="fas fa-star  rating"
                  readonly
                ></Rating>
                <br />
                <button onClick={()=>props.handleAddtoCart(props.product)} className="btn-regular">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;