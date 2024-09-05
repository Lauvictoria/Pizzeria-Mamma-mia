import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPizza = ({ name, price, ingredients, img }) => {
    
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <strong className='ingr-text'>Ingredientes:</strong>
                <ul>
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <strong className='price-text'>Precio:</strong> ${price} <br />
            </Card.Text>
            <div className='button-container'>
                <Button className='button-card1' variant="primary">Ver más</Button>
                <Button className='button-card2' variant="primary">Añadir</Button>
           </div>
        </Card.Body>
        </Card>
      );
          
}

export default CardPizza