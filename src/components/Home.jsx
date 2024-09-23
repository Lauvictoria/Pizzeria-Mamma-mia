import CardPizza from "./CardPizza"
import Header from "./Header"
import { pizzas } from "../pizzas";

const Home = () => {

  const [pizzas, setPizzas] = useState([]);

  
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
