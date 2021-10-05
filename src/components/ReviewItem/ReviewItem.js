import React from "react";

const ReviewItem = (props) => {
  const { name, img, seller, price, quantity, key} = props.product;
  const {removeHandler} = props;
  return (
    <div className="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="information">
        <h1>{name}</h1>
        <h3>By:{seller}</h3>
        <h2>${price}</h2>
        <h2>Quantity:{quantity}</h2>
        <br />
        <button onClick={()=>removeHandler(key)} className="btn-regular">remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
