import { Component } from "react";
import Button from "./Button";

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro, quitarAlCarro } = this.props;
    const { carro } = this.props;
    return (
      <div className="producto">
        <img alt={Producto.name} src={producto.img} />
        <h3>{producto.name} </h3>
        <p> {producto.price} </p>

        <div className="contador">
          <Button onClick={() => quitarAlCarro(producto)}> - </Button>

          <Button onClick={() => agregarAlCarro(producto)}> + </Button>
        </div>
      </div>
    );
  }
}

export default Producto;
