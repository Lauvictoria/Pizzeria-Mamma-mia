import React, { useState } from 'react';
import { pizzaCart } from '../pizzas'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map(pizza => 
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
      .filter(pizza => pizza.quantity > 0)
    );
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <>
      <h2>Carrito de Compras</h2>
      <div className="cart-container">
        {cart.map((pizza) => (
          <Card key={pizza.id} style={{ width: '18rem', marginBottom: '10px' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                <strong>Precio:</strong> ${pizza.price} <br />
                <strong>Cantidad:</strong> {pizza.quantity}
              </Card.Text>
              <div className="button-container">
                <Button onClick={() => increaseQuantity(pizza.id)} variant="primary">+</Button>
                <Button onClick={() => decreaseQuantity(pizza.id)} variant="danger">-</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h3>Total: ${total}</h3>
      <Button variant="success">Pagar</Button>
    </>
  );
};

export default Cart;

