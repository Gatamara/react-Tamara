import { Component } from "react";
import Button from "./Button";

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div className="producto">
        <img alt={Producto.name} src={producto.img} />
        <h3>{producto.name} </h3>
        <p> {producto.price} </p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al Carro
        </Button>
      </div>
    );
  }
}

export default Producto;
