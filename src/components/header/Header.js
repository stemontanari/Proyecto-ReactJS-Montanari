import "./Header.css";

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
        <img src="/media/imagenLogo.jpg" className="logo" alt="logo"/>
      </header>
    );
  }

  export default Header;