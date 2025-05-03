import { Link } from "react-router-dom";
import './Item.css';


function Item({ producto }) {
  return (
    <div className="item-card">
      <h3>{producto.nombre}</h3>
      <p>Categoría: {producto.categoria}</p>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;