import { useEffect, useState } from "react";
import { CartState } from "../context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const { cart } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
      <span style={{ fontSize: 30 }}>Total: {total}</span>

    </div>
  );
};

export default Cart;