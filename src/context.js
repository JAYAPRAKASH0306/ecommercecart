import { createContext, useContext, useEffect, useState } from "react";

const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

useEffect(()=>{
  fetch("Products.json")
  .then((res)=>res.json()).then((result)=>setProducts(result))
},[])

  const [products,setProducts] = useState([]);

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
