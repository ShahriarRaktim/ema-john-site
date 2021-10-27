import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const UseCarts = ()=> {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const savedCart= getStoredCart();
        const keys = Object.keys(savedCart);
        fetch('http://localhost:5000/products/byKeys', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products =>{
            if(products.length) {
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
        })
    
    },[]);
    return [cart, setCart] ;
};

export default UseCarts;