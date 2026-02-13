import React from 'react'
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productSlice } from '../Redux/productSlice';
import { useDispatch } from 'react-redux';


const Navbar = () => {
   const total = useSelector((state)=>state.products.total);
   const cart_items = useSelector((state)=>state.products.items);
  const dispatch = useDispatch();
   useEffect(()=>{
       dispatch(productSlice.actions.calctotal());
     });
  return (
    <nav>
      <span>Logo</span>
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>  
            <li><NavLink to="/cart">Cart {cart_items.length}</NavLink></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
