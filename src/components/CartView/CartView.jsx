import { useCart } from "../../context/CartContext";
import "./CartView.css";

function CartView() {
  const { carrito, eliminarDelCarrito, cantidadTotal } = useCart();

  if (carrito.length === 0) {
    return <h2>Tu carrito está vacío.</h2>;
  }

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * (item.cantidad || 1),
    0
  );

  return (
    <div className="cart-view">
      <h2>Tu Carrito</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.nombre} — ${item.precio} × {item.cantidad}
            <button onClick={() => eliminarDelCarrito(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default CartView;



