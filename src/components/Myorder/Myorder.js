import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import UseAuth from '../Hooks/UseAuth';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const {user} = UseAuth();
    const history = useHistory();
    useEffect(()=>{
        fetch(`http://localhost:5000/myorder?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res => {
            if(res.status === 200){
                return res.json()
            }
            else if(res.status === 401){
                history.push('/login');
            }
        })
        .then(result =>setOrders(result))
    },[]);
    return (
        <div>
            <h1>Hi {orders.length}</h1>
        </div>
    );
};

export default Myorder;