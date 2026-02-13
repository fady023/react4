import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./pro.css";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {productSlice} from "../Redux/productSlice";

const ProductsComp = () => {

  const [products, setproducts] = useState([]);

const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => setproducts(res.data.products)).catch((err) => console.log(err));
  })
  return (
    <div className='products'>


      {products.map((el) => (
        <div key={el.id} className='pro'>
          <img src={el.thumbnail} />
          <h4>{el.title}</h4>
          <p>{el.price}</p>
          <h6>{el.description}</h6>

          <div className='btn'>
            <button onClick={()=>dispatch(productSlice.actions.addtocart(el))}> Add to cart </button>
            <Link to={`${el.id}`} >Show more ...</Link>
          </div>

        </div>
      ))}
    </div>
  )
}

export default ProductsComp
