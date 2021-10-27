import React from "react";
import { useForm } from "react-hook-form";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import UseAuth from "../Hooks/UseAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user} = UseAuth();
  const savedCart= getStoredCart();
  const onSubmit = (data) => {
    data.order = savedCart;
    fetch('http://localhost:5000/products/shipping', {
      method:'POST',
      headers:{"content-type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
      if(result.insertedId){
        alert("added successfully")
        clearTheCart();
        reset();
      }
    })
  };
  return (
    <div>
      <h1>Information Please</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <input defaultValue={user.displayName} {...register("name")} />
          <input defaultValue={user.email} {...register("email", { required: true })} />
          {errors.email && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
          <input defaultValue="Address" {...register("Address")} />
          <input defaultValue="City" {...register("City")} />
          <input defaultValue="Phone Number" {...register("Phone Number")} />
        </div>
        <input className="btn-regular" type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
