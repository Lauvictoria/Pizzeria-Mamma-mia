import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext.jsx';

const Cart = () => {
  const { token } = useUser();
  const { cart, addToCart, removeFromCart, total } = useCart();
  const [mensajeExito, setMensajeExito] = useState('');

  const increaseQuantity = (id) => {
    addToCart(cart.find(pizza => pizza.id === id));
  };

  const decreaseQuantity = (id) => {
    removeFromCart(id);
  };

  const realizarCompra = async () => {
    if (!token) return;

    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        setMensajeExito('Compra realizada con éxito');
      }
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  };


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
      {mensajeExito && <p className="success">{mensajeExito}</p>}
      <Button variant="success" onClick={realizarCompra} disabled={!token}>Pagar</Button>
    </>
  );
};

export default Cart;

