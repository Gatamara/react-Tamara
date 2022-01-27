import { Component } from "react";

class ItemListContainer extends Component {
  render() {
    const { carro } = this.props;

    return (
      <div>
        {carro.map((x) => (
          <span> {x.cantidad} </span>
        ))}
      </div>
    );
  }
}

export default ItemListContainer;
