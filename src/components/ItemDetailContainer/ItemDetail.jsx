import './ItemDetail.css';

function ItemDetail({ producto }) {
  return (
    <div className="item-detail">
      <h2>{producto.nombre}</h2>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
    </div>
  );
}

export default ItemDetail;
