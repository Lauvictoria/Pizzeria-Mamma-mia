import CardPizza from "./CardPizza"
import Header from "./Header"
import { pizzas } from "../pizzas";

const Home = () => {
  return (
      <>
        <Header/>
        <div className="card-container">
            {pizzas.map((pizza) => (
            <CardPizza
            key={pizza.id}
            name={pizza.name}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            
          />
        ))}
        </div>
      </>
  );
}

export default Home;
