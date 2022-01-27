import { Component } from "react";

import NavBar from "./component/NavBar/NavBar";
import Productos from "./component/Productos";
import Layout from "./component/Layout";
import ItemListContainer from "./component/ItemListContainer";

class App extends Component {
  state = {
    productos: [
      { name: "Nezuko", price: 1500, img: "/productos/nezuko.jpg", stock: 10 },
      {
        name: "Rengoku",
        price: 1500,
        img: "/productos/rengoku.jpg",
        stock: 20,
      },
      { name: "Tomioka", price: 1500, img: "/productos/tomioka.jpg", stock: 7 },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    if (producto.stock <= 0) {
      return;
    }

    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name && producto.stock >= x.cantidad + 1
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  quitarAlCarro = (producto) => {
    if (producto.stock <= 0) {
      return;
    }

    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name && x.cantidad > 0
          ? {
              ...x,
              cantidad: x.cantidad - 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  mostrarCarro = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <NavBar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        ></NavBar>
        <Layout>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
            quitarAlCarro={this.quitarAlCarro}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
