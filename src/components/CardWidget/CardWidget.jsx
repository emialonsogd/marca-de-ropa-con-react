import { useCart } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import "./CardWidget.css";

function CardWidget() {
  const { cantidadTotal } = useCart();

  return (
    <NavLink to="/cart" className="card-widget">
      🛒<span className="card-count">{cantidadTotal()}</span>
    </NavLink>
  );
}

export default CardWidget;