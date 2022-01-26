import { Component } from "react";
import CartWidget from "../CartWidget";

class NavBar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand"> Nacion Funko</a>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categorias
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Demon Slayer
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Harry Potter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sailor Moon
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Otras
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <CartWidget carro={carro} />
        </nav>
      </>
    );
  }
}

export default NavBar;
