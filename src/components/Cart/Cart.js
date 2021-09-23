import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const product = props.products;
  const total = product.reduce(
    (previous, current) => previous + current.price,
    0
  );
  const shiping = product.reduce(
    (previous, current) => previous + current.shipping,
    0
  );
  const tax = product.reduce(
    (previous, current) => previous + current.price / 10,
    0
  );
  const grandTotal = total + shiping + tax;

  return (
    <div>
      <h1>cart</h1>
      <h3>items orderd:{props.products.length}</h3>
      <h3>Order Total:{total.toFixed(2)}</h3>
      <h3>Shiping:{shiping.toFixed(2)}</h3>
      <h3>Tax:{tax.toFixed(2)}</h3>
      <h3>Grandtotal:{grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
