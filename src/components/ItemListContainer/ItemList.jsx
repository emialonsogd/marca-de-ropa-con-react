function ItemList({ productos }) {
    return (
      <div className="item-list">
        {productos.map((producto) => (
          <div key={producto.id} className="item">
            <h3>{producto.nombre}</h3>
            <p>{producto.categoria}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ItemList;
  