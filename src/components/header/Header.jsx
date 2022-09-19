import React from "react";
import "./Header.css";
import CartWidget from "../header/CartWidget";


function Header() {
    return (
      <header className="header">
        <ul>
          <li>
            <a href="/react1/public/index.html">Inicio</a>
          </li>
          <li>
            <a href="/react1/public/index.html">Nosotros</a>
          </li>
          <li>
            <a href="/react1/public/index.html">Contacto</a>
          </li>
          <li>
            <a href="/react1/public/index.html">Productos</a>
          </li>
        </ul>
        <img src="https://systux.com.ar/julio/cool.svg" className="logo" alt="logo"/>
        <CartWidget/>
      </header>
    );
  }

  export default Header;
  