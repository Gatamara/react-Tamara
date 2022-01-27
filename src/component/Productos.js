import { Component } from "react";
import Producto from "./Producto";

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro, quitarAlCarro } = this.props;

    return (
      <div className="productos">
        {productos.map((producto) => (
          <Producto
            agregarAlCarro={() => agregarAlCarro(producto)}
            key={producto.name}
            producto={producto}
            quitarAlCarro={() => quitarAlCarro(producto)}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
