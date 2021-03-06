import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { NavLink } from "react-router-dom";
import UseCarts from "../Hooks/UseCarts";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = UseCarts();
  const [displayProduct, setDisplayProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProduct(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count/size);
        setPageCount(pageNumber);
      });
  }, [page]);
  // useEffect(() => {
  //   if (products.length) {
  //     const savedCart = getStoredCart();
  //     const storedCart = [];
  //     for (const key in savedCart) {
  //       const addProduct = products.find((product) => product.key === key);
  //       if (addProduct) {
  //         const quantity = savedCart[key];
  //         addProduct.quantity = quantity;
  //         storedCart.push(addProduct);
         
  //       }
  //     }

  //     setCart(storedCart);
  //   }
  // }, [products]);

  const handleAddtoCart = (product) => {
    const exists = cart.find(pd=> pd.key === product.key);
    let newCart = [];
    if(exists){
        const rest = cart.filter(pd => pd.key !== product.key);
        exists.quantity= exists.quantity+1;
        newCart = [...rest, product]
    }
    else{
        product.quantity = 1;
        newCart = [...cart, product]
    }
    setCart(newCart);
    addToDb(product.key);
  };
  const searchHandlar = (event) => {
    const text = event.target.value;
    const matchProducts = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setDisplayProduct(matchProducts);
    // console.log(matchProducts.length)
  };
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
          <div className="pagination">
            {
              [...Array(pageCount).keys()].map(number=><button
              className={number === page ? 'selected' : ''}
                 key={number.key}
              onClick={()=>setPage(number)}
              >{number+1}</button>)
            }
          </div>
        </div>
        <div className="cart-container">
          <Cart products={cart}>
            <NavLink to='/order'>
              <button className="btn-regular">Review Your Order</button>
            </NavLink>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
