import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <p>LOGO</p>
        <ul className="nav-bar-items">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <p>CARRITO (3)</p>
      </nav>
    </header>
  );
};

export default Navbar;