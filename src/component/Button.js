import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <button className="btn-agregar" {...this.props} />
      </div>
    );
  }
}

export default Button;
