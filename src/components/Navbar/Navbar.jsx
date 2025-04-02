import { NavLink } from "react-router-dom";
import CardWidget from '../CardWidget/CardWidget';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <p>LOGO</p>
        <ul className="nav-bar-items">
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/category/playera">Playera</NavLink></li>
          <li><NavLink to="/category/pantalones">Pantalones</NavLink></li>
          <li><NavLink to="/category/sudaderas">Sudaderas</NavLink></li>
        </ul>
        <CardWidget />
      </nav>
    </header>
  );
};

export default Navbar;