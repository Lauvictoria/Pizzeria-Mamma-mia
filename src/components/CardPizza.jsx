import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const CardPizza = ({ id, name, price, ingredients, img, onAddToCart }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong className="ingr-text">Ingredientes:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <strong className="price-text">Precio:</strong> ${price} <br />
        </Card.Text>
        <div className="button-container">
          <Link className='button-card1' variant="primary" to={`/pizza/${id}`}>Ver detalles</Link>
          <Button
            className="button-card2"
            variant="primary"
            onClick={onAddToCart}
          >
            Añadir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
