import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext.jsx";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            onAddToCart={() => addToCart(pizza)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
