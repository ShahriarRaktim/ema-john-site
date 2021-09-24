import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([])

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) =>{
         setProducts(data)
         setDisplayProduct(data)
        });
  }, []);
  useEffect(() => {
    if (products.length) {
      const stored = getStoredCart();
      const storedCart = [];
      for (const key in stored) {
        const addProduct = products.find((product) => product.key === key);
        if (addProduct) {
          const quantity = stored[key];
          addProduct.quantity = quantity;
          storedCart.push(addProduct);
        }
      }

      setCart(storedCart);
    }
  }, [products]);

  const handleAddtoCart = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };
  const searchHandlar = (event) =>{
    const text = event.target.value;
    const matchProducts = products.filter(product => product.name.toLowerCase().includes(text.toLowerCase()))
    setDisplayProduct(matchProducts);
    // console.log(matchProducts.length)
  }
  return (
    <div>
      <div className="search-container">
        <input
        onChange={searchHandlar} 
        type="text"
        placeholder="type product name here"
        />
      </div>
      <div className="shop-container">
      <div className="Product-container">
        {displayProduct.map((product) => (
          <Product
            handleAddtoCart={handleAddtoCart}
            key={product.key}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart products={cart}></Cart>
      </div>
    </div>
    </div>
  );
};

export default Shop;
