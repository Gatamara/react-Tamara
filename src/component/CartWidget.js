import { Component } from "react";

import Button from "./Button";
import DetallesCarro from "./DetallesCarro";

class CartWidget extends Component {
  render() {
    const { carro } = this.props;

    return (
      <div>
        <Button>Carro</Button>
        <DetallesCarro carro={carro} />
      </div>
    );
  }
}

export default CartWidget;
