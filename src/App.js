import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Products from './Routes/Products';
import SingleProduct from "./Routes/SingleProduct";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Redux/Cart";

function App() {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Products />} />
    <Route path='/products' element={<Products />} />
    <Route path='/products/:id' element={<SingleProduct />} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>
  
  </>
  );
}

export default App;
