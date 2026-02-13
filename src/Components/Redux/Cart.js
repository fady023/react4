import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import "../Products/pro.css";
import { productSlice } from './productSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const cart_items = useSelector((state) => state.products.items);
  const total = useSelector((state)=>state.products.total);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(productSlice.actions.calctotal());
  });
  return (

    <div className='products'>

      {cart_items.map((item, idx) => (
        <div className='pro' key={idx}>
          <img src={item.thumbnail} alt='g' />
          <h2>{item.title}</h2>
        <p>{item.price}</p>
          <h4>{item.description}</h4>
          <button onClick={() => dispatch(productSlice.actions.removefromcart(item))}> Remove to cart </button>
        </div>
      ))}
      <h3>Total {total}</h3>
    </div>
  )
}

export default Cart
