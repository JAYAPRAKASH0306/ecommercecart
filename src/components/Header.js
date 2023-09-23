import { Link } from "react-router-dom";
import { CartState } from "../context";
import "./style.css";

const Header = () => {
  const { cart } = CartState();

  return (
    <div>
      <span className="header">E-commerce</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
