import { Component } from "react";

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    return (
      <div className="detalleCarro">
        <ul>
          {carro.map((x) => (
            <li key={x.name}>
              <img alt={x.name} src={x.img} width="50" height="32" />
              {x.name}
              <span> {x.cantidad} </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
