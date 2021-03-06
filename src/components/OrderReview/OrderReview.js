import React from "react";
import { useHistory } from "react-router-dom";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import UseCarts from "../Hooks/UseCarts";
import UseProducts from "../Hooks/UseProducts";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [cart, setCart] = UseCarts();
  const history = useHistory();
  const removeHandler = (key) =>{
      removeFromDb(key)
      const newCart = cart.filter(product => product.key !== key)
      setCart(newCart);
  }
  const handleBtn = () =>{
        history.push('/shipping');
        // setCart([]);
        // clearTheCart()
  }
  return (
    <div>
      <div className="shop-container">
        <div className="Product-container">
            {
                cart.map(product => <ReviewItem 
                    key={product.key}
                    product={product}
                    removeHandler={removeHandler}
                    ></ReviewItem>)
            }
        </div>
        <div className="cart-container">
          <Cart products={cart}>
              <button onClick={handleBtn} className='btn-regular'>Proceed to Shipping</button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;

