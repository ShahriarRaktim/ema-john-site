import React, { useEffect, useState } from "react";
import Product from "../../../Product/Product";
import Cart from "../../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddtoCart = (product)=>{
    let newCart = [...cart, product]
    setCart(newCart);
  }
  return (
    <div className="shop-container">
      <div className="Product-container">
        {
        products.map((product) => <Product
        handleAddtoCart={handleAddtoCart} 
        key={product.key} 
        product={product}>          
        </Product>)
        }
      </div>
      <div className="cart-container">
          <Cart products={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
