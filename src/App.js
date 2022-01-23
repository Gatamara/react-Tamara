//import CartWidget from "./component/CartWidget";
// import ItemListContainer from "./component/ItemListContainer";
import { Component } from "react";
import CartWidget from "./component/CartWidget";
import { NavBar } from "./component/NavBar/NavBar";
import Productos from "./component/Productos";

/* export default function App() {
 
  };

  return (
    <div className="App">
      <NavBar titulo={"Nacion funko"}>
        <CartWidget />
      </NavBar>
      <ItemListContainer greeting={"hola gente"} />
    </div>
  );
}
 */

class App extends Component {
  state = {
    productos: [
      { name: "Nezuko", price: 1500, img: "/productos/nezuko.jpg" },
      { name: "Rengoku", price: 1500, img: "productos/rengoku.jpg" },
      { name: "tomioka", price: 1500, img: "/productos/tomioka.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <NavBar titulo={"Nacion Funko"}>
          <CartWidget />
        </NavBar>

        <Productos
          agregarAlCarro={() => console.log("no hace nada")}
          productos={this.state.productos}
        />
      </div>
    );
  }
}

export default App;
