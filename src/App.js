import CartWidget from "./components/container/CartWidget";
import ItemListContainer from "./components/container/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar titulo={"Nacion funko"}>
        <CartWidget />
      </NavBar>
      <ItemListContainer greeting={"hola gente"} />
    </div>
  );
}
