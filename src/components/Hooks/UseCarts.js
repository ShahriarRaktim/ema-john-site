import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const UseCarts = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        if(products.length) {
            const savedCart= getStoredCart();
            let storedCart =[];
            for (const key in savedCart){
            const addedProducts = products.find(product => product.key === key);
                if(addedProducts){
                const quantity = savedCart[key];
                addedProducts.quantity = quantity;
                storedCart.push(addedProducts);
                }
            }
        setCart(storedCart);
        }
    },[products])
    return [cart, setCart] ;
};

export default UseCarts;