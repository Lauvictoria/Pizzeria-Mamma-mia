import CardPizza from "./CardPizza"
import Header from "./Header"

const Home = () => {
  return (
      <>
         <Header/>
         <div className="card-container">
             <CardPizza
                 name="Pizza Napolitala"
                 price={5950}
                 ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                 img= 'src/assets/img/pizza-napolitana.jpg'
             />
             <CardPizza
                 name="Pizza Española"
                 price={6950}
                 ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                 img="src/assets/img/pizza_espanola_chiguayante_lucasi.jpg"
             />
             <CardPizza
                 name="Pizza Pepperoni"
                 price={6950}
                 ingredients={["mozzarella", "pepperoni", "orégano"]}
                 img="src/assets/img/pizza-pepperoni.jpg"
             />
         </div>
      </>
  );
}

export default Home;
