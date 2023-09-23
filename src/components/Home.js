import { CartState } from "../context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { products } = CartState();

  return (
    <div style={{ textAlign: "center" }}>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;