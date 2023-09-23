import React from 'react';
import { CartState } from "../context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css"

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = CartState();

  return (
    <div className="products">
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img src={prod.thumbnail} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            {prod.description}
          </Card.Text>

          <Card.Title>
            <h4>Price Rs. {prod.price}</h4>
          </Card.Title>

          <div className="button-container">
            {cart.includes(prod) ? (
              <Button
                variant="primary"
                color="red"
                className="btn btn-secondary"
                onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => setCart([...cart, prod])}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
