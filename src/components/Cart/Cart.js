import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const products = props.products;
  

  /* Problem here*/
  let totalQuantity = 0;
  let total= 0;
  let shipping = 0;
  let tax = 0;
  for(const product of products){
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
    shipping = shipping + product.shipping * product.quantity;
    tax = tax + (product.price /10) * product.quantity;
  }


  // const total = product.reduce(
  //   (previous, current) => previous + current.price*totalQuantity,
  //   0
  // );
  // const shiping = products.reduce(
  //   (previous, current) => previous + current.shipping,
  //   0
  // );
  // const tax = products.reduce(
  //   (previous, current) => previous + current.price / 10,
  //   0
  // );

  const grandTotal = total+tax+shipping;

  return (
    <div className="cart">
      <h1>cart</h1>
      <h3>items orderd:{totalQuantity}</h3>
      <h3>Order Total:{total.toFixed(2)}</h3>
      <h3>Shipping:{shipping.toFixed(2)}</h3>
      <h3>Tax:{tax.toFixed(2)}</h3>
      <h3>Grandtotal:{grandTotal.toFixed(2)}</h3>
      {props.children}
    </div>
  );
};

export default Cart;
