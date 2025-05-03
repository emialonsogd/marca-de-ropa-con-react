import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ producto }) {
    const { agregarAlCarrito } = useCart();
  return (
    <div className="item-card">
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <div className="item-card-actions">
        <Link to={`/item/${producto.id}`} className="btn-ver">
          Ver Detalle
        </Link>
        <button
          className="btn-agregar"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
