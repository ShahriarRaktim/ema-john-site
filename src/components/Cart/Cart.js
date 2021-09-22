import React from "react";
import "./Cart.css";

const Cart = (props) => {
    let total= 0;
    for(const product of props.products){
        total = total + product.price;
    }
  return (
    <div>
      <h1>cart</h1>
      <h3>items orderd:{props.products.length}</h3>
      <h3>Order Total:{total}</h3>
    </div>
  );
};

export default Cart;
